import { GET_RISKS_DATA_SUCCESS } from './action-types';
import initialState from './initialState';
import type { IDashboardState } from './types';
import reducerHelper from '../../helpers/reducer';
import type { IAction } from '../../types/action';

const reduceMap = [GET_RISKS_DATA_SUCCESS];

const reducer = (
    state: IDashboardState = initialState,
    action: IAction
): Record<string, unknown> => reducerHelper(state, action, reduceMap);

export default reducer;
