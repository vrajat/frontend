import { combineReducers } from 'redux';

import {dialect, feature, initialState} from './app';

export default combineReducers({dialect, feature});
export {initialState};
