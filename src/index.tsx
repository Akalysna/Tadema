import ReactDOM from 'react-dom/client';
import './index.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Coffee from './pages/Coffee/Coffee';
import { ReactLenis } from '@studio-freight/react-lenis';

const root = ReactDOM.createRoot(
  document.getElementById('root')
);
root.render(
  <ReactLenis root>

    <BrowserRouter basename={process.env.PUBLIC_URL}>

      <Routes>

        <Route path='/' element={<Coffee />} />

      </Routes>


    </BrowserRouter>
  </ReactLenis>
);
