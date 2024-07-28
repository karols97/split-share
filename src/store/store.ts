import { configureStore } from "@reduxjs/toolkit";
import demoFeaturesReducer from "./demoFeaturesSlice";

export const store = configureStore({
  reducer: {
    demoFeatures: demoFeaturesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
