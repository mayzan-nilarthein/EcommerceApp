import { StyleSheet } from 'react-native';
import sizes from '../theme/sizes';
import colors from '../theme/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: sizes.height * 0.1,
  },
  screenTitle: {
    fontFamily: 'RobotoCondensedBold',
    fontSize: 18,
    textShadowRadius: 2,
    letterSpacing: 1,
    color: colors.orangeYellow,
    paddingVertical: sizes.height * 0.01,
  },

  listContainer: {
    width: sizes.width,
    gap: sizes.height * 0.02,
    paddingTop: sizes.height * 0.05,
    paddingBottom: sizes.height * 0.12,
  },
  columnWrapper: {
    width: sizes.width,
    justifyContent: 'space-between',
    paddingHorizontal: sizes.width * 0.06,
  },
});

export default styles;
