import { View, Text } from 'react-native';
import React, { useEffect } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';
import CustomStatusBar from '../../components/CustomStatusBar';
import colors from '../../theme/colors';
import styles from './styles/styles';
import sizes from '../../theme/sizes';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
  Easing,
} from 'react-native-reanimated';
import { kiki_bag, kiki_radio, welcomeText } from '../../assets/images/image';
import ClaymorphismBox from '../../components/ClaymorphismBox';
import { useNavigation } from '@react-navigation/native';

const Welcome = () => {
  type NavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    'Welcome'
  >;
  const navigation = useNavigation<NavigationProp>();
  const welcomeTextOpactity = useSharedValue<number>(0);
  const translateX = useSharedValue<number>(-sizes.width);
  const infoTextOpacity = useSharedValue<number>(0);

  useEffect(() => {
    welcomeTextOpactity.value = withDelay(0, withTiming(1, { duration: 500 }));
    infoTextOpacity.value = withDelay(0, withTiming(1, { duration: 500 }));

    setTimeout(() => {
      translateX.value = withTiming(0, {
        duration: 800,
        easing: Easing.inOut(Easing.ease),
      });
    }, 100);
  }, []);

  const welcomeTextStyle = useAnimatedStyle(() => ({
    opacity: welcomeTextOpactity.value,
  }));
  const infoTextStyle = useAnimatedStyle(() => ({
    opacity: infoTextOpacity.value,
  }));
  const welcomeContentStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  return (
    <View style={styles.container}>
      <CustomStatusBar color={colors.white} />
      <Animated.Image
        source={welcomeText}
        style={[styles.logoText, welcomeTextStyle]}
      />

      <Animated.View
        style={[styles.welcomeContentContainer, welcomeContentStyle]}
      >
        <ClaymorphismBox
          text="Log In"
          color={colors.secondary}
          width={sizes.width * 0.8}
          sticker={kiki_radio}
          stickerPosition={'right'}
          onPress={() => navigation.navigate('Login')}
        />
        <ClaymorphismBox
          text="Register"
          color={colors.accent}
          width={sizes.width * 0.8}
          sticker={kiki_bag}
          stickerPosition={'left'}
          onPress={() => navigation.navigate('Register')}
        />
      </Animated.View>

      <Animated.View style={[styles.footerInfo, infoTextStyle]}>
        <Text style={styles.infoSmallText}> Versoin: 0.0.1 </Text>
        <Text style={styles.infoSmallText}>
          {' '}
          Developed with 💛 by May Zan Nilar Thein
        </Text>
      </Animated.View>
    </View>
  );
};
export default Welcome;
