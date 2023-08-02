import { configureStore, createSlice } from "@reduxjs/toolkit";

const modeslice = createSlice({
  name: "mode",
  initialState: { isDark: true },
  reducers: {
    toggleMode(state, action) {
      state.isDark = !state.isDark;
    },
  },
});
export const modeactions = modeslice.actions;
const store = configureStore({
  reducer: { mode: modeslice.reducer },
});
export default store;
