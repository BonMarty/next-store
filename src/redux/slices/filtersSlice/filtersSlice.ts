import { IFilter } from '@/app/types/IFilter';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState: IFilter = {
  brands: [],
  categories: [],
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setBrandFilter: (state: IFilter, action: PayloadAction<string>) => {
      state.brands = [...state.brands, action.payload];
    },

    setCategoryFilter: (state: IFilter, action: PayloadAction<string>) => {
      state.categories = [...state.categories, action.payload];
    },

    removeBrandFilter: (state: IFilter, action: PayloadAction<string>) => {
      state.brands = state.brands.filter((brand) => brand !== action.payload);
    },

    removeCategoryFilter: (state: IFilter, action: PayloadAction<string>) => {
      state.categories = state.categories.filter((category) => category !== action.payload);
    },

    removeAllFilters: (state: IFilter) => {
      state.brands = [];
      state.categories = [];
    },
  },
});

export const {
  setBrandFilter,
  setCategoryFilter,
  removeBrandFilter,
  removeCategoryFilter,
  removeAllFilters,
} = filtersSlice.actions;

export default filtersSlice.reducer;
