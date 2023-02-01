import React from 'react';
import {
  BrowserRouter as Router, 
  Routes, 
  Route
} from "react-router-dom";
import './App.scss';
import 'bootstrap/dist/css/bootstrap.css';

//Products
import Products from './pages/backendAPI/Products';
import ProductsAdmin from './pages/backendAPI/ProductsAdmin';
import ProductsAdminCreate from './pages/backendAPI/ProductsAdminCreate';
import ProductsAdminEdit from './pages/backendAPI/ProductsAdminEdit';

import Navbar from './Layout/Navbar';
import Home from './pages/Home';
import NoMatch from './pages/NoMatch';

function App() {
  return (

    <Router>
      <Navbar/>
  

      <section>

        <Routes>
          <Route path="/" element={< Home />} />
          
          <Route path="/Products" element={<Products/>}/>
          <Route path="/ProductsAdmin" element={<ProductsAdmin/>}/>
          <Route path="/ProductsAdminCreate" element={<ProductsAdminCreate/>}/>
          <Route path="/ProductsAdminEdit/:id" element={<ProductsAdminEdit/>}/>

          <Route path="*" element={<NoMatch/>}/> 

        </Routes>

      </section>

    </Router>


  );
}

export default App;
