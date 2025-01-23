import catSaga from './modules/dashboard/sagas';

export function* rootSaga() {
  yield catSaga();
}
