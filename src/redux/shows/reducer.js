import * as types from './types';

const initialState = {
  shows: [],
};

const reducer = (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case types.FETCH_SHOWS:
      return Object.assign({
        ...state,
        shows: action.payload,
      });
  }
  return newState;
};
export default reducer;
