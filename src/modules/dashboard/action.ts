import { GET_CATS_DATA } from './action-types';

interface IAction<P = unknown> {
  type: typeof GET_CATS_DATA;
  payload: Record<string, P>;
}

export const getCatData = (): IAction => ({
  type: GET_CATS_DATA,
  payload: {},
});
