import { createSlice } from "@reduxjs/toolkit";
import {
  enterFullscreen,
  exitFullscreen,
} from "@/utils/constants/browserFunctions";

// GET INITIAL BROWSER MODE
const initialFullscreenState =
  typeof document === "undefined"
    ? 0
    : document.fullscreenElement ||
      document.webkitFullscreenElement ||
      document.msFullscreenElement;

// MAIN BROWSER SLICE
const browserObjectSlice = createSlice({
  name: "browser",
  initialState: {
    fullscreen: initialFullscreenState,
  },
  reducers: {
    toggleFullscreen: (state) => {
      if (!Boolean(initialFullscreenState)) {
        enterFullscreen();
      } else {
        exitFullscreen();
      }
      state.fullscreen = !Boolean(initialFullscreenState);
    },
  },
});

// EXPORT AS NEEDED
export const { toggleFullscreen } = browserObjectSlice.actions;
export default browserObjectSlice.reducer;
