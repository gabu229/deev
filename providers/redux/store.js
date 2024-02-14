import { configureStore } from "@reduxjs/toolkit";

import editorProjectReducer from "./stores/editorProject";
import browserObject from "./stores/browserObject";
import modalStates from "./stores/modalStates";
import editorSettings from "./stores/editorSettings";

export default configureStore({
  reducer: {
    editorProject: editorProjectReducer,
    browserObject: browserObject,
    modalStates: modalStates,
    editorSettings: editorSettings,
  },
});
