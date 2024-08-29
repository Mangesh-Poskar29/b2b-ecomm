import React, { useState } from 'react';
import './ShoppingPage.css';
import LadiesWearIcon from '../../assets/ladies-wear.png';
import MenWearIcon from '../../assets/men-wear.png';
import FootwearIcon from '../../assets/footwear.png';
import BeautyProductsIcon from '../../assets/beauty-products.png';
import PetFoodIcon from '../../assets/pet-food.png';
import MobileAccessoriesIcon from '../../assets/mobile-accessories.png';
import CleaningSuppliesIcon from '../../assets/cleaning-supplies.png';
import HomeDecorIcon from '../../assets/home-decor.png';
import JewelleryIcon from '../../assets/jewellery.png';
import LightIcon from '../../assets/light.png';
import Symbol1 from '../../assets/gift-items.jpg';
import Symbol2 from '../../assets/ethnic-wear.jpg';
import Symbol3 from '../../assets/jewellery.jpg';
import Symbol4 from '../../assets/decorative-items.jpg';

function ShoppingPage() {
  const [showModal, setShowModal] = useState(false);

  const categories = [
    { name: 'Ladies Wear', icon: LadiesWearIcon },
    { name: 'Men Wear', icon: MenWearIcon },
    { name: 'Footwear', icon: FootwearIcon },
    { name: 'Beauty Products', icon: BeautyProductsIcon },
    { name: 'Pet Food', icon: PetFoodIcon },
    { name: 'Mobile Accessories', icon: MobileAccessoriesIcon },
    { name: 'Cleaning Supplies', icon: CleaningSuppliesIcon },
    { name: 'Home Decor', icon: HomeDecorIcon },
    { name: 'Jewellery', icon: JewelleryIcon },
    { name: 'Light', icon: LightIcon },
  ];

  const products = [
    { name: 'Gift Items', image: Symbol1 },
    { name: 'Ethnic Wear', image: Symbol2 },
    { name: 'Jewellery', image: Symbol3 },
    { name: 'Decorative Items', image: Symbol4 },
  ];

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
        {categories.map((category) => (
          <div className="category-item" key={category.name}>
            <img src={category.icon} alt={category.name} />
            <p>{category.name}</p>
          </div>
        ))}
      </div>

      <div className="hero-section">
        <h2>Explore Top Brands for the Season</h2>
        <div className="products-grid">
          {products.map((product) => (
            <div className="Sproduct-card" key={product.name}>
              <img src={product.image} alt={product.name} />
              <p>{product.name}</p>
            </div>
          ))}
        </div>
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-btn" onClick={handleCloseModal}>
              &times;
            </button>
            <h2>Looking to buy something?</h2>
            <p>Tell us your requirement and get free quotes from multiple sellers</p>
            <input type="text" placeholder="Enter Product / Service name" />
            <input type="text" placeholder="Enter your mobile number" />
            <p>Your country is <strong>India</strong></p>
            <button className="go-btn">Go</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ShoppingPage;
