// File logic note: This file is documented for revision-friendly learning.
// Redux store setup: registers todo reducer for global state.

import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../Features/todo/todoSlice';

export const store = configureStore({
    reducer: todoReducer
})