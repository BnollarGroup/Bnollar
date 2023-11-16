import { createSlice } from "@reduxjs/toolkit";
import { Modal } from "lib/types";
import type { PayloadAction } from "@reduxjs/toolkit";

interface ModalState {
  modal: Modal | null;
  collectionInputValue: string;
}

const initialState: ModalState = {
  modal: null,
  collectionInputValue: "",
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    collectionInputValueChange: (state, action: PayloadAction<string>) => {
      if (state.modal && state.modal === "uploadNFT-uploadFile") {
        state.collectionInputValue = action.payload;
      }
    },

    change: (state, action: PayloadAction<Modal>) => {
      state.modal = action.payload;
    },

    close: (state) => {
      state.modal = null;
    },
  },
});

export const { change, close, collectionInputValueChange } = modalSlice.actions;

export default modalSlice.reducer;
