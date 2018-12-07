import { combineReducers } from 'redux';

import {dialect, feature, uuid, initialState} from './app';

export default combineReducers({dialect, feature, uuid});
export {initialState};
