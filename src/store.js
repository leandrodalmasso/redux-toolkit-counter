/* Dependencies */
import { configureStore } from '@reduxjs/toolkit';

/* Slices */
import counter from "./counterSlice";

export const store = configureStore({
  reducer: {
    counter
  },
})
