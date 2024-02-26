// Notification.js
import React from 'react';
import {Link} from 'react-router-dom';
import './Notification.css';

const Notification = ({ message, onClose, onViewCart }) => {
  return (
    <div className="notification">
      <p>{message}</p>
      <button onClick={onClose}>Close</button>
      <button><Link to="/cart" style={{textDecoration:'none', color:'inherit'}}>View Cart</Link></button>
    </div>
  );
};

export default Notification;
