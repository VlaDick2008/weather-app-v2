import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DegreeState {
  degreeIndex: number;
  degreeVisible: boolean;
}

const initialState: DegreeState = {
  degreeIndex: 2,
  degreeVisible: true,
};

export const degreeSlice = createSlice({
  name: 'degreeSwitch',
  initialState,
  reducers: {
    setDegreeIndex(state, action: PayloadAction<number>) {
      state.degreeIndex = action.payload;
    },
    setDegreeVisibylity(state, action: PayloadAction<boolean>) {
      state.degreeVisible = action.payload;
    },
  },
});

export default degreeSlice.reducer;
