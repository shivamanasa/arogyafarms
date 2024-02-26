// CartPage.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './CartPage.css';

function CartPage({ cart, removeFromCart }) {
  const [quantities, setQuantities] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    // Calculate total price whenever quantities or cart changes
    let price = 0;
    cart.forEach(item => {
      const quantity = quantities[item.id] || 1;
      price += item.price * quantity;
    });
    setTotalPrice(price);
  }, [cart, quantities]);

  const handleChangeQuantity = (itemId, quantity) => {
    setQuantities({ ...quantities, [itemId]: parseFloat(quantity) });
  };

  const handleFinalBuy = () => {
    // Pass quantities along with cart items to PaymentPage
    navigate('/payment', { state: { cart, quantities } });
  };

  return (
    <div>
      <div>
  <h2 style={{ fontSize: '1.3rem', textAlign: 'center' }}>
    "We exclusively accommodate orders for a fixed quantity of items. Should you require additional quantities, kindly reach out to us directly at{' '}
    <a href="tel:9063485890" style={{ color: 'green', textDecoration: 'underline' }}>9063485890</a>
    ."
  </h2>
</div>

      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          <ul className="cart-items">
            {cart.map((item) => (
              <li key={item.id} className="cart-card">
                <img src={item.image} alt={item.name} className="cart-image" />
                <div className="cart-item-info">
                  <p>{item.name}</p>
                  <p>Price: ₹{item.price}/{item.unit}</p> {/* Display unit dynamically */}
                </div>
                <div className="cart-actions">
                  <button onClick={() => removeFromCart(item.id)}>Remove</button>
                  <select 
                    value={quantities[item.id] || 1} 
                    onChange={(e) => handleChangeQuantity(item.id, e.target.value)} 
                    disabled={quantities[item.id] === undefined || item.unit === 'Liter'}>
                    {item.unit === 'Liter' ? (
                      <>
                        <option value={0.5}>500ml</option>
                        <option value={1}>1{item.unit}</option>
                        <option value={2}>2{item.unit}</option>
                      </>
                    ) : (
                      <>
                        <option value={0.5}>500g</option>
                        <option value={1}>1{item.unit}</option>
                        <option value={2}>2{item.unit}</option>
                      </>
                    )}
                  </select>
                </div>
              </li>
            ))}
          </ul>
          <p className="cart-total">Total Price: ₹{totalPrice.toFixed(2)}</p>
          {totalPrice < 499 && (
            <p style={{color:'red',textAlign:'center'}}>You're ₹{499 - totalPrice} away from free delivery. Add more items to qualify for free delivery!</p>
          )}
          <button className="final-buy-button" onClick={handleFinalBuy}>Final Buy</button>
        </div>
      )}
    </div>
  );
}

export default CartPage;
