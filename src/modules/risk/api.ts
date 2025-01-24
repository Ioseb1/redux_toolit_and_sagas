import baseAPI from '@api/api';
import apiUrls from '@constants/api';

import { IRisk } from './types';


export type IRiskListResponse = {
    success: boolean,
    content: IRisk[],
};

export const getRisks = (): Promise<IRiskListResponse> => {
    return baseAPI.get(apiUrls.risk.getAll);
};

export default {
    getRisks,
};