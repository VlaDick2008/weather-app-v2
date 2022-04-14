import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SityInputState {
  sityName: string;
}

const initialState: SityInputState = {
  sityName: 'Омск',
};

export const sityInputSlice = createSlice({
  name: 'sityInput',
  initialState,
  reducers: {
    setSity(state, action: PayloadAction<string>) {
      state.sityName = action.payload;
    },
  },
});

export default sityInputSlice.reducer;
