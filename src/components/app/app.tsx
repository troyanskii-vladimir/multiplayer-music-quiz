import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from '../../pages/main-page/main-page';
import LobbyPage from '../../pages/lobby-page/lobby-page';
import { HelmetProvider } from 'react-helmet-async';
import { AppRoute } from '../../config';
import { io } from 'socket.io-client';


const socket = io('http://localhost:3000/');


function App(): JSX.Element {

  return (
    <BrowserRouter>
      <HelmetProvider>
        <Routes>

          <Route
            path={AppRoute.Main}
            element={<MainPage socket={socket} />}
          />

          <Route
            path={AppRoute.Lobby}
            element={<LobbyPage />}
          />

        </Routes>
      </HelmetProvider>
    </BrowserRouter>
  );
}

export default App;
