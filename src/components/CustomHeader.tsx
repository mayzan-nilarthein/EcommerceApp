import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
} from 'react-native';
import React from 'react';
import sizes from '../theme/sizes';
import colors from '../theme/colors';
import {
  arrow_back,
  ios_arrow_accent,
  ios_arrow_navy,
  ios_arrow_secondary,
} from '../assets/icons/icons';

interface Props {
  onPress: () => void;
  title: string;
  hasRightIcon: boolean;
  color: string;
}
const CustomHeader: React.FC<Props> = ({
  title,
  hasRightIcon,
  onPress,
  color,
}) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={onPress}>
        <Image source={ios_arrow_navy} style={styles.icon} />
      </Pressable>
      <Text style={{ ...styles.title, color: colors.navy }}>{title}</Text>
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: sizes.width,
    marginTop: StatusBar.currentHeight,
    backgroundColor: colors.white,
    paddingHorizontal: sizes.width * 0.05,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  icon: {
    width: 35,
    height: 35,
    resizeMode: 'contain',
  },
  title: {
    fontFamily: 'RobotoCondensedBold',
    fontSize: 22,
    textShadowRadius: 2,
    letterSpacing: 2,
    textAlign: 'center',
    flex: 1,
  },
});
