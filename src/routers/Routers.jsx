import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from '../pages/Home';
import Login from '../pages/Login';

function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} exact />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export {
  Routers
}