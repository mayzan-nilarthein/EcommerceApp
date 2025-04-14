import React from 'react';
import { View, Pressable, Text, StyleSheet, Platform } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSequence,
  withTiming,
} from 'react-native-reanimated';
import { useDispatch } from 'react-redux';
import { setCurrentColor } from '../store/slices/colorSlice';

import sizes from '../theme/sizes';
import { tab_cart, tab_home, tab_product } from '../assets/icons/icons';
import colors from '../theme/colors';
import { special_jiji } from '../assets/images/image';

const CustomTabBar: React.FC<BottomTabBarProps> = ({ state, navigation }) => {
  const color_array = [
    colors.primary,
    colors.orangeYellow,
    colors.accent,
    colors.avocadoGreen,
  ];

  const flowers_array = [tab_home, tab_product, tab_cart, special_jiji];
  const dispatch = useDispatch();

  const scaleValues = state.routes.map(() => useSharedValue(1));
  const rotateValues = state.routes.map(() => useSharedValue(0));

  const animatedStyles = state.routes.map((_, i) =>
    useAnimatedStyle(() => ({
      transform: [
        { scale: scaleValues[i].value },
        { rotateZ: `${rotateValues[i].value}deg` },
      ],
    })),
  );

  return (
    <View
      style={{
        ...styles.tabContainer,
        shadowColor: color_array[state.index],
        borderColor: color_array[state.index],
      }}
    >
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;

        return (
          <Pressable
            key={index}
            onPress={() => {
              if (!isFocused) {
                // animate this tab
                scaleValues[index].value = withSequence(
                  withTiming(1.2, { duration: 100 }),
                  withTiming(1, { duration: 150 }),
                );
                rotateValues[index].value = withSequence(
                  withTiming(-5, { duration: 50 }),
                  withTiming(5, { duration: 50 }),
                  withTiming(0, { duration: 50 }),
                );

                dispatch(setCurrentColor(color_array[index])); // set color globally
                navigation.navigate(route.name);
              }
            }}
            style={{
              ...styles.tabItem,
              shadowColor: color_array[index],
            }}
          >
            <Text
              style={[
                styles.label,
                { color: isFocused ? color_array[index] : colors.darkGrey },
              ]}
            >
              {route.name}
            </Text>
            {isFocused && (
              <Animated.Image
                source={flowers_array[index]}
                style={[styles.icon, animatedStyles[index]]}
              />
            )}
          </Pressable>
        );
      })}
    </View>
  );
};

export default CustomTabBar;

const styles = StyleSheet.create({
  tabContainer: {
    position: 'absolute',
    bottom: 20,
    left: sizes.width * 0.05,
    right: sizes.width * 0.05,
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 30,
    borderWidth: 1,
    borderStyle: 'dotted',
    height: sizes.height * 0.07,
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 5 },

    shadowRadius: 10,
    elevation: 10,
    ...Platform.select({
      android: {
        elevation: 10,
      },
    }),
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
  },
  label: {
    fontFamily: 'RobotoCondensedMedium',
    fontSize: 16,
    textShadowRadius: 2,
    letterSpacing: 1,
  },
  icon: {
    width: 50,
    height: 50,
    position: 'absolute',
    top: -50,
    resizeMode: 'contain',
  },
});
