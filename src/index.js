import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Card from './commponent/Card'
import { Link, Route, BrowserRouter, Routes } from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './stateManagment/store/store'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<App/> } />
        <Route path="/card" element={<Card />} />
      </Routes>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
