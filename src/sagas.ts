import { all, fork } from 'redux-saga/effects';

import riskSaga from '@modules/risk/sagas';



export default function* rootSaga() {
    yield all([fork(riskSaga)]);
}
