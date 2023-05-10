import React from 'react';
import ReactDOM from 'react-dom';
import { Global, css } from '@emotion/react';
import App from './App';

const globalStyles = css`
  body {
    font-family: 'Segoe UI', Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f2f2f2;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <Global styles={globalStyles} />
    <App />
    </React.StrictMode>,
  document.getElementById('root')
);
