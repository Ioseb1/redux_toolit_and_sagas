import { mergeObject } from './utils';
import type { ICommonRecord } from '../types/common';
import type { IAction } from '../types/action';

const reducer = (
    state: ICommonRecord,
    action: IAction,
    reduceMap: Array<string>
): Record<string, unknown> => {
    const isValidAction: boolean = reduceMap.indexOf(action.type) !== -1;

    return isValidAction ? mergeObject(state, action.payload) : state;
};

export default reducer;
