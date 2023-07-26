import {createSelector} from '@reduxjs/toolkit';
import {RootState} from '@reducers/index';

const selectReducer = (state: RootState) => state.food;

export const selectFood = createSelector(selectReducer, state => state);
