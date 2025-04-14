import { Text, View, FlatList } from 'react-native';
import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { BottomTabParamList } from '../../navigation/types';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import CustomStatusBar from '../../components/CustomStatusBar';
import colors from '../../theme/colors';
import styles from '../styles';
import ProductCard from '../../components/ProductCard';
import { dummyProducts } from '../../dummydata/dummyProducts';

type Props = NativeStackScreenProps<BottomTabParamList, 'Products'>;

const Products: React.FC<Props> = () => {
  const color = useSelector((state: RootState) => state.color.currentColor);
  return (
    <View style={styles.container}>
      <CustomStatusBar color={colors.white} />
      <Text style={styles.screenTitle}>All Products</Text>
      <FlatList
        data={dummyProducts}
        renderItem={({ item }) => <ProductCard item={item} />}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.listContainer}
        columnWrapperStyle={styles.columnWrapper}
      />
    </View>
  );
};

export default Products;
