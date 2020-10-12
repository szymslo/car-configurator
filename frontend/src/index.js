import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import GlobalStateProvider from "./store/CarStateProvider";

ReactDOM.render(
  <React.StrictMode>
      <GlobalStateProvider>
        <App/>
    </GlobalStateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

