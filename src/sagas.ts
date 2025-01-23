import { all, fork } from 'redux-saga/effects';

import catSaga from './modules/dashboard/sagas';

export default function* rootSaga() {
  yield all([fork(catSaga)]);
}
