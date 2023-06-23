import { IProduct } from '@/app/types/IProduct';
import { IQuantity } from '@/app/types/IQuantity';
import { IWishlist } from '@/app/types/IWishlist';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState: IWishlist = {
  wishlist: [],
};

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addToWishlist: (state: IWishlist, action: PayloadAction<IProduct>) => {
      state.wishlist = [
        ...state.wishlist,
        {
          ...action.payload,
          quantity: 1,
        },
      ];
    },

    removeFromWishlist: (state: IWishlist, action: PayloadAction<IProduct>) => {
      state.wishlist = state.wishlist.filter((item) => item.id !== action.payload.id);
    },

    clearWishlist: (state: IWishlist) => {
      state.wishlist = [];
    },

    changeWishlistQuantity: (state: IWishlist, action: PayloadAction<IQuantity>) => {
      const currentItem = state.wishlist.find((item) => item.id === action.payload.id);

      if (currentItem) {
        currentItem.quantity = action.payload.quantity;
      }
    },
  },
});

export const { addToWishlist, removeFromWishlist, clearWishlist, changeWishlistQuantity } =
  wishlistSlice.actions;

export default wishlistSlice.reducer;
