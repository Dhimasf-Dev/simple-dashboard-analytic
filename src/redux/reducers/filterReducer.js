import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  startDate: '',
  endDate: ''
};

const filterSlice = createSlice({
  name: 'filterSales',
  initialState,
  reducers: {
    setStartDate(state, action) {
      state.startDate = action.payload;
    },
    setEndDate(state, action) {
      state.endDate = action.payload;
    },
  },
});

export const { setStartDate, setEndDate } = filterSlice.actions;
export default filterSlice.reducer;
