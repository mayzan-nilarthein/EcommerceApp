import React from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';
import { useNavigation } from '@react-navigation/native';
import { TextInput, View, Image } from 'react-native';
import styles from './Auth/styles/styles';
import CustomStatusBar from '../components/CustomStatusBar';
import CustomHeader from '../components/CustomHeader';
import colors from '../theme/colors';
import { kiki_vase } from '../assets/images/image';
import CustomButton from '../components/CustomButton';
import sizes from '../theme/sizes';

const OTPVerification = () => {
  type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;
  const navigation = useNavigation<NavigationProp>();
  return (
    <View style={styles.standardContainer}>
      <CustomStatusBar color={colors.white} />
      <CustomHeader
        title="OTP Verification"
        onPress={() => navigation.goBack()}
        color={colors.accent}
      />
      <View style={styles.headerLarge}>
        <Image source={kiki_vase} style={styles.headerIconLarge} />
      </View>
      <View style={styles.otpContainer}>
        <View style={styles.otpBox}>
          <TextInput />
        </View>
        <View style={styles.otpBox}>
          <TextInput />
        </View>
        <View style={styles.otpBox}>
          <TextInput />
        </View>
        <View style={styles.otpBox}>
          <TextInput />
        </View>
        <View style={styles.otpBox}>
          <TextInput />
        </View>
        <View style={styles.otpBox}>
          <TextInput />
        </View>
      </View>
      <View style={styles.footer}>
        <CustomButton
          label="Verify"
          borderColor={colors.orangeYellow}
          onPress={() => navigation.replace('Login')}
        />
      </View>
    </View>
  );
};
export default OTPVerification;
