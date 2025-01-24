import reducerHelper from '@helpers/reducer';
import type { IAction } from '@types/action';

import { GET_RISKS_DATA_SUCCESS } from './action-types';
import initialState from './initialState';
import type { IRiskState } from './types';


const reduceMap = [
    GET_RISKS_DATA_SUCCESS,
];

const reducer = (
    state: IRiskState = initialState,
    action: IAction
): Record<string, unknown> => reducerHelper(state, action, reduceMap);

export default reducer;
