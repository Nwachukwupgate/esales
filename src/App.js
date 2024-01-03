import React from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom";
import Header from './components/layouts/header';
import IndexPage from './pages';
import Footer from './components/layouts/footer';
import AboutPage from './pages/about';

function App() {

  return (
    <div className="">
      <Header />     
      <Routes>
        <Route path="/" element={ <IndexPage /> } />
        <Route path="/about" element={ <AboutPage /> } />
        
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
