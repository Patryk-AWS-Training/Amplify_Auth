import {createSlice} from '@reduxjs/toolkit';
import {getDummyData} from './thunks';

const mainSlice = createSlice({
  name: 'main',
  initialState: {
    dummyData: [],
  },
  reducers: {},
  extraReducers: {
    [getDummyData.fulfilled]: (state, {payload}) => {
      state.dummyData = payload;
    },
  },
});

export const {} = mainSlice.actions;

export default mainSlice.reducer;
