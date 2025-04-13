import React, { useState, useRef } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';
import { useNavigation, useRoute } from '@react-navigation/native';
import { TextInput, View, Image } from 'react-native';
import styles from './Auth/styles/styles';
import CustomStatusBar from '../components/CustomStatusBar';
import CustomHeader from '../components/CustomHeader';
import colors from '../theme/colors';
import { kiki_vase } from '../assets/images/image';
import CustomButton from '../components/CustomButton';
import sizes from '../theme/sizes';
import { useMutation } from '@apollo/client';
import { VERIFY_OTP } from '../graphql/mutations';

const OTPVerification = () => {
  type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;
  const navigation = useNavigation<NavigationProp>();
  const route = useRoute();
  const { email } = route.params;

  const [verifyOTP] = useMutation(VERIFY_OTP);
  const numInputs = 6;
  const [otp, setOtp] = useState(Array(numInputs).fill(''));
  const [taskLoading, setTaskLoading] = useState<boolean>(false);

  const inputs = useRef<(TextInput | null)[]>([]);

  const handleChange = (text: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    if (text.length === 1 && index < numInputs - 1) {
      inputs.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (e: any, index: number) => {
    if (e.nativeEvent.key === 'Backspace' && otp[index] === '') {
      if (index > 0) {
        inputs.current[index - 1]?.focus();
      }
    }
  };
  const isOtpComplete = otp.every((digit) => digit !== '');

  const handleVerification = async () => {
    try {
      setTaskLoading(true);
      console.log('Verification Input', otp, email);
      const formatted_otp = otp.join('');

      const res = await verifyOTP({ variables: { email, otp: formatted_otp } });
      console.log('Verify OTP result', res);
      navigation.navigate('Login');
    } catch (error) {
      console.log('Verify OTP Error', error);
      setTaskLoading(false);
    }
  };
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
        {otp.map((digit, index) => (
          <View style={styles.otpBox} key={index}>
            <TextInput
              key={index}
              ref={(el) => (inputs.current[index] = el)}
              style={styles.input}
              keyboardType="number-pad"
              maxLength={1}
              value={digit}
              onChangeText={(text) => handleChange(text, index)}
              onKeyPress={(e) => handleKeyPress(e, index)}
            />
          </View>
        ))}
      </View>
      <View style={styles.footer}>
        <CustomButton
          label="Verify"
          borderColor={colors.orangeYellow}
          onPress={handleVerification}
          loading={taskLoading}
          isDisabled={!isOtpComplete}
        />
      </View>
    </View>
  );
};
export default OTPVerification;
