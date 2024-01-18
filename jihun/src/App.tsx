import React from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom";
import Order from './pages/Order';
import Home from './pages/Home';
function App() {
  return (
    
    <div className="App">
      <Routes>
        
        <Route path="/" element={<Home/>}/>
        <Route path="/order" element={<Order/>}/>
      </Routes>

    </div>
  );
}

export default App;
