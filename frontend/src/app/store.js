import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import counterReducer from '../features/counter/counterSlice';
import ticketReducer from '../features/tickets/ticketSlice';
import postReducer from '../features/posts/postSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    counter: counterReducer,
    tickets: ticketReducer,
    posts: postReducer,
  },
});

console.log(store.getState(), 'store');
