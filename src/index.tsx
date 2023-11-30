import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Coffee from './pages/Coffee/Coffee';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>

    <Routes>

      <Route path='/' element={<Coffee/>}/>

    </Routes>


  </BrowserRouter>
);