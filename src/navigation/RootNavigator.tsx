import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { RootStackParamList } from './types';
import Home from '../screens/Home';
import Splash from '../screens/Auth/Splash';
import Welcome from '../screens/Auth/Welcome';
import Login from '../screens/Auth/Login';
import Register from '../screens/Auth/Register';
import OTPVerification from '../screens/OTPVerification';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="OTPVerification" component={OTPVerification} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
