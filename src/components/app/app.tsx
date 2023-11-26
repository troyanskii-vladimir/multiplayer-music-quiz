import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from '../../pages/main-page';
import { HelmetProvider } from 'react-helmet-async';


function App(): JSX.Element {

  return (
    <BrowserRouter>
      <HelmetProvider>
        <Routes>

          <Route
            path='/'
            element={<MainPage />}
          />

        </Routes>
      </HelmetProvider>
    </BrowserRouter>
  );
}

export default App;
