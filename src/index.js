import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ResetStyle, GlobalStyles } from './global-styles';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <ResetStyle />
    <GlobalStyles />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
