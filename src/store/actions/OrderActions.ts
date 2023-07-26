import {AnyAction, Dispatch} from '@reduxjs/toolkit';
import {Food} from '@models';
import {setOrders, OrderItem} from '@reducers/OrderReducer';

export const addOrder = (order: Food) => (dispatch: Dispatch<AnyAction>) => {
  const newOrder: OrderItem = {
    orderNumber: `${Math.random() + Math.random()}`,
    id: order?.id,
    name: order?.name,
    date: new Date(),
    price: order?.price,
  };

  dispatch(setOrders(newOrder));
};
