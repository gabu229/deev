import { createSlice } from "@reduxjs/toolkit";

const findFile = (file, id) => {
  return file._fileId === id;
};

export const editorProjectSlice = createSlice({
  name: "activeProject",
  initialState: {
    project: {},
  },
  reducers: {
    updateFileContents: (state, action) => {
      const arrayIndex = state.project.projectFiles.findIndex((file) =>
        findFile(file, action.payload._fileId)
      );

      if (arrayIndex !== -1) {
        state.project.projectFiles[arrayIndex]._fileContents =
          action.payload._fileContents;
      }
    },
    createNewProject: (state, action) => {
      const project = action.payload;
      state.project = project;
    },
  },
});

export const { updateFileContents, createNewProject } =
  editorProjectSlice.actions;
export default editorProjectSlice.reducer;
