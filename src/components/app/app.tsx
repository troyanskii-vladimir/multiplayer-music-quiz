import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from '../../pages/main-page/main-page';
import LobbyPage from '../../pages/lobby-page/lobby-page';
import { HelmetProvider } from 'react-helmet-async';
import { AppRoute } from '../../config';


function App(): JSX.Element {

  return (
    <BrowserRouter>
      <HelmetProvider>
        <Routes>

          <Route
            path={AppRoute.Main}
            element={<MainPage />}
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
