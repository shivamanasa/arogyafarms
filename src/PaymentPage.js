// PaymentPage.js

import React, { useState } from 'react';
import './PaymentPage.css';

function PaymentPage({ cartItems }) {
  // Constants for delivery charges and free delivery threshold
  const deliveryCharges = 79;
  const freeDeliveryThreshold = 499;

  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => total + parseFloat(item.price), 0);
  const totalPriceWithDelivery = totalPrice + (totalPrice < freeDeliveryThreshold ? deliveryCharges : 0);

  // State variables for form inputs and validation
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [pincode, setPincode] = useState('');

  // State variables for form validation
  const [isFirstNameValid, setIsFirstNameValid] = useState(false);
  const [isLastNameValid, setIsLastNameValid] = useState(false);
  const [isMobileValid, setIsMobileValid] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isAddressValid, setIsAddressValid] = useState(false);
  const [isPincodeValid, setIsPincodeValid] = useState(false);

  // Function to check if all form fields are filled
  const isFormFilled = () => {
    return (
      firstName.trim() !== '' &&
      lastName.trim() !== '' &&
      mobile.trim() !== '' &&
      email.trim() !== '' &&
      address.trim() !== '' &&
      pincode.trim() !== ''
    );
  };

  // Function to validate email
  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  // Function to validate mobile number
  const validateMobile = (mobile) => {
    const mobileRegex = /^[0-9]{10}$/;
    return mobileRegex.test(mobile);
  };

  // Function to handle input change for first name
  const handleFirstNameChange = (value) => {
    setFirstName(value);
    setIsFirstNameValid(value.trim() !== '');
  };

  // Function to handle input change for last name
  const handleLastNameChange = (value) => {
    setLastName(value);
    setIsLastNameValid(value.trim() !== '');
  };

  // Function to handle input change for mobile number
  const handleMobileChange = (value) => {
    setMobile(value);
    setIsMobileValid(validateMobile(value.trim()));
  };

  // Function to handle input change for email
  const handleEmailChange = (value) => {
    setEmail(value);
    setIsEmailValid(validateEmail(value.trim()));
  };

  // Function to handle input change for address
  const handleAddressChange = (value) => {
    setAddress(value);
    setIsAddressValid(value.trim() !== '');
  };

  // Function to handle input change for pincode
  const handlePincodeChange = (value) => {
    setPincode(value);
    setIsPincodeValid(value.trim().length === 6 && !isNaN(value.trim()));
  };

  // Function to handle form submission
  const handlePayment = () => {
    // If form is filled and all fields are valid, proceed with payment
    if (isFormFilled() && isFirstNameValid && isLastNameValid && isMobileValid && isEmailValid && isAddressValid && isPincodeValid) {
      // Implement your payment processing logic here
      alert('Payment successful!');
    }
  };

  // Function to display free delivery message if applicable
  const renderFreeDeliveryMessage = () => {
    if (totalPrice < freeDeliveryThreshold) {
      const remainingAmount = freeDeliveryThreshold - totalPrice;
      return (
        <p>You're only ₹{remainingAmount} away from free delivery. <strong>Add more items</strong> to qualify for free delivery!</p>
      );
    } else {
      return <p>Congratulations! You qualify for free delivery on this order.</p>;
    }
  };

  return (
    <div className="payment-container">
      <div className="customer-details">
        <h2>Customer Details</h2>
        <form>
          <div className={`form-group ${isFirstNameValid ? 'valid' : ''}`}>
            <label htmlFor="firstName">First Name *</label>
            <input type="text" id="firstName" name="firstName" value={firstName} onChange={(e) => handleFirstNameChange(e.target.value)} />
          </div>
          <div className={`form-group ${isLastNameValid ? 'valid' : ''}`}>
            <label htmlFor="lastName">Last Name *</label>
            <input type="text" id="lastName" name="lastName" value={lastName} onChange={(e) => handleLastNameChange(e.target.value)} />
          </div>
          <div className={`form-group ${isMobileValid ? 'valid' : ''}`}>
            <label htmlFor="mobile">Mobile Number *</label>
            <input type="tel" id="mobile" name="mobile" value={mobile} onChange={(e) => handleMobileChange(e.target.value)} />
          </div>
          <div className={`form-group ${isEmailValid ? 'valid' : ''}`}>
            <label htmlFor="email">Email Address *</label>
            <input type="email" id="email" name="email" value={email} onChange={(e) => handleEmailChange(e.target.value)} />
          </div>
          <div className={`form-group ${isAddressValid ? 'valid' : ''}`}>
            <label htmlFor="address">Address *</label>
            <textarea id="address" name="address" rows="4" value={address} onChange={(e) => handleAddressChange(e.target.value)}></textarea>
          </div>
          <div className={`form-group ${isPincodeValid ? 'valid' : ''}`}>
            <label htmlFor="pincode">Pincode *</label>
            <input type="text" id="pincode" name="pincode" value={pincode} onChange={(e) => handlePincodeChange(e.target.value)} />
          </div>
        </form>
      </div>
      <div className="order-summary">
        <h2>Order Summary</h2>
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>₹{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {totalPrice < freeDeliveryThreshold && (
          <p>Delivery Charges: ₹{deliveryCharges}</p>
        )}
        {renderFreeDeliveryMessage()}
        <p>Total Price: ₹{totalPriceWithDelivery}</p>
      </div>
      <div className="payment-options">
        <h2>Payment Options</h2>
        <div className="payment-methods">
          <button disabled={!isFormFilled()} onClick={handlePayment}>Pay Now</button>
        </div>
      </div>
    </div>
  );
}

export default PaymentPage;
