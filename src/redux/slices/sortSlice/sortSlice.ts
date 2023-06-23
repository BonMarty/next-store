import { ISort } from '@/app/types/ISort';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState: ISort = {
  sortBy: 'rating',
  order: 'desc',
};

const sortSlice = createSlice({
  name: 'sort',
  initialState,
  reducers: {
    setSort: (state: ISort, action: PayloadAction<ISort>) => {
      state.sortBy = action.payload.sortBy;
      state.order = action.payload.order;
    },
  },
});

export const { setSort } = sortSlice.actions;

export default sortSlice.reducer;
