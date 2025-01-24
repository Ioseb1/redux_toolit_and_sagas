import { all, fork } from 'redux-saga/effects';

import catSaga from './modules/risk/sagas';

export default function* rootSaga() {
  yield all([fork(catSaga)]);
}
