import { createSlice } from '@reduxjs/toolkit';

const loadingSlice = createSlice({
  name: 'loadingSlice',
  initialState: {
    isLoading: false,
  },
  reducers: {
    changeLoadingState: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export default loadingSlice.reducer;
export const { changeLoadingState } = loadingSlice.actions;
