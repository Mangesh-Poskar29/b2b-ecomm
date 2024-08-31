import React, { useState } from "react";
import "./ProductModal.css";

const ProductModal = ({ product, closeModal }) => {
  const [showBulkModal, setShowBulkModal] = useState(false);

  if (!product) return null;

  const handleBulkClick = () => {
    setShowBulkModal(true);
  };

  const handleCloseBulkModal = (e) => {
    e.stopPropagation();
    setShowBulkModal(false);
  };

  return (
    <div className="SModalOverlay" onClick={closeModal}>
      <div
        className="SProductModalContainer"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="SCloseButton" onClick={closeModal}>
          X
        </button>
        <div className="SProductImage">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="SProductDetails">
          <h2 className="SProductTitle">{product.name}</h2>
          <p className="SProductPrice">
            {product.price}{" "}
            <span className="SOriginalPrice">{product.oldPrice}</span>{" "}
            <span className="SDiscount">{product.discount}</span>
          </p>
          <div className="SQuantitySection">
            <label>Quantity:</label>
            <input
              type="number"
              min="1"
              defaultValue="1"
              className="SQuantityInput"
            />
          </div>
          <div className="SButtonSection">
            <button className="SBulkOrderButton" onClick={handleBulkClick}>
              Bulk Order
            </button>
            <button className="SBuyNowButton">Buy Now</button>
          </div>
          <div className="SSupplierDetails">
            <h4 className="SSupplierTitle">{product.supplier.name}</h4>
            <p className="SSupplierLocation">{product.supplier.location}</p>
            <p className="SVerifiedSupplier">
              {product.supplier.verified ? "Verified Supplier" : ""}
            </p>
          </div>
          <div className="SAdditionalDetails">
            <h4>Details</h4>
            <p>
              <strong>Size:</strong> {product.additionalDetails.size}
            </p>
            <p>
              <strong>Type:</strong> {product.additionalDetails.type}
            </p>
            <p>
              <strong>Color:</strong> {product.additionalDetails.color}
            </p>
            <p>
              <strong>Work:</strong> {product.additionalDetails.work}
            </p>
            <p>
              <strong>Dispatch:</strong> {product.additionalDetails.dispatch}
            </p>
            <p>
              <strong>Weight:</strong> {product.additionalDetails.weight}
            </p>
          </div>
        </div>
      </div>
      {showBulkModal && (
        <div className="modal-overlay" onClick={handleCloseBulkModal}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close-btn" onClick={handleCloseBulkModal}>
              &times;
            </button>
            <h2>Looking to buy something?</h2>
            <p>
              Tell us your requirement and get free quotes from multiple sellers
            </p>
            <input type="text" placeholder="Enter Product / Service name" />
            <input type="text" placeholder="Enter your mobile number" />
            <p>
              Your country is <strong>India</strong>
            </p>
            <button className="go-btn">Go</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductModal;
