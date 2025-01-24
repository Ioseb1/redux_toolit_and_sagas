import { combineReducers } from 'redux';

import riskReducer from './modules/risk/reducers';

const reducers = {
    riskReducer,
};

export default combineReducers(reducers);
