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
import { kiki_bag } from '../../assets/images/image';
import CustomButton from '../../components/CustomButton';

const Register = () => {
  type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;
  const navigation = useNavigation<NavigationProp>();
  return (
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
          placeholder="Name"
          borderColor={colors.secondary}
          sticker={flower_1}
        />
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
        <CustomButton
          label="Register"
          borderColor={colors.accent}
          onPress={() => navigation.navigate('OTPVerification')}
        />
      </View>
    </ScrollView>
  );
};

export default Register;
