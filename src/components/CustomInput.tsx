import React from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  KeyboardTypeOptions,
  ImageSourcePropType,
} from 'react-native';
import sizes from '../theme/sizes';
import colors from '../theme/colors';
interface Props {
  placeholder: string;
  label: string;
  borderColor: string;
  sticker: string;
  secureTextEntry: boolean;
  maxLength: number;
  keyboardType: KeyboardTypeOptions;
  numOfLine: number;
  onChange: () => void;
  onFocus: () => void;
  onBlur: () => void;
  onError: () => void;
}
const CustomInput: React.FC<Props> = ({
  placeholder,
  borderColor,
  sticker,
  label,
  secureTextEntry,
  maxLength,
  keyboardType,
  numOfLine = 1,
  onChange,
}) => {
  return (
    <View>
      <View style={{ ...styles.container, borderColor: borderColor }}>
        <TextInput
          placeholder={placeholder}
          style={styles.inputText}
          placeholderTextColor={colors.lightGrey}
          clearButtonMode="always"
          numberOfLines={numOfLine}
          keyboardType={keyboardType}
          maxLength={maxLength}
          secureTextEntry={secureTextEntry}
          allowFontScaling={false}
          multiline={false}
          onChangeText={onChange}
        />
      </View>
      <Text
        style={{
          ...styles.label,
          color: borderColor,
          textShadowColor: borderColor,
        }}
      >
        {label}
      </Text>

      <Image
        source={sticker as ImageSourcePropType}
        style={styles.icon}
        resizeMode="contain"
      />
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
    width: 35,
    height: 35,
    position: 'absolute',
    top: -20,
    left: 10,
  },
  label: {
    position: 'absolute',
    left: 50,
    top: -12,
    fontFamily: 'RobotoCondensedBold',
    fontSize: 18,
    textShadowRadius: 2,
    letterSpacing: 1,
    color: colors.accent,
    backgroundColor: colors.white,
  },
  inputText: {
    fontFamily: 'RobotoCondensedBold',
    fontSize: 18,
    textShadowRadius: 2,
    letterSpacing: 2,
    color: colors.darkGrey,
    backgroundColor: colors.white,
  },
});
