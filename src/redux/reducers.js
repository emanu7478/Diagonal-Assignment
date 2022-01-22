import { combineReducers } from 'redux';
import shows from './shows/reducer';

const Reducer = combineReducers({
  shows,
});
export const rootReducer = Reducer;
