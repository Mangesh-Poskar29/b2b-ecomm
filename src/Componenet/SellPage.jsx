import React from 'react';
import './SellPage.css';
import logo from '../icons/logo.jpg'; 
import { FaChartBar, FaRupeeSign, FaBox, FaPen, FaMapMarkerAlt, FaPlus } from 'react-icons/fa';

const SellPage = () => {
    return (
        <div className="sell-page">
            <header className="header">
                <img src={logo} alt="IndiaMART Logo" className="logo" />
                <div className="header-content">
                    <h1>Sell for free on India’s largest online B2B marketplace</h1>
                    <div className="stats">
                        <div className="stat">
                            <FaChartBar className="icon" />
                            <span>18 crore+</span>
                            <p>Buyers</p>
                        </div>
                        <div className="stat">
                            <FaRupeeSign className="icon" />
                            <span>75 lakh+</span>
                            <p>Suppliers</p>
                        </div>
                        <div className="stat">
                            <FaBox className="icon" />
                            <span>10 crore+</span>
                            <p>Products & Services</p>
                        </div>
                    </div>
                </div>
                <div className="registration">
                    <h2>Free Registration/Sign In</h2>
                    <div className="register-input">
                        <select>
                            <option value="+91">+91</option>
                        </select>
                        <input type="text" placeholder="Enter 10 digit mobile number" />
                    </div>
                    <button className="start-selling">Start Selling</button>
                </div>
            </header>
            <section className="steps">
                <h2>Get a free listing in 3 simple steps:</h2>
                <ol>
                    <li>
                        <FaPen className="icon" />
                        <h3>Create Account</h3>
                        <p>Add your name and phone number to get started</p>
                    </li>
                    <li>
                        <FaMapMarkerAlt className="icon" />
                        <h3>Add Business</h3>
                        <p>Add name, address & e-mail of your company, store/business</p>
                    </li>
                    <li>
                        <FaPlus className="icon" />
                        <h3>Add Products/Services</h3>
                        <p>Minimum 3 products/services needed for your free listing page</p>
                    </li>
                </ol>
            </section>
        </div>
    );
}

export default SellPage;
