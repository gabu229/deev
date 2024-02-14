import { createSlice } from "@reduxjs/toolkit";

const defaultSettings = {
  theme: "monokai",
  enableBasicAutocompletion: true,
  enableLiveAutocompletion: true,
  enableSnippets: true,
  showLineNumbers: true,
  wrapEnabled: true,
  tabSize: 4,
  fontSize: 14,
  showGutter: true,
  showPrintMargin: false,
  highlightActiveLine: true,
};

const editorSettings = createSlice({
  name: "editorSettings",
  initialState: {
    settings: { ...defaultSettings },
  },
  reducers: {
    updateEditorSettings: (state, action) => {
      state.settings = { ...state.settings, ...action.payload };
    },
  },
});

export const { updateEditorSettings } = editorSettings.actions;
export default editorSettings.reducer;
