import { call, put, takeLatest } from 'redux-saga/effects';
import { GET_RISKS_DATA, GET_RISKS_DATA_SUCCESS } from './action-types';

function* getRisks(): any {
  const cats = yield call(() => fetch('https://api.thecatapi.com/v1/breeds'));

  const formattedCats = yield cats.json();
  const formattedCatsShortened = formattedCats.slice(0, 10);

  yield put({
    type: GET_RISKS_DATA_SUCCESS,
    payload: {
      risks: formattedCatsShortened,
      isLoading: false,
    },
  });
}

function* catSaga() {
  yield takeLatest(GET_RISKS_DATA, getRisks);
}

export default catSaga;
