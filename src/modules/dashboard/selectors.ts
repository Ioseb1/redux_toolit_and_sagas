import { RootState } from '../../store/store';

export const selectCats = (state: any) => state.cats.catsData;
export const selectIsLoading = (state: any) => state.cats.isLoading;
