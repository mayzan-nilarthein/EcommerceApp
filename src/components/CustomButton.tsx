import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ActivityIndicator,
} from 'react-native';
import sizes from '../theme/sizes';
import colors from '../theme/colors';
interface Props {
  label: string;
  borderColor: string;
  onPress: () => void;
  width: number;
  loading: boolean;
  isDisabled: boolean;
}
const CustomButton: React.FC<Props> = ({
  label,
  borderColor,
  onPress,
  width = sizes.width * 0.9,
  loading = false,
  isDisabled = false,
}) => {
  return (
    <View>
      <View
        style={{
          ...styles.container,
          borderColor: isDisabled ? colors.disabled : borderColor,
          width: width,
        }}
      >
        {loading ? (
          <ActivityIndicator
            color={borderColor}
            size={'large'}
            animating={loading}
          />
        ) : (
          <Pressable onPress={onPress} disabled={isDisabled}>
            <Text
              style={{
                ...styles.label,
                color: isDisabled ? colors.disabledText : borderColor,
              }}
            >
              {label}
            </Text>
          </Pressable>
        )}
      </View>

      <View
        style={{
          ...styles.shadowBox,
          width: width,
          borderColor: isDisabled ? colors.disabled : borderColor,
          backgroundColor: isDisabled ? colors.disabled : borderColor,
        }}
      ></View>
    </View>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    height: sizes.height * 0.06,
    // width: sizes.width * 0.9,
    borderWidth: 3,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    zIndex: 100,
    position: 'absolute',
  },
  shadowBox: {
    height: sizes.height * 0.06,
    // width: sizes.width * 0.9,

    borderWidth: 3,
    borderRadius: 20,
    marginTop: 5,
    marginLeft: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontFamily: 'RobotoCondensedBold',
    fontSize: 18,
    textShadowRadius: 2,
    letterSpacing: 2,

    backgroundColor: colors.white,
  },
});
