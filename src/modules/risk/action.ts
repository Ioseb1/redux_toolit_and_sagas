import { GET_RISKS_DATA } from './action-types';

interface IAction<P = unknown> {
  type: typeof GET_RISKS_DATA;
  payload: Record<string, P>;
}

export const getRisks = (): IAction => ({
    type: GET_RISKS_DATA,
    payload: {},
});
