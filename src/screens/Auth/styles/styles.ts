import { StatusBar, StyleSheet } from 'react-native';
import colors from '../../../theme/colors';
import sizes from '../../../theme/sizes';

const statusBarHeight = StatusBar.currentHeight ?? 0;
const totalHeight = sizes.height + statusBarHeight;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
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
  logoText: {
    width: 200,
    height: 150,
    resizeMode: 'contain',
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
  smallText: {
    fontFamily: 'RobotoCondensedRegular',
    fontSize: 16,
    position: 'absolute',
    color: colors.primary,
    textShadowColor: colors.primary, // Stroke color
    textShadowRadius: 1,
    letterSpacing: 1,
    textAlign: 'center',
  },
  titleText: {
    fontFamily: 'RobotoCondensedRegular',
    fontSize: 28,
    position: 'absolute',
    color: colors.white,
    textShadowColor: colors.gray, // Stroke color
    textShadowOffset: { width: 2, height: 1 },
    textShadowRadius: 1,
    letterSpacing: 1,
    textAlign: 'center',
    marginTop: sizes.height * 0.07,
    elevation: 10,
  },
  welcomeContentContainer: {
    gap: sizes.largeMargin,
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerInfo: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 20,
    gap: 5,
  },
  infoSmallText: {
    fontFamily: 'RobotoRegular',
    fontSize: 14,
    color: colors.darkGrey,
  },
});
export default styles;
