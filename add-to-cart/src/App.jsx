// src/App.js
import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './store';
import ProductList from './productList';
import Cart from './cart'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ProductList />
        <Cart/>
      </div>
    </Provider>
  );
}

export default App;
