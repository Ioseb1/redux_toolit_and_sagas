import { call, put, takeLatest, StrictEffect } from 'redux-saga/effects';

import { GET_RISKS_DATA, GET_RISKS_DATA_SUCCESS } from './action-types';
import riskAPI from './api';


export function* getRisks(): Generator<StrictEffect, void, never> {
    try {
        const risks = yield call(riskAPI.getRisks);
    
        yield put({
            type: GET_RISKS_DATA_SUCCESS,
            payload: {
                risks,
                isLoading: false,
            },
        });
    } catch (error){
        console.error(error);
    }
}

export default function* (): Generator {
    yield takeLatest(GET_RISKS_DATA, getRisks);
}
