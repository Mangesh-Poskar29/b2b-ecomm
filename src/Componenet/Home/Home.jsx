import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import { FaBuilding, FaPlug, FaPills, FaIndustry, FaCogs, FaSeedling } from 'react-icons/fa';

function Home() {
    return (
        <div className="home-container">
            <div className="search-section">
                <div className="search-bar">
                    <select className="search-select">
                        <option>All India</option>
                        <option>Mumbai</option>
                        <option>Delhi</option>
                        <option>Pune</option>
                        <option>Ratnagiri</option>
                    </select>
                    <input type="text" placeholder="Enter product name" className="search-input" />
                    <button className="search-button">Search</button>
                </div>
            </div>
            <div className="categories">
                <Link to="/products/construction" className="category">
                    <FaBuilding className='icon' size={40} />
                    <p>Construction</p>
                </Link>
                <Link to="/products/electrical" className="category">
                    <FaPlug className='icon'  size={40} />
                    <p>Electronics & Electrical</p>
                </Link>
                <Link to="/products/pharmacy" className="category">
                    <FaPills className='icon' size={40} />
                    <p>Pharmacy</p>
                </Link>
                <Link to="/products/machinery" className="category">
                    <FaCogs className='icon' size={40} />
                    <p>Machinery</p>
                </Link>
                <Link to="/products/industrial-supplies" className="category">
                    <FaIndustry className='icon' size={40} />
                    <p>Industrial Supplies</p>
                </Link>
                <Link to="/products/food" className="category">
                    <FaSeedling className='icon' size={40} />
                    <p>Food</p>
                </Link>
            </div>
            <div className="home-content">
                <h1>We connect</h1>
                <h2>Buyers & Sellers</h2>
                <p>B2B Mart is India's largest online B2B marketplace, connecting buyers with suppliers.</p>
            </div>
        </div>
    );
}

export default Home;
