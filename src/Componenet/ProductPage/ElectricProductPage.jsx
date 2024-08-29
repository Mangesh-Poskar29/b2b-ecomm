import React, { useState } from 'react';
import './ProductPage.css';
import LightBulb from '../../assets/lightbulb.jpg';
import Wire from '../../assets/wire.jpg';
import Switch from '../../assets/switch.jpg';
import CircuitBreaker from '../../assets/circuitbreaker.jpg';
import Socket from '../../assets/socket.jpg';
import ElectricFan from '../../assets/fan.jpg';
import ExtensionCord from '../../assets/extensionCord.jpg';
import Transformer from '../../assets/transformer.jpg';
import { FaHeart } from 'react-icons/fa';
import Modal from '../Modal/Modal'; 

function ElectricalProductPage() {
  const products = [
    {
      id: 1,
      name: 'Light Bulb',
      price: 50.00,
      minOrderQty: 28,
      image: LightBulb,
      category: 'Lighting',
      description: 'Energy-efficient light bulb suitable for various lighting needs. Long-lasting and eco-friendly.'
    },
    {
      id: 2,
      name: 'Electrical Wire',
      price: 500.00,
      minOrderQty: 5,
      image: Wire,
      category: 'Wiring & Cables',
      description: 'Durable electrical wire ideal for residential and commercial wiring. Provides excellent conductivity.'
    },
    {
      id: 3,
      name: 'Electric Switch',
      price: 120.00,
      minOrderQty: 12,
      image: Switch,
      category: 'Switches & Sockets',
      description: 'High-quality electric switch for smooth operation. Designed for safety and reliability.'
    },
    {
      id: 4,
      name: 'Circuit Breaker',
      price: 400.00,
      minOrderQty: 45,
      image: CircuitBreaker,
      category: 'Safety Equipment',
      description: 'Circuit breaker with high fault tolerance. Ensures protection from electrical surges and short circuits.'
    },
    {
      id: 5,
      name: 'Power Socket',
      price: 80.00,
      minOrderQty: 100,
      image: Socket,
      category: 'Switches & Sockets',
      description: 'Durable power socket with a sleek design. Suitable for home and office use.'
    },
    {
      id: 6,
      name: 'Electric Fan',
      price: 1500.00,
      minOrderQty: 7,
      image: ElectricFan,
      category: 'Appliances',
      description: 'High-speed electric fan with multiple speed settings. Ideal for cooling and ventilation.'
    },
    {
      id: 7,
      name: 'Extension Cord',
      price: 300.00,
      minOrderQty: 100,
      image: ExtensionCord,
      category: 'Wiring & Cables',
      description: 'Flexible and durable extension cord. Perfect for extending the reach of your electrical devices.'
    },
    {
      id: 8,
      name: 'Transformer',
      price: 3500.00,
      minOrderQty: 2,
      image: Transformer,
      category: 'Transformers',
      description: 'High-efficiency transformer for stable voltage regulation. Suitable for various electrical applications.'
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
      selectedCategories.length === 0 || selectedCategories.includes(product.category)
  );

  return (
    <div className="product-page-container">
      <div className="filter-section">
        <h3>Categories</h3>
        <div>
          <input
            type="checkbox"
            id="Lighting"
            onChange={() => handleCategoryChange('Lighting')}
          />
          <label htmlFor="Lighting">Lighting</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="Wiring-Cables"
            onChange={() => handleCategoryChange('Wiring & Cables')}
          />
          <label htmlFor="Wiring-Cables">Wiring & Cables</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="Switches-Sockets"
            onChange={() => handleCategoryChange('Switches & Sockets')}
          />
          <label htmlFor="Switches-Sockets">Switches & Sockets</label>
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
            id="Appliances"
            onChange={() => handleCategoryChange('Appliances')}
          />
          <label htmlFor="Appliances">Appliances</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="Transformers"
            onChange={() => handleCategoryChange('Transformers')}
          />
          <label htmlFor="Transformers">Transformers</label>
        </div>
        <div className="filter-options">
          <h4>Filter By Price</h4>
          <div className="price-slider">
            <input type="range" min="0" max="50000" value={0} readOnly />
            <input type="range" min="0" max="50000" value={50000} readOnly />
            <div className="price-range-display">From ₹0 to ₹50000</div>
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

export default ElectricalProductPage;
