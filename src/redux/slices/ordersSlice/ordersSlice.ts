import { IOrder } from '@/app/types/IOrder';
import { IOrders } from '@/app/types/IOrders';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState: IOrders = {
  orders: [],
};

export const ordersSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    addOrder: (state: IOrders, action: PayloadAction<IOrder>) => {
      state.orders = [...state.orders, action.payload];
    },
    clearOrders: (state: IOrders) => {
      state.orders = [];
    },
  },
});

export const { addOrder, clearOrders } = ordersSlice.actions;

export default ordersSlice.reducer;
