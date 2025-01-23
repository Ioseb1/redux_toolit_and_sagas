import type { ICommonRecord } from './common';

export type IAction = {
  type: string;
  payload: ICommonRecord;
};
