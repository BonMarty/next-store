import { login, logout, register } from '@/app/firebase/firebase';
import { ICredentials } from '@/app/types/ICredentials';
import { IUser } from '@/app/types/IUser';
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { User, updateProfile } from 'firebase/auth';

export const registerUser = createAsyncThunk(
  'user/registerUser',
  async ({ email, password, name }: ICredentials) => {
    try {
      // This process is need because I want to set displayName of firebase user and it just doesn't work if user already signed in so I create user, then update dispayName, sign him out and sign in. By doing this I reach my goal to set dispayName with name that user enter in auth page
      const registeredUser = (await register(email, password)).user;
      await updateProfile(registeredUser, {
        displayName: name,
      });
      await logout();
      const { user } = await login(email, password);
      return user;
    } catch (error: any) {
      console.error(error);
      alert(error);
      return null;
    }
  },
);

export const loginUser = createAsyncThunk(
  'user/loginUser',
  async ({ email, password }: ICredentials) => {
    try {
      const { user } = await login(email, password);
      return user;
    } catch (error: any) {
      console.error(error);
      alert(error);
      return null;
    }
  },
);

export const logoutUser = createAsyncThunk('user/logoutUser', async () => {
  try {
    await logout();
  } catch (error: any) {
    console.error(error);
    alert(error);
    return null;
  }
});

const initialState: IUser = {
  isLoading: true,
  user: null,
  isError: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, (state: IUser) => {
      (state.isLoading = true), (state.isError = false), (state.user = null);
    });
    builder.addCase(registerUser.fulfilled, (state: IUser, action: PayloadAction<User | null>) => {
      state.isLoading = false;
      if (action.payload) {
        state.user = {
          ...action.payload,
        };
      }
      state.isError = false;
    });
    builder.addCase(registerUser.rejected, (state: IUser) => {
      state.isLoading = false;
      state.user = null;
      state.isError = true;
    });
    builder.addCase(loginUser.pending, (state: IUser) => {
      state.isLoading = true;
      state.user = null;
      state.isError = false;
    });
    builder.addCase(loginUser.fulfilled, (state: IUser, action: PayloadAction<User | null>) => {
      state.isLoading = false;
      if (action.payload) {
        state.user = {
          ...action.payload,
        };
      }
      state.isError = false;
    });
    builder.addCase(loginUser.rejected, (state: IUser) => {
      state.isLoading = false;
      state.user = null;
      state.isError = true;
    });
    builder.addCase(logoutUser.pending, (state: IUser) => {
      state.isLoading = true;
      state.user = null;
      state.isError = false;
    });
    builder.addCase(logoutUser.fulfilled, (state: IUser) => {
      state.isLoading = false;
      state.user = null;
      state.isError = false;
    });
    builder.addCase(logoutUser.rejected, (state: IUser) => {
      state.isLoading = false;
      state.user = null;
      state.isError = true;
    });
  },
});

export default userSlice.reducer;
