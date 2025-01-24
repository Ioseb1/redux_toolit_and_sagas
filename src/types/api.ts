import type { ICommonRecord } from "./common";

export type IApiError = {
    errorStatus: number,
    success: boolean,
    message?: string,
    error?: ICommonRecord
};