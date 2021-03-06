import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from './components/admin';
import Home from './components/home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="admin/*" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );

}

export default App;
