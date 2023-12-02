import { store } from '../store';
import { UserData } from './user-data';


export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AuthProcess = {
  authorizationStatus: string;
  userData: UserData;
}

