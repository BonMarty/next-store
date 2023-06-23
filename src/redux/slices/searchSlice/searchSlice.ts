import { IProduct } from '@/app/types/IProduct';
import { ISearch } from '@/app/types/ISearch';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState: ISearch = {
  searchedProducts: [],
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchedProducts: (state: ISearch, action: PayloadAction<IProduct[]>) => {
      state.searchedProducts = [...action.payload];
    },

    removeSearchedProducts: (state: ISearch) => {
      state.searchedProducts = [];
    },
  },
});

export const { setSearchedProducts, removeSearchedProducts } = searchSlice.actions;

export default searchSlice.reducer;
