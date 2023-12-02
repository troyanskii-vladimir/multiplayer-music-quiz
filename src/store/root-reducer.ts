import { combineReducers } from '@reduxjs/toolkit';
import { SliceNames } from '../config';
import { authProcess } from './auth/auth.slice';

export const rootReducer = combineReducers({
  [SliceNames.Auth]: authProcess.reducer,
});
