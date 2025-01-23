import { Tuple, configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
// import catsReducer from '../modules/dashboard/slices';
import rootReducers from '../reducers';
import rootSaga from '../sagas';

const saga = createSagaMiddleware();
export const store = configureStore({
  reducer: rootReducers,
  middleware: () => new Tuple(saga),
});
saga.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
