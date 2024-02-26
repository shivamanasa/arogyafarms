// ParentComponent.js
import React, { useState } from 'react';
import ItemsPage from './ItemsPage';
import CartPage from './CartPage';

function ParentComponent() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    const updatedCart = [...cart, { ...item, quantity: 1 }]; // Include quantity and unit information here
    setCart(updatedCart);
  };

  const removeFromCart = (itemId) => {
    const updatedCart = cart.filter((item) => item.id !== itemId);
    setCart(updatedCart);
  };

  return (
    <div>
      <ItemsPage addToCart={addToCart} />
      <CartPage cart={cart} removeFromCart={removeFromCart} />
    </div>
  );
}

export default ParentComponent;
