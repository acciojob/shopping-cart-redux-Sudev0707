// src/components/App.js
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import ProductList from './ProductList';
import Cart from './Cart';
import Wishlist from './Wishlist';
import Coupon from './Coupon';
import './../styles/App.css';

const App = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <h1>Shopping Cart Application</h1>
        <div className="container">
          <div className="products-section">
            <ProductList />
          </div>
          <div className="cart-section">
            <Cart />
            <Coupon />
            <Wishlist />
          </div>
        </div>
      </div>
    </Provider>
  );
};

export default App;