import { StyleSheet } from 'react-native';
import * as colors from '@constants/colors';

export default StyleSheet.create({
  leftHeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
  },
  backArrowImg: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.WHITE,
    paddingLeft: 5,
  },
});
