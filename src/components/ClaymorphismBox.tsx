import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import React from 'react';
import colors from '../theme/colors';
import sizes from '../theme/sizes';
interface Props {
  text: string;
  width: number;
  color: string;
  sticker: string;
  stickerPosition: string;
  onPress: () => void;
}
const ClaymorphismBox: React.FC<Props> = ({
  text,
  width,
  color,
  sticker,
  stickerPosition,
  onPress,
}) => {
  const right = stickerPosition === 'right' ? -20 : undefined;
  const left = stickerPosition === 'left' ? -20 : undefined;
  return (
    <Pressable
      style={{ justifyContent: 'center', alignItems: 'center' }}
      onPress={onPress}
    >
      <View style={[styles.box, { backgroundColor: color }]}>
        <Text style={styles.text}>{text}</Text>
      </View>
      <Image
        source={sticker}
        style={[
          styles.sticker,
          {
            right: right,
            left: left,
          },
        ]}
        resizeMode="contain"
      />
    </Pressable>
  );
};

export default ClaymorphismBox;

const styles = StyleSheet.create({
  box: {
    width: 250,
    height: sizes.height * 0.08,
    borderRadius: sizes.radiusRounded,
    justifyContent: 'center',
    alignItems: 'center',
    // Outer shadow
    shadowColor: colors.primary,
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 15,
    // Light highlight
    elevation: 10,
  },
  sticker: {
    width: 80,
    height: 80,
    position: 'absolute',
    top: -40,
    right: -20,
    zIndex: 1,
  },
  text: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.white,
    fontFamily: 'RobotoCondensedMedium',
  },
});
