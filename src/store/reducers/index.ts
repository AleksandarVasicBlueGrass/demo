import {combineReducers} from '@reduxjs/toolkit';
import foodSlice from './FoodReducer';
import orderSlice from './OrderReducer';

const rootReducer = combineReducers({
  food: foodSlice,
  order: orderSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
