import React from 'react';
import { StatusBar } from 'react-native';

interface Props {
  color: string;
}

const CustomStatusBar: React.FC<Props> = ({ color }) => {
  return (
    <StatusBar translucent backgroundColor={color} barStyle={'dark-content'} />
  );
};

export default CustomStatusBar;
