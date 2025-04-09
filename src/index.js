import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './jsx/Home.jsx'; 
import Cv from './jsx/Cv.jsx';

const Index = () => {
  const [count, setCount] = useState("testing count props");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home count={count} />} />
        <Route path="/cv" element={<Cv/>} />
      </Routes>
    </BrowserRouter>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Index />);