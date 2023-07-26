import {AnyAction, Dispatch} from '@reduxjs/toolkit';
import {Food} from '@models';
import getFoodData from '@mocks';
import {RootState} from '@reducers/index';
import {setFood, setLoading} from '@reducers/FoodReducer';

export const getFood =
  () => async (dispatch: Dispatch<AnyAction>, getState: () => RootState) => {
    dispatch(setLoading(true));
    const {food} = getState().food;
    try {
      const newFood: Food[] = await getFoodData();

      if (!newFood?.length) {
        return setLoading(false);
      }

      if (newFood?.length === food?.length) {
        return dispatch(setLoading(false));
      }

      dispatch(setFood(newFood));
    } catch (error) {
      console.error(error);
      dispatch(setLoading(true));
    }
  };
