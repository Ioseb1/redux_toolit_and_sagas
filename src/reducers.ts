import { combineReducers } from 'redux';

import dashboardReducer from './modules/dashboard/reducers';

const reducers = [dashboardReducer];

export default combineReducers({ ...reducers });
