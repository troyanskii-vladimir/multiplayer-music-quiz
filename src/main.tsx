import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app.tsx';
import './main.scss';
import { Provider } from 'react-redux';
import { store } from './store/index.ts';
import { ToastContainer } from 'react-toastify';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer />
      <App />
    </Provider>
  </React.StrictMode>,
)
