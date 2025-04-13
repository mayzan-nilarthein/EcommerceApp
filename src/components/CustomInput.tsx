import React from 'react';
import { View, Text, Image, TextInput, StyleSheet } from 'react-native';
import sizes from '../theme/sizes';
import colors from '../theme/colors';
import { flower_1 } from '../assets/icons/icons';
interface Props {
  placeholder: string;
  borderColor: string;
  sticker: string;
}
const CustomInput: React.FC<Props> = ({
  placeholder,
  borderColor,
  sticker,
}) => {
  return (
    <View>
      <View style={{ ...styles.container, borderColor: borderColor }}>
        <TextInput placeholder={placeholder} />
      </View>
      <Text
        style={{
          ...styles.label,
          color: borderColor,
          textShadowColor: borderColor,
        }}
      >
        {placeholder}
      </Text>

      <Image source={sticker} style={styles.icon} resizeMode="contain" />
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  container: {
    height: sizes.height * 0.07,
    width: sizes.width * 0.9,
    borderWidth: 3,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderStyle: 'dotted',
  },

  icon: {
    width: 40,
    height: 40,
    position: 'absolute',
    top: -20,
  },
  label: {
    position: 'absolute',
    left: 60,
    top: -15,
    fontFamily: 'RobotoCondensedBold',
    fontSize: 24,
    textShadowRadius: 2,
    letterSpacing: 2,
    color: colors.accent,
    backgroundColor: colors.white,
  },
});
