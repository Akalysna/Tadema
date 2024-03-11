import ReactDOM from 'react-dom/client';
import './index.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Coffee from './pages/Coffee/Coffee';

const root = ReactDOM.createRoot(
  document.getElementById('root')
);
root.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>

    <Routes>

      <Route path='/' element={<Coffee/>}/>

    </Routes>


  </BrowserRouter>
);
