/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosError } from 'axios';

import type { IApiError } from '@types/api';


const ENDPOINT_BASE_URL = process.env.REACT_APP_RMT_API_ENDPOINT_URL || 'http://localhost:5173';
const API_VERSION = process.env.REACT_APP_RMT_API_VERSION || 'api/v1';
const RESPONSE_FAIL = { success: false, errorStatus: 403 };

type IAxiosError = {
    data: IApiError,
    status: number,
};

const buildHeaders = () => {
    const AXIOS_CONFIG = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json; charset=utf-8',
        } as Record<string, string>,
        withCredentials: true,
    };

    return AXIOS_CONFIG;
};

const buildErrorResponse = (errorResponse?: IAxiosError): IApiError => {
    const errorStatus = errorResponse?.status;

    return {
        ...errorResponse?.data,
        success: errorResponse?.data?.success || false,
        message: errorResponse?.data?.message,
        errorStatus: errorStatus || errorResponse?.data?.errorStatus || 403,
    };
};


const get = async (url: string): Promise<any> => {
    try {
        const response = await axios.get(`${ENDPOINT_BASE_URL}/${API_VERSION}/${url}`, buildHeaders());

        return response.data;
    } catch (error) {
        if (error instanceof AxiosError && error.response) {
            throw buildErrorResponse(error.response as IAxiosError);
        }

        return RESPONSE_FAIL;
    }
};


export default {
    get,
};
