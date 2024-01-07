import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};
const ratingSlice = createSlice({
  name: "rating",
  initialState,
  reducers:{
    ratingFun:(state,actions)=>{
        state.value=actions.payload
    }
  }
});


export const { ratingFun } = ratingSlice.actions;

export default ratingSlice.reducer;