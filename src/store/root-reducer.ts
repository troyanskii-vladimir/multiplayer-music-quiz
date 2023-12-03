import { combineReducers } from '@reduxjs/toolkit';
import { SliceNames } from '../config';
import { authProcess } from './auth/auth.slice';
import { packsData } from './packs/packs.slice';

export const rootReducer = combineReducers({
  [SliceNames.Auth]: authProcess.reducer,
  [SliceNames.Packs]: packsData.reducer,
});
