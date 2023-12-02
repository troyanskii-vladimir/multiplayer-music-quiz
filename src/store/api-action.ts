import { createAsyncThunk } from '@reduxjs/toolkit';
import { UserData } from '../types/user-data';
import { AuthData } from '../types/auth-data';
import { AppDispatch, State } from '../types/state';
import { AxiosInstance } from 'axios';
import { APIRoute } from '../config';
import { saveToken } from '../services/token';


export const getAuthDataAction = createAsyncThunk<UserData, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'getAuthData',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<UserData>(APIRoute.Me);
    return data;
  }
);


export const loginAction = createAsyncThunk<UserData, Partial<AuthData>, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'login',
  async({login: userName, password}, {extra: api}) => {
    const {data} = await api.post<UserData>(APIRoute.Login, {userName, password});
    saveToken(data.token);
    return data;
  }
);


export const registerAction = createAsyncThunk<UserData, Partial<AuthData>, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'register',
  async({login: userName, password}, {extra: api}) => {
    const {data} = await api.post<UserData>(APIRoute.Register, {userName, password, type: 'consumer'});
    saveToken(data.token);
    return data;
  }
);
