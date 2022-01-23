import * as types from './types';

const initialState = {
  shows: [],
  title: '',
  currentPage: 0,
  pageSize: 20,
  totalContents: 54,
  paginationStatus: false,
};

const reducer = (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case types.FETCH_SHOWS:
      return {
        ...state,
        shows: [...state.shows, ...action.payload.page.content_items.content],
        currentPage: action.pageNo,
        title: action.title,
      };
  }
  return newState;
};
export default reducer;
