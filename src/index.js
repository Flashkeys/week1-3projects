import React from 'react';
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
import PortfolioHome from './jsx/Portfolio/PortfolioHome.jsx';
import PortfolioAbout from './jsx/Portfolio/PortfolioAbout.jsx';
import PortfolioServices from './jsx/Portfolio/PortfolioServices.jsx';
import PortfolioWorks from './jsx/Portfolio/PortfolioWorks.jsx';
import PortfolioContact from './jsx/Portfolio/PortfolioContact.jsx';

const Index = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/cv" element={<Cv/>} />

        <Route path="/cake" element={<Cake/>} />
        {/* add subpage for each cake so you can view additional info */}
        <Route path="/cake/:cakeId" element={<CakeDetails />} />
        <Route path="/cakeAboutUs" element={<CakeAboutUs/>} />
        <Route path="/cakeOrder" element={<CakeOrder/>} />
        <Route path="/cakeCreateUser" element={<CakeCreateUser/>} />

        <Route path="/portfolioHome" element={<PortfolioHome/>} />
        <Route path="/portfolioAbout" element={<PortfolioAbout/>} />
        <Route path="/portfolioServices" element={<PortfolioServices/>} />
        <Route path="/portfolioWorks" element={<PortfolioWorks/>} />
        <Route path="/portfolioContact" element={<PortfolioContact/>} />

        <Route path="/*" element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Index />);

// readme

// responsiv

// publish