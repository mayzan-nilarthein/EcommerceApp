import { Dimensions } from 'react-native';

const sizes = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
  // Global Spacing
  padding: 16,
  margin: 16,
  smallMargin: 8,
  largeMargin: 24,

  // radius
  radiusNormal: 10,
  radiusRounded: 15,
  radiusFull: 30,

  // Font Sizes
  fontSmall: 12,
  fontRegular: 14,
  fontMedium: 16,
  fontLarge: 18,
  fontExtraLarge: 24,

  // Border Radius
  borderRadius: 8,
  borderRadiusLarge: 16,

  // Button Sizes
  buttonHeight: 48,
  buttonWidth: 150,

  // Card Size (default card size)
  cardHeight: 200,
  cardWidth: 160,

  // Icon Size
  iconSmall: 16,
  iconMedium: 24,
  iconLarge: 32,
};

export default sizes;
