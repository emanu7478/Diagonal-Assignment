// LIBRARIES
import React from 'react';
import { Platform } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

// STYLES
import * as colors from '@constants/colors';
import style from './style';

function RNHeaderBgd() {
  return (
    <LinearGradient
      locations={[0, Platform.OS === 'ios' ? 0.998 : 0.99, 1]}
      colors={[colors.PRIMARY, colors.PRIMARY, colors.PRIMARY]}
      style={style.container}
    />
  );
}

export default RNHeaderBgd;
