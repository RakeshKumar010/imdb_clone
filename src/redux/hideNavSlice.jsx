import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: false
};

const hideNavSlice = createSlice({
  name: 'hideNav',
  initialState,
  reducers: {
    // updateValue: (state) => {
    //   state.value = true;
    // },
    hideNavFun: (state,action) => {
        state.value = action.payload;
      },
  },
});

export const { hideNavFun } = hideNavSlice.actions;

export default hideNavSlice.reducer;
