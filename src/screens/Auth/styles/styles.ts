import { StatusBar, StyleSheet } from 'react-native';
import colors from '../../../theme/colors';
import sizes from '../../../theme/sizes';

const statusBarHeight = StatusBar.currentHeight ?? 0;
const totalHeight = sizes.height + statusBarHeight;
const styles = StyleSheet.create({
  logoBgCircle: {
    width: sizes.width,
    height: sizes.height + totalHeight,
    backgroundColor: colors.skyblue,
  },
  logo: {
    width: 150,
    height: 150,
    position: 'absolute',
    top: sizes.height * 0.35,
  },
  cloud3: {
    width: 200,
    height: 200,
    position: 'absolute',
    top: 10,
    left: -10,
  },
  cloud2: {
    width: 200,
    height: 200,
    position: 'absolute',
    top: 200,
    right: 50,
  },
  cloud4: {
    width: 200,
    height: 200,
    position: 'absolute',
    top: 400,
    left: 10,
  },
  cloud5: {
    width: 200,
    height: 200,
    top: 600,
    left: -10,
  },
  titleText: {
    fontFamily: 'RobotoCondensedRegular',
    fontSize: 20,
    position: 'absolute',
    color: colors.white,
    textShadowColor: colors.gray, // Stroke color
    textShadowOffset: { width: 2, height: 1 },
    textShadowRadius: 1,
    letterSpacing: 1,
    textAlign: 'center',
    elevation: 10,
    marginTop: sizes.padding,
  },
});
export default styles;
