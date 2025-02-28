import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import reportWebVitals from './reportWebVitals';
import { HashRouter, Route, Routes } from 'react-router-dom';

import Home from "./js/Home";
import First from "./js/First";
import Kittiz from "./js/Kittiz";
import Player from './js/Player';
import Game from "./js/Game";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter basename='First'>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/First" element={<First />} />
      <Route path="/First/Kittiz" element={<Kittiz />} />
      <Route path="/First/Player" element={<Player />} />
      <Route path="/First/Game" element={<Game />} />
    </Routes>
  </HashRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
