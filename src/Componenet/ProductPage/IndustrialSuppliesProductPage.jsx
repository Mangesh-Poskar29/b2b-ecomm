import React, { useState } from 'react';
import './ProductPage.css';
import DrillMachine from '../../assets/drillmachine.jpg';
import AirCompressor from '../../assets/aircompressor.jpg';
import SafetyGloves from '../../assets/safetygloves.jpg';
import WeldingHelmet from '../../assets/weldinghelmet.jpg';
import HandTools from '../../assets/handtools.jpg';
import HydraulicPump from '../../assets/hydraulicpump.jpg';
import SafetyGoggles from '../../assets/safetygoggles.jpg';
import IndustrialVacuum from '../../assets/industrialvacuum.jpg';
import { FaHeart} from 'react-icons/fa'; 
import Modal from '../Modal/Modal';

function IndustrialSuppliesProductPage() {
  const products = [
    { id: 1, name: 'Drill Machine', price: 5000.00, minOrderQty: 15, image: DrillMachine, category: 'Tools & Equipment', description: 'High-quality drill machine suitable for industrial use.' },
    { id: 2, name: 'Air Compressor', price: 20000.00, minOrderQty: 2, image: AirCompressor, category: 'Machinery', description: 'Heavy-duty air compressor with high performance.' },
    { id: 3, name: 'Safety Gloves', price: 200.00, minOrderQty: 150, image: SafetyGloves, category: 'Safety Equipment', description: 'Durable safety gloves to protect your hands.' },
    { id: 4, name: 'Welding Helmet', price: 1500.00, minOrderQty: 15, image: WeldingHelmet, category: 'Safety Equipment', description: 'Protective welding helmet with auto-darkening feature.' },
    { id: 5, name: 'Hand Tools', price: 800.00, minOrderQty: 10, image: HandTools, category: 'Tools & Equipment', description: 'Set of essential hand tools for various tasks.' },
    { id: 6, name: 'Hydraulic Pump', price: 30000.00, minOrderQty: 2, image: HydraulicPump, category: 'Machinery', description: 'Efficient hydraulic pump for industrial applications.' },
    { id: 7, name: 'Safety Goggles', price: 300.00, minOrderQty: 75, image: SafetyGoggles, category: 'Safety Equipment', description: 'Protective safety goggles with a clear view.' },
    { id: 8, name: 'Industrial Vacuum', price: 15000.00, minOrderQty: 15, image: IndustrialVacuum, category: 'Cleaning Equipment', description: 'High-power industrial vacuum cleaner.' },
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
            id="Tools-Equipment"
            onChange={() => handleCategoryChange('Tools & Equipment')}
          />
          <label htmlFor="Tools-Equipment">Tools & Equipment</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="Machinery"
            onChange={() => handleCategoryChange('Machinery')}
          />
          <label htmlFor="Machinery">Machinery</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="Safety-Equipment"
            onChange={() => handleCategoryChange('Safety Equipment')}
          />
          <label htmlFor="Safety-Equipment">Safety Equipment</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="Cleaning-Equipment"
            onChange={() => handleCategoryChange('Cleaning Equipment')}
          />
          <label htmlFor="Cleaning-Equipment">Cleaning Equipment</label>
        </div>
        <div className="filter-options">
          <h4>Filter By Price</h4>
          <div className="price-slider">
            <input
              type="range"
              min="0"
              max="500000"
              value={0}
              readOnly
            />
            <input
              type="range"
              min="0"
              max="500000"
              value={500000}
              readOnly
            />
            <div className="price-range-display">
              From ₹0 to ₹500000
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
            <div className="product-card" key={product.id}  onClick={() => handleProductClick(product)}>
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

export default IndustrialSuppliesProductPage;
