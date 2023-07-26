import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export type OrderItem = {
  orderNumber: string;
  id: number | string;
  name: string;
  date: Date;
  price: number;
};

type OrderState = {
  orders: OrderItem[];
};

const initialState: OrderState = {
  orders: [],
};

const orderSlice = createSlice({
  initialState,
  name: 'orderReducer',
  reducers: {
    setOrders(state, {payload}: PayloadAction<OrderItem>) {
      state.orders = [...state.orders, payload];
    },
  },
});

export const {setOrders} = orderSlice.actions;

export default orderSlice.reducer;
