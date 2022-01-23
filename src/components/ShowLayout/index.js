// LIBRARIES
import React from 'react';
import { TouchableWithoutFeedback, Text, View, Image } from 'react-native';
import PropTypes from 'prop-types';

// Images
import Images from '../../assets/images';

// STYLES
import style from './style';

function ShowLayout(props) {
  return (
    <TouchableWithoutFeedback>
      <View style={style.layoutContainer}>
        <View style={style.container}>
          <Image style={style.img} source={Images[props?.image] || require('@assets/images/placeholder_for_missing_posters.png')} />
          <Text style={style.text}>{props?.title}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

ShowLayout.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
};

ShowLayout.defaultProps = {
  image: '',
  title: '',
};

export default ShowLayout;
