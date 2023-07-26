import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Food} from '@models';

type FoodState = {
  loading: boolean;
  error: boolean;
  food: Food[];
};

const initialState: FoodState = {
  loading: false,
  error: false,
  food: [],
};

const foodSlice = createSlice({
  initialState,
  name: 'foodReducer',
  reducers: {
    setLoading(state, {payload}: PayloadAction<boolean>) {
      state.loading = payload;
    },
    setError(state, {payload}: PayloadAction<boolean>) {
      state.error = payload;
    },
    setFood(state, {payload}: PayloadAction<Food[]>) {
      state.food = [...state.food, ...payload];
      state.loading = false;
      state.error = false;
    },
  },
});

export const {setFood, setLoading, setError} = foodSlice.actions;

export default foodSlice.reducer;
