import React, { useState } from 'react';
import './ProductPage.css';
import Rice from '../../assets/rice.jpg';
import Wheat from '../../assets/wheat.jpg';
import Sugar from '../../assets/sugar.jpg';
import Oil from '../../assets/oil.jpg';
import Spices from '../../assets/spices.png';
import Pulses from '../../assets/pulses.jpg';
import Coffee from '../../assets/coffee.jpg';
import Tea from '../../assets/tea.jpg';
import { FaHeart } from 'react-icons/fa';
import Modal from '../Modal/Modal'; 

function FoodProductPage() {
  const products = [
    { 
      id: 1, 
      name: 'Rice', 
      price: 500.00, 
      minOrderQty: '10Kg', 
      image: Rice, 
      category: 'Grains',
      description: 'High-quality rice perfect for all types of dishes. Available in bulk for larger orders.'
    },
    { 
      id: 2, 
      name: 'Wheat', 
      price: 450.00, 
      minOrderQty: '15Kg', 
      image: Wheat, 
      category: 'Grains',
      description: 'Premium wheat, ideal for making bread, pasta, and other baked goods. Freshly harvested.'
    },
    { 
      id: 3, 
      name: 'Sugar', 
      price: 100.00, 
      minOrderQty: '10Kg', 
      image: Sugar, 
      category: 'Essentials',
      description: 'Refined sugar, suitable for sweetening beverages and baking. Comes in granulated form.'
    },
    { 
      id: 4, 
      name: 'Cooking Oil', 
      price: 200.00, 
      minOrderQty: '25Liter', 
      image: Oil, 
      category: 'Essentials',
      description: 'High-quality cooking oil, perfect for frying, baking, and more. Available in large quantities.'
    },
    { 
      id: 5, 
      name: 'Spices', 
      price: 300.00, 
      minOrderQty: '10Kg', 
      image: Spices, 
      category: 'Spices',
      description: 'A mix of premium spices to enhance your culinary creations. Sourced from top farms.'
    },
    { 
      id: 6, 
      name: 'Pulses', 
      price: 150.00, 
      minOrderQty: '30Kg', 
      image: Pulses, 
      category: 'Grains',
      description: 'A variety of high-protein pulses, perfect for soups, stews, and other hearty dishes.'
    },
    { 
      id: 7, 
      name: 'Coffee', 
      price: 250.00, 
      minOrderQty: '15', 
      image: Coffee, 
      category: 'Beverages',
      description: 'Rich, aromatic coffee beans for a perfect brew. Sourced from the finest coffee farms.'
    },
    { 
      id: 8, 
      name: 'Tea', 
      price: 150.00, 
      minOrderQty: '10Kg', 
      image: Tea, 
      category: 'Beverages',
      description: 'Refreshing tea leaves, perfect for a hot cup of tea. Available in bulk for tea lovers.'
    },
  ];

  const [sortBy, setSortBy] = useState('newest');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleCategoryChange = (category) => {
    setSelectedCategories([category]);
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const filteredProducts = products.filter(
    (product) =>
      (selectedCategories.length === 0 || selectedCategories.includes(product.category))
  );

  return (
    <div className="product-page-container">
      <div className="filter-section">
        <h3>Categories</h3>
        <div>
          <input
            type="checkbox"
            id="Grains"
            onChange={() => handleCategoryChange('Grains')}
          />
          <label htmlFor="Grains">Grains</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="Essentials"
            onChange={() => handleCategoryChange('Essentials')}
          />
          <label htmlFor="Essentials">Essentials</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="Spices"
            onChange={() => handleCategoryChange('Spices')}
          />
          <label htmlFor="Spices">Spices</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="Beverages"
            onChange={() => handleCategoryChange('Beverages')}
          />
          <label htmlFor="Beverages">Beverages</label>
        </div>
        <div className="filter-options">
          <h4>Filter By Price</h4>
          <div className="price-slider">
            <input
              type="range"
              min="0"
              max="1000"
              value={0}
              readOnly
            />
            <input
              type="range"
              min="0"
              max="1000"
              value={1000}
              readOnly
            />
            <div className="price-range-display">
              From ₹0 to ₹1000
            </div>
          </div>
        </div>
      </div>

      <div className="product-section">
        <div className="sort-show">
          <div>
            <label>Sort By:</label>
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
              <option value="newest">Newest</option>
              <option value="priceLowHigh">Price: Low to High</option>
              <option value="priceHighLow">Price: High to Low</option>
            </select>
          </div>
          <div>
            <label>Show:</label>
            <select>
              <option value="default">Default</option>
            </select>
          </div>
        </div>

        <div className="product-grid">
          {filteredProducts.map((product) => (
            <div className="product-card" key={product.id} onClick={() => handleProductClick(product)}>
              <img src={product.image} alt={product.name} />
              <div className="product-details">
                <p>{product.name}</p>
                <div className="price">
                  <span className="new-price">₹{product.price}</span>
                </div>
                <div className="min-order-quantity">
                  Min Order Qty: {product.minOrderQty}
                </div>
                <div className="action-buttons">
                  <FaHeart color={'red'} />
                  <button>Add to Cart</button>
                  <button>Buy Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProduct && (
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          product={selectedProduct}
        />
      )}
    </div>
  );
}

export default FoodProductPage;
