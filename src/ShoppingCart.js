// ShoppingCart.js
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addToCart, removeFromCart } from './actions';

const ShoppingCart = ({ cart, addToCart, removeFromCart }) => {
  const [inputValue, setInputValue] = useState('');

  const handleAddToCart = () => {
    if (inputValue.trim() !== '') {
      addToCart(inputValue);
      setInputValue('');
    }
  };

  const handleRemoveFromCart = (item) => {
    removeFromCart(item);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <div className='add'><button onClick={handleAddToCart}>Add to Cart</button></div>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            <div className='div'>{item}</div>
           <span className='button'> <button className='remove' onClick={() => handleRemoveFromCart(item)}>Remove</button></span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cart: state.cart
});

const mapDispatchToProps = {
  addToCart,
  removeFromCart
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
