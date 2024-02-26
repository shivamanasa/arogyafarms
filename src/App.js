// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ItemsPage from './ItemsPage';
import CartPage from './CartPage';
import Navbar from './Navbar';
import About from './About';
import Contact from './Contact';

import PaymentPage from './PaymentPage';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (itemId) => {
    setCart(cart.filter((item) => item.id !== itemId));
  };

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
         
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route
            path="/"
            element={<ItemsPage addToCart={addToCart} />}
          />
          <Route
            path="/cart"
            element={<CartPage cart={cart} removeFromCart={removeFromCart} />}
          />
          <Route
            path="/payment"
            element={<PaymentPage cartItems={cart} />}
          />
         
      
         <Route path="/payment" render={(props) => <PaymentPage {...props} />} />
     
    
        </Routes>
      </div>
    </Router>
  );
}

export default App;
