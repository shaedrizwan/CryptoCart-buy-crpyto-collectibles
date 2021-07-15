import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from "react-router-dom";
import { CartProvider } from './CartContext';
import {WishlistProvider} from "./WishlistContext";
import {ProductProvider} from "./ProductContext";

ReactDOM.render(
  <React.StrictMode>
    <ProductProvider>
      <CartProvider>
        <WishlistProvider>
          <Router>
            <App />
          </Router>
        </WishlistProvider>
      </CartProvider>
    </ProductProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
