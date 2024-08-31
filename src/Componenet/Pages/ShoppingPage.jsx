import React, { useState } from "react";
import "./ShoppingPage.css";
import LadiesWearIcon from "../../assets/ladies-wear.png";
import MenWearIcon from "../../assets/men-wear.png";
import FootwearIcon from "../../assets/footwear.png";
import BeautyProductsIcon from "../../assets/beauty-products.png";
import PetFoodIcon from "../../assets/pet-food.png";
import MobileAccessoriesIcon from "../../assets/mobile-accessories.png";
import CleaningSuppliesIcon from "../../assets/cleaning-supplies.png";
import HomeDecorIcon from "../../assets/home-decor.png";
import JewelleryIcon from "../../assets/jewellery.png";
import LightIcon from "../../assets/light.png";
import Symbol1 from "../../assets/gift-items.jpg";
import Symbol2 from "../../assets/ethnic-wear.jpg";
import Symbol3 from "../../assets/jewellery.jpg";
import Symbol4 from "../../assets/decorative-items.jpg";
import { Link } from "react-router-dom";

function ShoppingPage() {
  const [showModal, setShowModal] = useState(false);

  const handleBulkClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="shopping-page">
      <header className="Sheader">
        <button className="bulk-btn" onClick={handleBulkClick}>
          Bulk Requirement
        </button>
      </header>

      <div className="category-section">
        <div className="category-item">
          <Link to="/shopping/women-wear">
            <img src={LadiesWearIcon} alt="Ladies Wear" />
            <p>Ladies Wear</p>
          </Link>
        </div>
        <div className="category-item">
          <Link to="/shopping/men-wear">
            <img src={MenWearIcon} alt="Men Wear" />
            <p>Men Wear</p>
          </Link>
        </div>
        <div className="category-item">
          <Link to="/shopping/foot-wear">
            <img src={FootwearIcon} alt="Footwear" />
            <p>Footwear</p>
          </Link>
        </div>
        <div className="category-item">
          <Link to="/shopping/beauty">
            <img src={BeautyProductsIcon} alt="Beauty Products" />
            <p>Beauty Products</p>
          </Link>
        </div>
        <div className="category-item">
          <Link to="/shopping/pet-food">
            <img src={PetFoodIcon} alt="Pet Food" />
            <p>Pet Food</p>
          </Link>
        </div>
        <div className="category-item">
          <Link to="/shopping/mobile-accessories">
            <img src={MobileAccessoriesIcon} alt="Mobile Accessories" />
            <p>Mobile Accessories</p>
          </Link>
        </div>
        <div className="category-item">
          <Link to="/shopping/cleaning-supply">
            <img src={CleaningSuppliesIcon} alt="Cleaning Supplies" />
            <p>Cleaning Supplies</p>
          </Link>
        </div>
        <div className="category-item">
          <Link to="/shopping/home-decor">
            <img src={HomeDecorIcon} alt="Home Decor" />
            <p>Home Decor</p>
          </Link>
        </div>
        <div className="category-item">
          <Link to="/shopping/artificial-jewel">
            <img src={JewelleryIcon} alt="Jewellery" />
            <p>Jewellery</p>
          </Link>
        </div>
        <div className="category-item">
          <Link to="/shopping/light">
            <img src={LightIcon} alt="Light" />
            <p>Light</p>
          </Link>
        </div>
      </div>

      <div className="hero-section">
        <h2>Explore Top Brands for the Season</h2>
        <div className="products-grid">
          <div className="Sproduct-card">
            <img src={Symbol1} alt="Gift Items" />
            <p>Gift Items</p>
          </div>
          <div className="Sproduct-card">
            <img src={Symbol2} alt="Ethnic Wear" />
            <p>Ethnic Wear</p>
          </div>
          <div className="Sproduct-card">
            <img src={Symbol3} alt="Jewellery" />
            <p>Jewellery</p>
          </div>
          <div className="Sproduct-card">
            <img src={Symbol4} alt="Decorative Items" />
            <p>Decorative Items</p>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-btn" onClick={handleCloseModal}>
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
}

export default ShoppingPage;
