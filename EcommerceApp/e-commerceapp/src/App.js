import './App.css';
import React from 'react';
import Home from './page/Home';
import { Routes, Route, Link, Navigate} from "react-router-dom";
import ProductList from './page/ProductList';
import Product from './page/Product'
import Register from './page/Register';
import Login from './page/Login';
import Cart from './page/Cart';
function App() {
  const user = true;
 
  return (
    <div className="app">
      <Routes>
        <Route  path="/" element={<Home />} />
        <Route  path="/products/:category" element={<ProductList />} />
        <Route  path="/product/:id" element={<Product/>} />
        <Route  path="/register" element={user ? <Navigate replace to="/" /> : <Register/>} />
        <Route  path="/login"  element={user ? <Navigate replace to="/" /> : <Login/>}/>
        <Route  path="/cart" element={<Cart/>} />
      </Routes>
    </div>
  );
}

export default App;
