import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import App from './App';
import Home from './Home';
import Product from './Product';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='' element={<App/>}> 
        <Route index element={<Home/>}></Route>
        <Route path='product' element={<Product/>}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
);
