import React, { useState } from 'react';
import './PYLModal.css';

function PYLModal({ isOpen, onClose, product, categoryImage }) {
    const [mobileNumber, setMobileNumber] = useState('');
    const [serviceName, setServiceName] = useState(product ? product.title : '');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Service Name:', serviceName);
        console.log('Mobile Number:', mobileNumber);
    };

    if (!isOpen) return null;

    return (
        <div className="PYLmodal-overlay">
            <div className="PYLmodal-container">
                <button className="PYLclose-button" onClick={onClose}>X</button>
                <div className="PYLmodal-content">
                    <div className="PYLmodal-left">
                        <img src={categoryImage} alt={product ? product.title : ''} className="PYLmodal-image" />
                        <h2>{product ? product.title : 'Category Title'}</h2>
                        <p>Explore our services and get the best quotes for your needs!</p>
                    </div>

                    {/* Right Side: Form */}
                    <div className="PYLmodal-right">
                        <h3>Looking to buy something?</h3>
                        <p>Tell us your requirement and get free quotes from multiple sellers</p>
                        <form onSubmit={handleSubmit}>
                            <div className="PYLform-group">
                                <label>Enter Product/Service name</label>
                                <input 
                                    type="text" 
                                    value={serviceName}
                                    onChange={(e) => setServiceName(e.target.value)} 
                                    placeholder="Enter service name" 
                                    className="PYLform-input" 
                                />
                            </div>
                            <div className="PYLform-group">
                                <label>Mobile Number</label>
                                <div className="PYLform-phone">
                                    <span>+91</span>
                                    <input 
                                        type="text" 
                                        value={mobileNumber}
                                        onChange={(e) => setMobileNumber(e.target.value)} 
                                        placeholder="Enter your mobile" 
                                        className="PYLform-input" 
                                    />
                                </div>
                            </div>
                            <button type="submit" className="PYLform-button">Go ➤</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PYLModal;
