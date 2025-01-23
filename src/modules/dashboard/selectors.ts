import { RootState } from '../../store/store';

export const selectCats = (state: RootState) => state.cats.catsData;
