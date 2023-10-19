import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "features/modal/modalSlice";

export const store = configureStore({
  reducer: {
    modals: modalSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
