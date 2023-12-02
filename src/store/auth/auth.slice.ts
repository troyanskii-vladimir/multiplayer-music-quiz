import { createSlice } from '@reduxjs/toolkit';
import { AuthorizationStatus, SliceNames } from '../../config';
import { AuthProcess } from '../../types/state';
import { UserData } from '../../types/user-data';
import { getAuthDataAction, loginAction, registerAction } from '../api-action';


const initialState: AuthProcess = {
  authorizationStatus: AuthorizationStatus.Unknown,
  userData: {} as UserData,
};

export const authProcess = createSlice({
  name: SliceNames.Auth,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getAuthDataAction.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.userData = action.payload;
      })
      .addCase(getAuthDataAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.userData = {} as UserData;
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.userData = action.payload;
      })
      .addCase(loginAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.userData = {} as UserData;
      })
      .addCase(registerAction.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.userData = action.payload;
      })
      .addCase(registerAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.userData = {} as UserData;
      });
  }
});
