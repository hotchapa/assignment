import React from 'react';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from "recoil";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from './styles/global-style';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <BrowserRouter>
        <GlobalStyle/>
          <App />
      </BrowserRouter>
    </RecoilRoot>
  </React.StrictMode>
);


reportWebVitals();
