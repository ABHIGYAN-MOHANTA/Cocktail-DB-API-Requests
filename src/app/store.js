// eslint-disable-next-line
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { drinksApiSlice } from "../app/api/apiSlice";

export const store = configureStore({
  reducer: {
    [drinksApiSlice.reducerPath]: drinksApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(drinksApiSlice.middleware),
  devTools: false,
});
