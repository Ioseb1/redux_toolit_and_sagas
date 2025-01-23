import { call, put, takeLatest } from 'redux-saga/effects';
import { GET_CATS_DATA, GET_CATS_DATA_SUCCESS } from './action-types';

function* workGetCatsFetch(): any {
  const cats = yield call(() => fetch('https://api.thecatapi.com/v1/breeds'));

  const formattedCats = yield cats.json();
  const formattedCatsShortened = formattedCats.slice(0, 10);

  yield put({
    type: GET_CATS_DATA_SUCCESS,
    payload: {
      catsData: formattedCatsShortened,
      isLoading: false,
    },
  });
}

function* catSaga() {
  yield takeLatest(GET_CATS_DATA, workGetCatsFetch);
}

export default catSaga;
