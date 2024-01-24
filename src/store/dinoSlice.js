import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: true,
  dinoData: [],
};

const dinoSlice = createSlice({
  name: 'dino',
  initialState,
  reducers: {
    updateData: (state, action) => {
      return {
        ...state,
        loading: false,
        dinoData: action.payload,
      };
    },
  },
});

export const { updateData } = dinoSlice.actions;

export default dinoSlice.reducer;
