import React, { useState } from 'react';
import './ProductPage.css';
import Excavator from '../../assets/excavator.jpg';
import Bulldozer from '../../assets/bulldozer.jpg';
import Crane from '../../assets/crane.jpg';
import Forklift from '../../assets/forklift.jpg';
import ConveyorBelt from '../../assets/conveyorbelt.jpg';
import WeldingMachine from '../../assets/weldingmachine.jpg';
import Generator from '../../assets/generator.jpg';
import LatheMachine from '../../assets/lathemachine.jpg';
import { FaHeart} from 'react-icons/fa'; 
import Modal from '../Modal/Modal';


function MachineryProductPage() {
  const products = [
    { id: 1, name: 'Excavator', price: 2000000.00, minOrderQty: 2, image: Excavator, category: 'Construction Machinery', description: 'A powerful excavator for large-scale construction projects.' },
    { id: 2, name: 'Bulldozer', price: 1500000.00, minOrderQty: 1, image: Bulldozer, category: 'Construction Machinery', description: 'Heavy-duty bulldozer suitable for various terrains.' },
    { id: 3, name: 'Crane', price: 3000000.00, minOrderQty: 2, image: Crane, category: 'Construction Machinery', description: 'High-performance crane with extensive reach capabilities.' },
    { id: 4, name: 'Forklift', price: 800000.00, minOrderQty: 2, image: Forklift, category: 'Material Handling', description: 'Efficient forklift for material handling in warehouses.' },
    { id: 5, name: 'Conveyor Belt', price: 100000.00, minOrderQty: 1, image: ConveyorBelt, category: 'Material Handling', description: 'Reliable conveyor belt system for continuous operations.' },
    { id: 6, name: 'Welding Machine', price: 60000.00, minOrderQty: 1, image: WeldingMachine, category: 'Manufacturing Machinery', description: 'Advanced welding machine for precision work.' },
    { id: 7, name: 'Generator', price: 500000.00, minOrderQty: 2, image: Generator, category: 'Power Machinery', description: 'Powerful generator for consistent energy supply.' },
    { id: 8, name: 'Lathe Machine', price: 250000.00, minOrderQty: 2, image: LatheMachine, category: 'Manufacturing Machinery', description: 'Versatile lathe machine for various manufacturing tasks.' },
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
            id="Construction-Machinery"
            onChange={() => handleCategoryChange('Construction Machinery')}
          />
          <label htmlFor="Construction-Machinery">Construction Machinery</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="Material-Handling"
            onChange={() => handleCategoryChange('Material Handling')}
          />
          <label htmlFor="Material-Handling">Material Handling</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="Manufacturing-Machinery"
            onChange={() => handleCategoryChange('Manufacturing Machinery')}
          />
          <label htmlFor="Manufacturing-Machinery">Manufacturing Machinery</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="Power-Machinery"
            onChange={() => handleCategoryChange('Power Machinery')}
          />
          <label htmlFor="Power-Machinery">Power Machinery</label>
        </div>
        <div className="filter-options">
          <h4>Filter By Price</h4>
          <div className="price-slider">
            <input
              type="range"
              min="0"
              max="5000000"
              value={0}
              readOnly
            />
            <input
              type="range"
              min="0"
              max="5000000"
              value={5000000}
              readOnly
            />
            <div className="price-range-display">
              From ₹0 to ₹5000000
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

export default MachineryProductPage;
