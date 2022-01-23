// LIBRARIES
import React, { useRef, useState } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput, Animated, Easing } from 'react-native';
import PropTypes from 'prop-types';

// STYLES
import * as colors from '@constants/colors';
import style from './style';

function SearchBarHeader(props) {
  const { value, onChangeText, headerTitle, enableBackButton } = props;
  const scaling = useRef(new Animated.Value(0)).current;
  const [enableTextInput, setEnableTextInput] = useState(false);

  const toggleWidth = () => {
    if (enableTextInput) {
      Animated.timing(scaling, {
        toValue: 0,
        duration: 200,
        easing: Easing.linear,
        useNativeDriver: false,
      }).start(() => {
        setEnableTextInput(false);
      });
    } else {
      Animated.timing(scaling, {
        toValue: 1,
        duration: 200,
        easing: Easing.linear,
        useNativeDriver: false,
      }).start(() => {
        setEnableTextInput(true);
      });
    }
  };

  return (
    <View style={style.container}>
      {!enableTextInput && (
        <TouchableOpacity style={style.leftHeaderContainer} disabled={!enableBackButton}>
          {enableBackButton && <Image style={style.backArrowImg} source={require('@assets/images/Back.png')} />}
          <Text style={style.title}>{headerTitle}</Text>
        </TouchableOpacity>
      )}
      <Animated.View
        style={[
          style.searchInputContainer,
          {
            width: scaling.interpolate({
              inputRange: [0, 1],
              outputRange: ['0%', '100%'],
            }),
            backgroundColor: scaling.interpolate({
              inputRange: [0, 1],
              outputRange: [colors.PRIMARY, colors.LIGHT_BLACK],
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
        {enableTextInput && (
          <TextInput style={style.input} placeholder="Search" placeholderTextColor={colors.WHITE} onChangeText={onChangeText} value={value} />
        )}
      </Animated.View>
    </View>
  );
}

SearchBarHeader.propTypes = {
  value: PropTypes.string,
  onChangeText: PropTypes.func,
  enableBackButton: PropTypes.bool,
  headerTitle: PropTypes.string,
};

SearchBarHeader.defaultProps = {
  value: '',
  onChangeText: () => {},
  headerTitle: '',
  enableBackButton: true,
};

export default SearchBarHeader;
