import { Text, View, Image, ScrollView, Alert } from 'react-native';
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
import { kiki_cake, kiki_radio } from '../../assets/images/image';
import CustomButton from '../../components/CustomButton';
import { useMutation } from '@apollo/client';
import { LOGIN } from '../../graphql/mutations';
import { LoginInput } from '../../graphql/types/types';

const Login = () => {
  type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;
  const navigation = useNavigation<NavigationProp>();
  const [taskLoading, setTaskLoading] = useState<boolean>(false);

  const [login] = useMutation(LOGIN);

  const [form, setForm] = useState<LoginInput>({
    name: '',
    email: '',
  });

  const isFormEmpty = Object.values(form).some((value) => value.trim() === '');
  const handleLogin = async () => {
    try {
      setTaskLoading(true);
      const res = await login({ variables: form });

      Alert.alert('Success', 'Welcome Home!');

      console.log('Success:', res);
      setTaskLoading(false);
    } catch (err) {
      setTaskLoading(false);
      console.error('Login Error:', err);
    }
  };
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
          label="Email"
          borderColor={colors.accent}
          sticker={email}
          placeholder="kiki@gmail.com"
          keyboardType={'default'}
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
      <View style={styles.footer}>
        <CustomButton
          label="Log In"
          borderColor={colors.secondary}
          onPress={handleLogin}
          loading={taskLoading}
        />
      </View>
    </ScrollView>
  );
};

export default Login;
