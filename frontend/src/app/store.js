import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    counter: counterReducer,
  },
});

console.log(store.getState(), 'store');
