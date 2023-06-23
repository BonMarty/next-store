import { ICart } from '@/app/types/ICart';
import { IProduct } from '@/app/types/IProduct';
import { IQuantity } from '@/app/types/IQuantity';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState: ICart = {
  cart: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state: ICart, action: PayloadAction<IProduct>) => {
      state.cart = [
        ...state.cart,
        {
          ...action.payload,
          quantity: 1,
        },
      ];
    },

    removeFromCart: (state: ICart, action: PayloadAction<IProduct>) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },

    clearCart: (state: ICart) => {
      state.cart = [];
    },

    changeCartQuantity: (state: ICart, action: PayloadAction<IQuantity>) => {
      const currentItem = state.cart.find((item) => item.id === action.payload.id);

      if (currentItem) {
        currentItem.quantity = action.payload.quantity;
      }
    },
  },
});

export const { addToCart, removeFromCart, clearCart, changeCartQuantity } = cartSlice.actions;

export default cartSlice.reducer;
