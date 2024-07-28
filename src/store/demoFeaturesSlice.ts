import { createSlice } from "@reduxjs/toolkit";

interface DemoFeaturesState {
  value: boolean;
}

const initialState: DemoFeaturesState = {
  value: true,
};

const demoFeaturesSlice = createSlice({
  name: "demoFeatures",
  initialState: initialState,
  reducers: {
    handleDemoFeatures: (state) => {
      state.value = !state.value;
    },
  },
});

export const { handleDemoFeatures } = demoFeaturesSlice.actions;

export default demoFeaturesSlice.reducer;
