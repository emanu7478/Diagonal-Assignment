/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable require-await */
import * as types from './types';
// CONSTANTS
import contents1 from '@constants/data/CONTENTLISTINGPAGE-PAGE1.json';
import contents2 from '@constants/data/CONTENTLISTINGPAGE-PAGE2.json';
import contents3 from '@constants/data/CONTENTLISTINGPAGE-PAGE3.json';

const contents = { contents1: contents1, contents2: contents2, contents3: contents3 };

export const fetchShows = () => async (dispatch, getState) => {
  const currentState = getState();
  let pageNo = currentState?.shows?.currentPage;
  const pageSize = currentState?.shows?.pageSize;
  if (pageNo === 0) {
    dispatch({ type: types.FETCH_SHOWS, payload: contents1, pageNo: pageNo + 1 });
  } else if (pageNo * pageSize < currentState?.shows?.totalContents) {
    // This will work till until total contents are fetched
    let content = [];
    try {
      content = contents[`contents${pageNo + 1}`];
    } catch (err) {
      // console.log(err);
    }
    dispatch({ type: types.FETCH_SHOWS, payload: content, pageNo: pageNo + 1 });
  }
};
