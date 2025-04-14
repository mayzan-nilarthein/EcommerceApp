import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { RootState } from '../store/store';
import { useSelector } from 'react-redux';
import sizes from '../theme/sizes';
import colors from '../theme/colors';
import { kiki_bag } from '../assets/images/image';
import Favourite from './SVGs/Favourite';

interface Props {
  item: Item;
}
interface Item {
  image: string;
  name: string;
}
const ProductCard: React.FC<Props> = ({ item }) => {
  const color = useSelector((state: RootState) => state.color.currentColor);
  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: colors.white,
        shadowColor: color,
      }}
    >
      <Image source={item.image} style={styles.product} resizeMode="contain" />
      <Text style={styles.label}>{item.name}</Text>
      <View style={styles.favouriteWrapper}>
        <Favourite color={color} style={styles.favourite} />
      </View>
    </View>
  );
};
export default ProductCard;
const styles = StyleSheet.create({
  container: {
    width: sizes.width * 0.4,
    height: sizes.height * 0.22,
    borderRadius: sizes.radiusFull,
    justifyContent: 'center',
    alignItems: 'center',
    // Outer shadow
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    // Light highlight
    elevation: 5,
  },
  product: {
    width: sizes.width * 0.2,
    height: sizes.height * 0.1,

    flex: 0.7,
  },
  label: {
    fontFamily: 'RobotoBold',
    fontSize: 12,
    textAlign: 'center',
    textShadowRadius: 2,
    letterSpacing: 1,
    color: colors.darkGrey,

    flex: 0.2,
  },
  favouriteWrapper: {
    position: 'absolute',
    top: -15,
    right: -10,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.white,
    padding: 8,
    borderRadius: 30,
    shadowOffset: { width: -5, height: -5 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    // Light highlight
    elevation: 2,
  },
  favourite: {
    // position: 'absolute',
    // top: 20,
    // right: 20,
  },
});
