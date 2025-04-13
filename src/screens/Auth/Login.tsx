import { Text, View, Image, ScrollView } from 'react-native';
import React from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';
import { useNavigation } from '@react-navigation/native';
import styles from './styles/styles';
import CustomStatusBar from '../../components/CustomStatusBar';
import colors from '../../theme/colors';
import CustomHeader from '../../components/CustomHeader';
import CustomInput from '../../components/CustomInput';
import { email, flower_1, password } from '../../assets/icons/icons';
import { kiki_cake, kiki_radio } from '../../assets/images/image';
import CustomButton from '../../components/CustomButton';

const Login = () => {
  type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;
  const navigation = useNavigation<NavigationProp>();
  return (
    <ScrollView
      contentContainerStyle={styles.standardContainer}
      style={{ flex: 1 }}
    >
      <CustomStatusBar color={colors.white} />
      <CustomHeader title="Log In" onPress={() => navigation.goBack()} />
      <View style={styles.header}>
        <Image source={kiki_radio} style={styles.headerIcon} />
      </View>
      <View style={styles.infoContainer}>
        <CustomInput
          placeholder="Email"
          borderColor={colors.accent}
          sticker={email}
        />
        <CustomInput
          placeholder="Password"
          borderColor={colors.darkPurple}
          sticker={password}
        />
      </View>
      <View style={styles.footer}>
        <CustomButton label="Log In" borderColor={colors.secondary} />
      </View>
    </ScrollView>
  );
};

export default Login;
