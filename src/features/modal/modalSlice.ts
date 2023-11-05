import { createSlice } from "@reduxjs/toolkit";
import { Modal } from "lib/types";
import type { PayloadAction } from "@reduxjs/toolkit";

interface ModalState {
  modal: Modal | null;
}

const initialState: ModalState = {
  modal: null,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    change: (state, action: PayloadAction<Modal>) => {
      state.modal = action.payload;
    },

    close: (state) => {
      state.modal = null;
    },
  },
});

export const { change, close } = modalSlice.actions;

export default modalSlice.reducer;
