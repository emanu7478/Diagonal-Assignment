import React from 'react';
import { StatusBar } from 'react-native';
import * as colors from '@constants/colors';

const RNStatusBar = () => {
  return <StatusBar backgroundColor={colors.PRIMARY} barStyle="light-content" />;
};

export default RNStatusBar;
