
// App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import ShoppingCart from './ShoppingCart';
import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Shopping Cart</h1>
        <ShoppingCart />
      </div>
    </Provider>
  );
};

export default App;
