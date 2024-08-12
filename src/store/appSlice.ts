import { createSlice } from "@reduxjs/toolkit";

interface AppState {
  demoFeatures: boolean;
  showSidebar: boolean;
}

const initialState: AppState = {
  demoFeatures: true,
  showSidebar: true,
};

const appSlice = createSlice({
  name: "app",
  initialState: initialState,
  reducers: {
    handleDemoFeatures: (state) => {
      state.demoFeatures = !state.demoFeatures;
    },
    handleShowSidebar: (state) => {
      state.showSidebar = !state.showSidebar;
    },
  },
});

export const { handleDemoFeatures, handleShowSidebar } = appSlice.actions;

export default appSlice.reducer;
