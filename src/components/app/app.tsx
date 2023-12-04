import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from '../../pages/main-page/main-page';
import LobbyPage from '../../pages/lobby-page/lobby-page';
import { HelmetProvider } from 'react-helmet-async';
import { AppRoute, AuthorizationStatus } from '../../config';
import { io } from 'socket.io-client';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getAuthorizationStatus } from '../../store/auth/auth.selectors';
import { useEffect } from 'react';
import { getAuthDataAction } from '../../store/api-action';
import GamePage from '../../pages/game-page/game-page';


const socket = io('http://localhost:3000/');


function App(): JSX.Element {
  const dispath = useAppDispatch();

  const authorizationStatus = useAppSelector(getAuthorizationStatus) as AuthorizationStatus;

  useEffect(() => {
    if (authorizationStatus === AuthorizationStatus.Unknown) {
      dispath(getAuthDataAction());
    }
  }, [dispath])

  return (
    <BrowserRouter>
      <HelmetProvider>
        <Routes>

          <Route
            path={AppRoute.Main}
            element={<MainPage authorizationStatus={authorizationStatus} socket={socket} />}
          />

          <Route
            path={AppRoute.Lobby}
            element={<LobbyPage socket={socket} />}
          />

          <Route
            path={AppRoute.Game}
            element={<GamePage socket={socket} />}
          />

        </Routes>
      </HelmetProvider>
    </BrowserRouter>
  );
}

export default App;
