import {AnyAction, configureStore, ThunkDispatch} from '@reduxjs/toolkit';
import {persistReducer, persistStore} from 'redux-persist';
import thunkMiddleware from 'redux-thunk';
import {storage} from '@lib';
import rootReducer, {RootState} from './reducers';

const persistConfig = {
  key: 'root',
  blacklist: ['food'],
  storage,
};

const persistedReducers = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducers,
  middleware: [thunkMiddleware],
});

export type AppDispatch = typeof store.dispatch;
export type AppThunkDispatch = ThunkDispatch<RootState, any, AnyAction>;

export default store;
export const persistor = persistStore(store);
