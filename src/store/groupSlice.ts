import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { initialGroupState } from "./initialGroupState";

export interface GroupState {
  id: string;
  name: string;
  members: {
    userName: string;
    amount: number;
  }[];
}

export const groupSlice = createSlice({
  name: "groups",
  initialState: initialGroupState,
  reducers: {},
});
