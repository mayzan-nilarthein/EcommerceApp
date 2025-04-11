import { View } from 'react-native';
import React, { useEffect } from 'react';
import CustomStatusBar from '../../components/CustomStatusBar';
import themeStyles from '../../theme/themeStyles';
import styles from './styles/styles';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated';
import {
  cloud2,
  cloud3,
  cloud4,
  cloud5,
  logo,
} from '../../assets/images/image';
import sizes from '../../theme/sizes';
import colors from '../../theme/colors';

const Splash = () => {
  const circleSize = useSharedValue<number>(0);
  const circleOpacity = useSharedValue<number>(0);
  const logoOpactiy = useSharedValue<number>(0);
  const cloudOpacity = useSharedValue<number>(0);
  const titleOpacity = useSharedValue<number>(0);
  const rotation = useSharedValue<number>(0); //for swing animation
  const translateX = useSharedValue<number>(-150);

  useEffect(() => {
    circleSize.value = withTiming(15, { duration: 1000 }); //circle size
    circleOpacity.value = withDelay(0, withTiming(1, { duration: 1000 })); //circle size
    logoOpactiy.value = withDelay(1500, withTiming(1, { duration: 500 })); //logo opacity with delay
    cloudOpacity.value = withDelay(1000, withTiming(1, { duration: 500 }));
    titleOpacity.value = withDelay(1500, withTiming(1, { duration: 500 }));
    const swingTimeout = setTimeout(() => {
      rotation.value = withRepeat(
        withSequence(
          withTiming(-10, { duration: 200, easing: Easing.ease }),
          withTiming(10, { duration: 200, easing: Easing.ease }),
        ),
        5,
        true,
      );
    }, 2500);

    const moveCloudTimeout = setTimeout(() => {
      translateX.value = withTiming(sizes.width, {
        duration: 6000,
        easing: Easing.inOut(Easing.ease),
      });
    }, 1000);

    return () => {
      clearTimeout(swingTimeout);
      clearTimeout(moveCloudTimeout);
    };
  }, []);

  const cloudStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
    opacity: cloudOpacity.value,
  }));

  const circleStyle = useAnimatedStyle(() => ({
    // transform: [{ scale: circleSize.value }],
    opacity: circleOpacity.value,
  }));

  const logoStyle = useAnimatedStyle(() => ({
    opacity: logoOpactiy.value,
    transform: [{ rotate: `${rotation.value}deg` }],
  }));
  const titleStyle = useAnimatedStyle(() => ({
    opacity: titleOpacity.value,
  }));

  return (
    <View style={themeStyles.container}>
      <CustomStatusBar color={colors.skyblue} />
      <Animated.View style={[styles.logoBgCircle, circleStyle]} />
      <Animated.Image
        source={cloud3}
        style={[styles.cloud3, cloudStyle]}
        resizeMode="contain"
      />

      <Animated.Image
        source={cloud2}
        style={[styles.cloud2, cloudStyle]}
        resizeMode="contain"
      />
      <Animated.Image
        source={cloud4}
        style={[styles.cloud4, cloudStyle]}
        resizeMode="contain"
      />
      <Animated.Image
        source={cloud5}
        style={[styles.cloud5, cloudStyle]}
        resizeMode="contain"
      />
      <Animated.Image
        source={logo}
        style={[styles.logo, logoStyle]}
        resizeMode={'contain'}
      />
      <Animated.Text style={[styles.titleText, titleStyle]}>
        Ki Ki inspired Demo Ecommerce App
      </Animated.Text>
    </View>
  );
};

export default Splash;
