import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  dataSales: []
};

const salesSlice = createSlice({
  name: 'sales',
  initialState,
  reducers: {
    setDataSales(state, action) {
      state.dataSales = action.payload;
    },
  },
});

export const { setDataSales } = salesSlice.actions;
export default salesSlice.reducer;
