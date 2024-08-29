import React, { useState } from 'react';
import './ProductPage.css';
import Paracetamol from '../../assets/paracetamol.jpg';
import BandAid from '../../assets/bandaid.jpg';
import CoughSyrup from '../../assets/coughsyrup.jpg';
import Thermometer from '../../assets/thermometer.jpg';
import Antiseptic from '../../assets/antiseptic.jpg';
import VitaminC from '../../assets/vitaminC.jpg';
import BloodPressureMonitor from '../../assets/bloodpressuremonitor.jpg';
import Insulin from '../../assets/insulin.jpg';
import { FaHeart} from 'react-icons/fa'; 
import Modal from '../Modal/Modal';


function PharmacyProductPage() {
  const products = [
    { id: 1, name: 'Paracetamol', price: 20.00, minOrderQty: 150, image: Paracetamol, category: 'Medicines', description: 'Paracetamol is a pain reliever and a fever reducer.' },
    { id: 2, name: 'Band Aid', price: 5.00, minOrderQty: 200, image: BandAid, category: 'First Aid', description: 'Band Aid is a small adhesive bandage for minor cuts and injuries.' },
    { id: 3, name: 'Cough Syrup', price: 50.00, minOrderQty: 25, image: CoughSyrup, category: 'Medicines', description: 'Cough Syrup helps soothe throat and suppress cough.' },
    { id: 4, name: 'Thermometer', price: 300.00, minOrderQty: 15, image: Thermometer, category: 'Medical Equipment', description: 'Thermometer for accurately measuring body temperature.' },
    { id: 5, name: 'Antiseptic Cream', price: 40.00, minOrderQty: 75, image: Antiseptic, category: 'First Aid', description: 'Antiseptic Cream for treating minor wounds and preventing infection.' },
    { id: 6, name: 'Vitamin C Tablets', price: 100.00, minOrderQty: 500, image: VitaminC, category: 'Supplements', description: 'Vitamin C Tablets to boost immunity and overall health.' },
    { id: 7, name: 'Blood Pressure Monitor', price: 1500.00, minOrderQty: 10, image: BloodPressureMonitor, category: 'Medical Equipment', description: 'Blood Pressure Monitor for checking blood pressure at home.' },
    { id: 8, name: 'Insulin Injection', price: 500.00, minOrderQty: 20, image: Insulin, category: 'Medicines', description: 'Insulin Injection for managing blood sugar levels in diabetic patients.' },
  ];

  const [sortBy, setSortBy] = useState('newest');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };


  const handleCategoryChange = (category) => {
    setSelectedCategories([category]);
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
            id="Medicines"
            onChange={() => handleCategoryChange('Medicines')}
          />
          <label htmlFor="Medicines">Medicines</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="First-Aid"
            onChange={() => handleCategoryChange('First Aid')}
          />
          <label htmlFor="First-Aid">First Aid</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="Medical-Equipment"
            onChange={() => handleCategoryChange('Medical Equipment')}
          />
          <label htmlFor="Medical-Equipment">Medical Equipment</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="Supplements"
            onChange={() => handleCategoryChange('Supplements')}
          />
          <label htmlFor="Supplements">Supplements</label>
        </div>
        <div className="filter-options">
          <h4>Filter By Price</h4>
          <div className="price-slider">
            <input
              type="range"
              min="0"
              max="50000"
              value={0}
              readOnly
            />
            <input
              type="range"
              min="0"
              max="50000"
              value={50000}
              readOnly
            />
            <div className="price-range-display">
              From ₹0 to ₹50000
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

export default PharmacyProductPage;
