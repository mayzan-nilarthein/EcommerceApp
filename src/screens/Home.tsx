import { Text, View } from 'react-native';
import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { BottomTabParamList } from '../navigation/types';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import CustomStatusBar from '../components/CustomStatusBar';
import colors from '../theme/colors';
import styles from './styles';

type Props = NativeStackScreenProps<BottomTabParamList, 'Home'>;

const Home: React.FC<Props> = () => {
  const color = useSelector((state: RootState) => state.color.currentColor);
  return (
    <View style={styles.container}>
      <CustomStatusBar color={colors.white} />
      <Text style={{ color: color }}>Home</Text>
    </View>
  );
};

export default Home;
