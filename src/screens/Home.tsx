import {  Text, View } from "react-native";
import React from "react";
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from "../navigation/types";

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>

const Home: React.FC<Props> = () => {
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};

export default Home;
