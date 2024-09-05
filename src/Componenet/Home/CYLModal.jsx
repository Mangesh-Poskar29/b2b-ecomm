import React from 'react';
import './CYLModal.css';

const CYLModal = ({ isOpen, onClose, product }) => {
    if (!isOpen || !product) return null;

    return (
        <div className="CYLmodalBackground">
            <div className="CYLmodalContainer">
                <button className="CYLcloseButton" onClick={onClose}>X</button>
                <div className="CYLmodalContent">
                    <div className="CYLmodalLeft">
                        <img src={product.image} alt={product.title} className="CYLmodalImage" />
                        <p className="CYLmodalSellerInfo">
                            <strong>{product.title}</strong><br />
                            {product.price}<br />
                            Sold By - {product.seller}
                        </p>
                    </div>
                    <div className="CYLmodalRight">
                        <h2 className="CYLmodalTitle">Contact Seller</h2>
                        <p className="CYLmodalSubtitle">by adding a few details of your requirement</p>

                        <div className="CYLformGroup">
                            <label htmlFor="quantity" className="CYLformLabel">Quantity</label>
                            <input type="number" id="quantity" className="CYLformInput" placeholder="Quantity" />
                            <div className="CYLtoggleUnits">
                                <button className="CYLtoggleButton active">Piece</button>
                            </div>
                        </div>

                        <div className="CYLformGroup">
                            <label htmlFor="type" className="CYLformLabel">Type</label>
                            <select id="type" className="CYLformSelect">
                                <option value="">Select a Value</option>
                                <option value="option1">Option 1</option>
                                <option value="option2">Option 2</option>
                            </select>
                        </div>

                        <div className="CYLformGroup">
                            <label htmlFor="requirementDetails" className="CYLformLabel">Requirement Details</label>
                            <textarea id="requirementDetails" className="CYLformTextarea" placeholder="Additional details about your requirement..."></textarea>
                        </div>

                        <button className="CYLsubmitButton">Next</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CYLModal;
