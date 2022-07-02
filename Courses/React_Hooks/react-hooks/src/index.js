import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const people = ["Devin", "Danielle", "Douglas"];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App name="Devin" />
  </React.StrictMode>
);


