/* eslint-disable require-await */
import * as types from './types';

export const fetchShows = () => async (dispatch) => {
  let arr = [{ name: 'haai', id: 1 }];
  dispatch({ type: types.FETCH_SHOWS, payload: arr });
};
