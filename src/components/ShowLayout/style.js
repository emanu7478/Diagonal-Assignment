import { StyleSheet } from 'react-native';
import * as colors from '@constants/colors';
import * as fonts from '@assets/fonts';

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
    fontFamily: fonts.PRIMARY_FONT_LIGHT,
    color: colors.WHITE,
    alignSelf: 'flex-start',
    textAlign: 'left',
    fontSize: 16,
  },
});
