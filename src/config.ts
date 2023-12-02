export enum AppRoute {
  Main = '/',
  Lobby = '/lobby',
  Profile = '/profile',
  Game = '/game',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum SliceNames {
  Auth = 'Auth',
}

export enum APIRoute {
  Register = '/auth/register',
  Login = '/auth/login',
  Me = '/auth/me',
}
