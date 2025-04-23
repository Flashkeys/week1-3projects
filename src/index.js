import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router";
import Home from './jsx/Home.jsx'; 
import Cv from './jsx/Cv.jsx';
import Cake from './jsx/Cake/Cake.jsx';
import CakeDetails from './jsx/Cake/CakeDetails.jsx';
import NotFound from './jsx/NotFound.jsx';
import CakeAboutUs from './jsx/Cake/CakeAboutUs.jsx';
import CakeOrder from './jsx/Cake/CakeOrder.jsx';
import CakeCreateUser from './jsx/Cake/CakeCreateUser.jsx';

const Index = () => {
  const [count, setCount] = useState("testing count props");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home count={count} />} />
        <Route path="/cv" element={<Cv/>} />
        <Route path="/cake" element={<Cake/>} />
        <Route path="/cake/:cakeId" element={<CakeDetails />} />
        <Route path="/cakeAboutUs" element={<CakeAboutUs/>} />
        <Route path="/cakeOrder" element={<CakeOrder/>} />
        <Route path="/cakeCreateUser" element={<CakeCreateUser/>} />
        <Route path="/*" element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Index />);

/*
yes exactly, presentation day is Week-18 (2025-04-30)
*/