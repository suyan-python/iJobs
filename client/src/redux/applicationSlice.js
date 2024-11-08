import { createSlice } from "@reduxjs/toolkit";
const applicationSlice = createSlice({
  name: "application",
  initialState: {
    applicants: [],
  },
  reducers: {
    setALlApplicants: (state, action) => {
      state.applicants = action.payload;
    },
  },
});

export const { setALlApplicants } = applicationSlice.actions;
export default applicationSlice.reducer;
