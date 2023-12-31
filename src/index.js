import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./sass/index.scss";

import Error from './pages/error/error';
import Home from './pages/home/home';
import Legal from './components/legal/legal';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Router>
        <Routes>
          <Route index element={<Home />} /> 
          <Route path="/Home" element={<Home />} />
          <Route path="/Legal" element={<Legal />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
  </React.StrictMode>
);