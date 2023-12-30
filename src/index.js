import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./sass/index.scss";
import { Provider } from 'react-redux';
import store from './store'

import Error from './pages/error/error';
import Home from './pages/home/home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route index element={<Home />} /> 
          <Route path="/Home" element={<Home />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);