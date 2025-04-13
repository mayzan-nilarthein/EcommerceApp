import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import sizes from '../theme/sizes';
import colors from '../theme/colors';
interface Props {
  label: string;
  borderColor: string;
  onPress: () => void;
  width: number;
}
const CustomButton: React.FC<Props> = ({
  label,
  borderColor,
  onPress,
  width = sizes.width * 0.9,
}) => {
  return (
    <View>
      <View
        style={{ ...styles.container, borderColor: borderColor, width: width }}
      >
        <Pressable onPress={onPress}>
          <Text style={{ ...styles.label, color: borderColor }}>{label}</Text>
        </Pressable>
      </View>

      <View
        style={{
          ...styles.shadowBox,
          width: width,
          borderColor: borderColor,
          backgroundColor: borderColor,
        }}
      ></View>
    </View>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    height: sizes.height * 0.07,
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
    height: sizes.height * 0.07,
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
    fontSize: 24,
    textShadowRadius: 2,
    letterSpacing: 2,

    backgroundColor: colors.white,
  },
});
