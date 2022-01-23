import { StyleSheet } from 'react-native';
import * as colors from '@constants/colors';

export default StyleSheet.create({
  layoutContainer: {
    width: `${100 / 3}%`,
    alignItems: 'center',
  },
  container: {
    height: 250,
    width: '95%',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  img: {
    height: 200,
    width: '95%',
    resizeMode: 'cover',
  },
  text: {
    color: colors.LIGHT_GREY,
    alignSelf: 'flex-start',
    textAlign: 'left',
  },
});
