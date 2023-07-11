import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//product
import ProductProvider from './context/ProductContext';
//cart
import CartProvider from './context/cartContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<ProductProvider>
<CartProvider>
<App />
</CartProvider>
</ProductProvider>
   

);


