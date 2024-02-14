import { createSlice } from "@reduxjs/toolkit";
import {
  enterFullscreen,
  exitFullscreen,
} from "@/utils/constants/browserFunctions";

const findModalIndex = (modal, id) => {
  return modal.modalId === id;
};

// MAIN BROWSER SLICE
const modalStates = createSlice({
  name: "modals",
  initialState: {
    modals: [
      {
        modalId: "createNewProject",
        isOpen: true,
        showCancelButton: false,
      },
      {
        modalId: "editorSettings",
        isOpen: false,
        showCancelButton: true,
      },
    ],
  },
  reducers: {
    openModal: (state, action) => {
      const arrayIndex = state.modals.findIndex((modal) =>
        findModalIndex(modal, action.payload.modalId)
      );

      if (arrayIndex !== -1) {
        state.modals[arrayIndex].isOpen = true;
      }
    },
    closeModal: (state, action) => {
      const arrayIndex = state.modals.findIndex((modal) =>
        findModalIndex(modal, action.payload.modalId)
      );

      if (arrayIndex !== -1) {
        state.modals[arrayIndex].isOpen = false;
      }
    },
  },
});

// EXPORT AS NEEDED
export const { openModal, closeModal } = modalStates.actions;
export default modalStates.reducer;
