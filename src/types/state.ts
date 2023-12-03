import { store } from '../store';
import { Pack } from './pack';
import { UserData } from './user-data';


export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AuthProcess = {
  authorizationStatus: string;
  userData: UserData;
}


export type PacksData = {
  packs: Pack[];
  isPacksDownloading: boolean;
}

