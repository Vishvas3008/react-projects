import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { shoingYearChart: true };
const yearChartSlice = createSlice({
  name: "yearchart",
  initialState,
  reducers: {
    chartToggler(state) {
      state.shoingYearChart = !state.shoingYearChart;
    },
  },
});

const store = configureStore({
  reducer: yearChartSlice.reducer,
});

export const chartActions = yearChartSlice.actions;
export default store;
