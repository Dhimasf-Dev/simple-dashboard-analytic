// store.js
import { configureStore } from '@reduxjs/toolkit';
import salesReducer from './reducers/salesReducer';
import searchReducer from './reducers/searchReducer';
import filterReducer from './reducers/filterReducer';

export const store = configureStore({
  reducer: {
    sales: salesReducer,
    search: searchReducer,
    filter: filterReducer,
  }
});
