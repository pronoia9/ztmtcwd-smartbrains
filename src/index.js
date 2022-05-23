import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.scss';
import App from './components/App';
import Preloader from './components/Preloader/Preloader';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 // <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Preloader />
      <App />
    </BrowserRouter>
 // </React.StrictMode>
);
