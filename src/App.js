import React from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom";
import Header from './components/layouts/header';
import IndexPage from './pages';
import Footer from './components/layouts/footer';
import AboutPage from './pages/about';
import WorkPage from './pages/work';
import ProcessPage from './pages/process';
import ContactPage from './pages/contact';
import ProjectPage from './pages/project';
import ProductCard from './components/cards/ProductCard';
import ProductsPage from './pages/products';
import DetailsPage from './pages/details';

function App() {

  return (
    <div className="">
      <Header />     
      <Routes>
        <Route path="/" element={ <IndexPage /> } />
        <Route path="/about" element={ <AboutPage /> } />
        <Route path="/work" element={ <WorkPage /> } />
        <Route path="/process" element={ <ProcessPage /> } /> 
        <Route path="/contact" element={ <ContactPage /> } /> 
        <Route path="/product" element={ <ProjectPage /> } /> 
        <Route path="/project" element={ <ProductsPage /> } />  
        <Route path="/detail/:id" element={ <DetailsPage /> } />  
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
