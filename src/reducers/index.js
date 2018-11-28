import { combineReducers } from 'redux';

import appReducer, {initialState} from './app';

export default combineReducers({
  app: appReducer,
});
export {initialState};
