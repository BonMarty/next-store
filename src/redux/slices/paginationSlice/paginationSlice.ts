import { IPagination } from '@/app/types/IPagination';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState: IPagination = {
  activePage: 1,
  pageCount: 10,
};

const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    changeActivePage: (state: IPagination, action: PayloadAction<number>) => {
      state.activePage = action.payload;
    },

    changePageCount: (state: IPagination, action: PayloadAction<number>) => {
      state.pageCount = action.payload;
    },
  },
});

export const { changeActivePage, changePageCount } = paginationSlice.actions;

export default paginationSlice.reducer;
