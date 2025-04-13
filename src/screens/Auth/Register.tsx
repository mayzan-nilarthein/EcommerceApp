import { Text, View, Image, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';
import { useNavigation } from '@react-navigation/native';
import styles from './styles/styles';
import CustomStatusBar from '../../components/CustomStatusBar';
import colors from '../../theme/colors';
import CustomHeader from '../../components/CustomHeader';
import CustomInput from '../../components/CustomInput';
import { email, flower_1, password } from '../../assets/icons/icons';
import { kiki_bag } from '../../assets/images/image';
import CustomButton from '../../components/CustomButton';
import { useMutation } from '@apollo/client';
import { REGISTER, SEND_OTP } from '../../graphql/mutations';
import {
  RegisterInput,
  RegisterResponse,
  SendOTPInput,
  SendOTPResponse,
} from '../../graphql/types/types';

const Register: React.FC = () => {
  type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;
  const navigation = useNavigation<NavigationProp>();
  const [register] = useMutation<RegisterInput, RegisterResponse>(REGISTER);

  const [sendotp] = useMutation<SendOTPInput, SendOTPResponse>(SEND_OTP);

  const [taskLoading, setTaskLoading] = useState<boolean>(false);
  const [form, setForm] = useState<RegisterInput>({
    name: '',
    email: '',
    password: '',
  });

  const isFormEmpty = Object.values(form).some((value) => value.trim() === '');
  const handleRegister = async () => {
    try {
      setTaskLoading(true);
      const res = await register({ variables: form });
      const otpSuccess = await sendOtpToEmail(form.email);

      if (otpSuccess) {
        setTaskLoading(false);
        navigation.navigate('OTPVerification', { email: form.email });
      } else {
        throw new Error('OTP sending failed');
      }
      console.log('Success:', otpSuccess);
      setTaskLoading(false);
    } catch (err) {
      setTaskLoading(false);
      console.error('Registration Error:', err);
    }
  };

  const sendOtpToEmail = async (email: string): Promise<boolean> => {
    try {
      const response = await sendotp({ variables: { email } });
      return response.data?.sendOtp?.success;
    } catch (error) {
      console.error('Send OTP Error:', error);
      return false;
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.standardContainer}
        style={{ flex: 1 }}
      >
        <CustomStatusBar color={colors.white} />
        <CustomHeader
          title="Register"
          onPress={() => navigation.goBack()}
          color={colors.accent}
        />
        <View style={styles.header}>
          <Image source={kiki_bag} style={styles.headerIcon} />
        </View>
        <View style={styles.infoContainer}>
          <CustomInput
            label="Name"
            borderColor={colors.secondary}
            sticker={flower_1}
            placeholder="Ki Ki"
            keyboardType={'default'}
            numOfLine={1}
            maxLength={30}
            secureTextEntry={false}
            onChange={(name: string) => setForm({ ...form, name })}
            key={'nameInput'}
          />
          <CustomInput
            label="Email"
            borderColor={colors.accent}
            sticker={email}
            placeholder="kiki@gmail.com"
            keyboardType={'email-address'}
            numOfLine={1}
            maxLength={30}
            secureTextEntry={false}
            onChange={(email: string) => setForm({ ...form, email })}
            key={'emailInput'}
          />
          <CustomInput
            label="Password"
            borderColor={colors.darkPurple}
            sticker={password}
            placeholder="******"
            keyboardType={'default'}
            numOfLine={1}
            maxLength={30}
            secureTextEntry={true}
            onChange={(password: string) => setForm({ ...form, password })}
            key={'passwordInput'}
          />
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <CustomButton
          label="Register"
          borderColor={colors.accent}
          loading={taskLoading}
          onPress={handleRegister}
          isDisabled={isFormEmpty}
        />
      </View>
    </View>
  );
};

export default Register;
