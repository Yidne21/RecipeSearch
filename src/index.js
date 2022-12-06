import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free"
import App from './App';
import store from './redux/store';
import { Provider } from 'react-redux';

/**
 * This function render The App components by wraping it in the provider componet to allow 
 * access to the redux store.
 */

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

