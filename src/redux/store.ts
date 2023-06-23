import storage from '@/app/utils/storage';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import { productApi } from './services/ProductService/ProductService';
import cartReducer from './slices/cartSlice/cartSlice';
import filtersReducer from './slices/filtersSlice/filtersSlice';
import ordersReducer from './slices/ordersSlice/ordersSlice';
import paginationReducer from './slices/paginationSlice/paginationSlice';
import searchReducer from './slices/searchSlice/searchSlice';
import sortReducer from './slices/sortSlice/sortSlice';
import themeReducer from './slices/themeSlice/themeSlice';
import userReducer from './slices/userSlice/userSlice';
import wishlistReducer from './slices/wishlistSlice/wishlistSlice';

const persistThemeConfig = {
  key: 'theme',
  storage,
};

const persistWishlistConfig = {
  key: 'wishlist',
  storage,
};

const persistCartConfig = {
  key: 'cart',
  storage,
};

const persistUserConfig = {
  key: 'user',
  storage,
};

const persistOrdersConfig = {
  key: 'orders',
  storage,
};

const persistedThemeReducer = persistReducer(persistThemeConfig, themeReducer);

const persistedWishlistReducer = persistReducer(persistWishlistConfig, wishlistReducer);

const persistedCartReducer = persistReducer(persistCartConfig, cartReducer);

const persistedUserReducer = persistReducer(persistUserConfig, userReducer);

const persistedOrdersReducer = persistReducer(persistOrdersConfig, ordersReducer);

const rootReducer = combineReducers({
  theme: persistedThemeReducer,
  sort: sortReducer,
  pagination: paginationReducer,
  filters: filtersReducer,
  search: searchReducer,
  wishlist: persistedWishlistReducer,
  cart: persistedCartReducer,
  user: persistedUserReducer,
  orders: persistedOrdersReducer,
  [productApi.reducerPath]: productApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(productApi.middleware),
});

export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
