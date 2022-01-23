import { StyleSheet } from 'react-native';
import * as colors from '@constants/colors';

export default StyleSheet.create({
  container: {
    borderColor: colors.WHITE,
    backgroundColor: colors.PRIMARY,
    borderRadius: 5,
    height: 50,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginHorizontal: 10,
    paddingHorizontal: 5,
  },
  searchIcon: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
    marginRight: 5,
  },
  backIcon: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
    marginRight: 5,
  },
  input: {
    flex: 1,
    color: colors.WHITE,
  },
});
