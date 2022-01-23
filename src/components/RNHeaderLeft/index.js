// LIBRARIES
import React from 'react';
import { Text, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

// STYLES
import style from './style';

function RNHeaderLeft(props) {
  return (
    <TouchableOpacity style={style.leftHeaderContainer} disabled={!props?.enableBackButton}>
      {props?.enableBackButton && <Image style={style.backArrowImg} source={require('@assets/images/Back.png')} />}
      <Text style={style.title}>{props?.title}</Text>
    </TouchableOpacity>
  );
}

RNHeaderLeft.propTypes = {
  enableBackButton: PropTypes.bool,
  title: PropTypes.string,
};

RNHeaderLeft.defaultProps = {
  title: '',
  enableBackButton: true,
};

export default RNHeaderLeft;
