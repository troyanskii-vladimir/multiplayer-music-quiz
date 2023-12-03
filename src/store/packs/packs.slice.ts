import { createSlice } from '@reduxjs/toolkit';
import { SliceNames } from '../../config';
import { PacksData } from '../../types/state';
import { getPacksAction } from '../api-action';


const initialState: PacksData = {
  packs: [],
  isPacksDownloading: false,
};

export const packsData = createSlice({
  name: SliceNames.Packs,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getPacksAction.pending, (state) => {
        state.isPacksDownloading = true;
      })
      .addCase(getPacksAction.fulfilled, (state, action) => {
        state.packs = action.payload;
        state.isPacksDownloading = false;
      })
      .addCase(getPacksAction.rejected, (state) => {
        state.packs = [];
        state.isPacksDownloading = false;
      });
  }
});
