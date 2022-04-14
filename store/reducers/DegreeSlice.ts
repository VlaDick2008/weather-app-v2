import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DegreeState {
  degreeIndex: number;
}

const initialState: DegreeState = {
  degreeIndex: 2,
};

export const degreeSlice = createSlice({
  name: 'degreeSwitch',
  initialState,
  reducers: {
    setDegreeIndex(state, action: PayloadAction<number>) {
      state.degreeIndex = action.payload;
    },
  },
});

export default degreeSlice.reducer;
