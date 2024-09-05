import React from "react";
import "./CartSideBar.css";
import product1 from '../../assets/paracetamol.jpg';
import product2 from '../../assets/lightbulb.jpg'
import product3 from '../../assets/fan.jpg';

const CartSideBar = ({ cartItems, isOpen, toggleCart }) => {
  const sampleCartItems = [
    {
      id: 1,
      name: 'Paracetamol',
      price: 20.00,
      quantity: 2,
      image: product1
    },
    {
      id: 2,
      name: 'Light Bulb',
      price: 50.00,
      quantity: 1,
      image: product2
    },
    {
      id: 3,
      name: 'Electric Fan',
      price: 1500.00,
      quantity: 1,
      image: product3
    }
  ];

  const calculateTotalPrice = () => {
    return sampleCartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className={`CcartSidebar ${isOpen ? "Copen" : ""}`}>
      <div className="CcartHeader">
        <h2>Your Cart</h2>
        <button className="CcloseButton" onClick={toggleCart}>
          &times;
        </button>
      </div>
      <div className="CcartItems">
        {sampleCartItems.length > 0 ? (
          sampleCartItems.map((item, index) => (
            <div className="CcartItem" key={index}>
              <img src={item.image} alt={item.name} className="CcartItemImage" />
              <div className="CcartItemDetails">
                <p className="CcartItemName">{item.name}</p>
                <p className="CcartItemPrice">₹{item.price} x {item.quantity}</p>
              </div>
            </div>
          ))
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
      <div className="CcartTotal">
        <h3>Total: ₹{calculateTotalPrice().toFixed(2)}</h3>
      </div>
      <div className="CdeliveryAddress">
        <h4>Delivery Address</h4>
        <textarea
          className="CaddressInput"
          placeholder="Enter your delivery address here..."
        />
      </div>
      <div className="CpaymentMethod">
        <label htmlFor="paymentMethod">Payment Method:</label>
        <select id="paymentMethod" className="CpaymentSelect">
          <option value="creditCard">Credit Card</option>
          <option value="paypal">PayPal</option>
          <option value="cashOnDelivery">Cash on Delivery</option>
        </select>
      </div>
      <button className="CproceedButton">Proceed to Payment</button>
    </div>
  );
};

export default CartSideBar;
