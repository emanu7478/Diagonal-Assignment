/* eslint-disable promise/catch-or-return */
/* eslint-disable promise/always-return */
/* eslint-disable promise/prefer-await-to-then */
import React, { useEffect, useState, useRef } from 'react';
import { Image, View, Animated, Easing, TouchableOpacity, useWindowDimensions, TextInput } from 'react-native';
import PropTypes from 'prop-types';

// STYLES
import * as colors from '@constants/colors';
import style from './style';

function HeaderSearchBar(props) {
  const { value, onChangeText } = props;
  const scaling = useRef(new Animated.Value(0)).current;
  const [enableTextInput, setEnableTextInput] = useState(false);

  const toggleWidth = () => {
    if (enableTextInput) {
      Animated.timing(scaling, {
        toValue: 0,
        duration: 400,
        easing: Easing.linear,
        useNativeDriver: false,
      }).start(() => {
        setEnableTextInput(false);
      });
    } else {
      Animated.timing(scaling, {
        toValue: 1,
        duration: 400,
        easing: Easing.linear,
        useNativeDriver: false,
      }).start(() => {
        setEnableTextInput(true);
      });
    }
  };

  return (
    <Animated.View
      style={[
        style.container,
        {
          width: scaling.interpolate({
            inputRange: [0, 1],
            outputRange: ['0%', '100%'],
          }),
          backgroundColor: scaling.interpolate({
            inputRange: [0, 1],
            outputRange: [colors.PRIMARY, '#222222'],
          }),
        },
      ]}
    >
      {enableTextInput ? (
        <TouchableOpacity
          onPress={() => {
            toggleWidth();
          }}
        >
          <Image style={style.backIcon} source={require('@assets/images/Back.png')} />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={() => {
            toggleWidth();
          }}
        >
          <Image style={style.searchIcon} source={require('@assets/images/search.png')} />
        </TouchableOpacity>
      )}
      {enableTextInput && <TextInput style={style.input} placeholder="Search..." onChangeText={onChangeText} value={value} />}
    </Animated.View>
  );
}

HeaderSearchBar.propTypes = {
  value: PropTypes.string,
  onChangeText: PropTypes.func,
};

HeaderSearchBar.defaultProps = {
  value: '',
  onChangeText: () => {},
};

export default HeaderSearchBar;
