// PopUp.js
import React from 'react';

const PopUp = ({ item, onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup">
        <span className="close-btn" onClick={onClose}>X</span>
        <img src={item.image} alt={item.name} />
        <p>{item.name}</p>
        <p>Price: ₹{item.price}</p>
        <p>Rating: {item.rating}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default PopUp;
