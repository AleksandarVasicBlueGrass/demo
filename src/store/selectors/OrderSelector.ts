import {createSelector} from '@reduxjs/toolkit';
import {RootState} from '@reducers/index';

const selectReducer = (state: RootState) => state.order;

export const selectOrders = createSelector(
  selectReducer,
  state => state.orders,
);
