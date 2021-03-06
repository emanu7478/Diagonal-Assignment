import { StyleSheet } from 'react-native';
import * as colors from '@constants/colors';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.PRIMARY,
    borderRadius: 5,
    height: 50,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
  },
  leftHeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backArrowImg: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
    marginRight: 5,
  },
  title: {
    fontSize: 17,
    color: colors.WHITE,
    paddingLeft: 5,
  },
  searchIcon: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
  },
  backIcon: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
    marginRight: 5,
  },
  searchInputContainer: {
    height: 40,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  input: {
    flex: 1,
    color: colors.WHITE,
  },
  placeholderText: {
    color: colors.WHITE,
  },
});
