import React, { useState } from 'react';
import './ProductPage.css';
import CementBag from '../../assets/cement.png';
import Sand from '../../assets/sand.jpg';
import Brick from '../../assets/brick.jpg';
import Hammer from '../../assets/hammer.jpg';
import Drill from '../../assets/drill.jpg';
import Tape from '../../assets/tape.jpg';
import Roof from '../../assets/roof.jpg';
import Insulation from '../../assets/insulation.jpg';
import { FaHeart } from 'react-icons/fa'; 
import Modal from '../Modal/Modal'; 

function ConstructionProductPage() {
  const products = [
    { id: 1, name: 'Cement Bag', price: 500.00, minOrderQty: 10, image: CementBag, category: 'Building Materials', description: 'High-quality cement for all types of construction works. Provides strong bonding and durability.' },
    { id: 2, name: 'Sand', price: 2000.00, minOrderQty: 5, image: Sand, category: 'Building Materials', description: 'Fine sand suitable for construction and plastering. Ensures smooth finishing.' },
    { id: 3, name: 'Bricks', price: 80.00, minOrderQty: 100, image: Brick, category: 'Building Materials', description: 'Durable and high-strength bricks for building strong structures.' },
    { id: 4, name: 'Hammer', price: 150.00, minOrderQty: 1, image: Hammer, category: 'Tools & Equipment', description: 'Heavy-duty hammer for all types of construction and repair work.' },
    { id: 5, name: 'Electric Drill', price: 247.00, minOrderQty: 1, image: Drill, category: 'Tools & Equipment', description: 'High-power electric drill suitable for drilling holes in concrete, wood, and metal.' },
    { id: 6, name: 'Measuring Tape', price: 80.00, minOrderQty: 1, image: Tape, category: 'Tools & Equipment', description: 'Durable and accurate measuring tape, essential for all types of measurement tasks.' },
    { id: 7, name: 'Roofing Sheet', price: 3000.00, minOrderQty: 2, image: Roof, category: 'Roofing & Insulation', description: 'Long-lasting roofing sheets with excellent weather resistance and durability.' },
    { id: 8, name: 'Insulation Board', price: 1500.00, minOrderQty: 3, image: Insulation, category: 'Roofing & Insulation', description: 'High-efficiency insulation boards for maintaining temperature and reducing energy costs.' },
];

  const [sortBy, setSortBy] = useState('newest');
  const [priceRange, setPriceRange] = useState([0, 50000]);
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
      product.price >= priceRange[0] &&
      product.price <= priceRange[1] &&
      (selectedCategories.length === 0 || selectedCategories.includes(product.category))
  );

  return (
    <div className="product-page-container">
      <div className="filter-section">
        <h3>Categories</h3>
        <div>
          <input
            type="checkbox"
            id="Building-Materials"
            onChange={() => handleCategoryChange('Building Materials')}
          />
          <label htmlFor="Building-Materials">Building Materials</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="Tools-Equipment"
            onChange={() => handleCategoryChange('Tools & Equipment')}
          />
          <label htmlFor="Tools-Equipment">Tools & Equipment</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="Roofing-Insulation"
            onChange={() => handleCategoryChange('Roofing & Insulation')}
          />
          <label htmlFor="Roofing-Insulation">Roofing & Insulation</label>
        </div>
        <div className="filter-options">
          <h4>Filter By Price</h4>
          <div className="price-slider">
            <input
              type="range"
              min="0"
              max="50000"
              value={priceRange[0]}
              onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
            />
            <input
              type="range"
              min="0"
              max="50000"
              value={priceRange[1]}
              onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
            />
            <div className="price-range-display">
              From ₹{priceRange[0]} to ₹{priceRange[1]}
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

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        product={selectedProduct}
      />
    </div>
  );
}

export default ConstructionProductPage;
