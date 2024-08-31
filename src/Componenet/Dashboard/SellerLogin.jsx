// src/SellerDashboard.js
import React from 'react';
import './SellerLogin.css';

const SellerDashboard = () => {
    return (
        <div className="dashboard-container">
            <h1 className="dashboard-title">Seller Dashboard</h1>
            <form className="product-form">
                <div className="form-group">
                    <label htmlFor="product-name">Product Name:</label>
                    <input type="text" id="product-name" name="product-name" required />
                </div>
                <div className="form-group">
                    <label htmlFor="price">Price:</label>
                    <input type="number" id="price" name="price" required />
                </div>
                <div className="form-group">
                    <label htmlFor="quantity">Minimum Bulk Quantity:</label>
                    <input type="number" id="quantity" name="quantity" required />
                </div>
                <div className="form-group">
                    <label htmlFor="category">Product Category:</label>
                    <select id="category" name="category" required>
                        <option value="construction">Construction</option>
                        <option value="electricity">Electricity</option>
                        <option value="plumbing">Plumbing</option>
                        <option value="hardware">Hardware</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="product-image">Upload Product Image:</label>
                    <input type="file" id="product-image" name="product-image" accept="image/*" required />
                </div>
                <button type="submit" className="submit-btn">Submit</button>
            </form>
        </div>
    );
}

export default SellerDashboard;
