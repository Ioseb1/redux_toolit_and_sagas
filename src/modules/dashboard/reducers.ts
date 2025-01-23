import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store/store';

const catSlice = createSlice({
  name: 'cats',
  initialState: {
    catsData: [],
    isLoading: false,
  },
  reducers: {
    getCatsFetch: (state) => {
      state.isLoading = true;
    },
    getCatsSuccess: (state, action) => {
      state.catsData = action.payload;
      state.isLoading = false;
    },
    getCatsFailure: (state) => {
      state.isLoading = false;
    },
  },
});

export const { getCatsFetch, getCatsSuccess, getCatsFailure } =
  catSlice.actions;

export default catSlice.reducer;
