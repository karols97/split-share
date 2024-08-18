import { createSlice } from "@reduxjs/toolkit";

interface AppState {
  demoFeatures: boolean;
  showSidebar: boolean;
  userSidebarControl: boolean;
}

const initialState: AppState = {
  demoFeatures: false,
  showSidebar: true,
  userSidebarControl: false,
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
    expandSidebar: (state) => {
      state.showSidebar = true;
    },
    collapseSidebar: (state) => {
      state.showSidebar = false;
    },
    setUserSidebarControl: (state) => {
      state.userSidebarControl = true;
    },
    unsetUserSidebarControl: (state) => {
      state.userSidebarControl = false;
    },
  },
});

export const {
  handleDemoFeatures,
  handleShowSidebar,
  expandSidebar,
  collapseSidebar,
  setUserSidebarControl,
  unsetUserSidebarControl,
} = appSlice.actions;

export default appSlice.reducer;
