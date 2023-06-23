import { ITheme } from '@/app/types/ITheme';
import { createSlice } from '@reduxjs/toolkit';

const initialState: ITheme = {
  theme: 'light',
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setLightTheme: (state: ITheme) => {
      state.theme = 'light';
    },

    setDarkTheme: (state: ITheme) => {
      state.theme = 'dark';
    },
  },
});

export const { setLightTheme, setDarkTheme } = themeSlice.actions;

export default themeSlice.reducer;
