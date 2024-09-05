import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import CYLModal from './CYLModal'; 
import PYLModal from './PYLModal';
import { FaBuilding, FaCogs, FaIndustry, FaPills, FaPlug, FaSeedling } from 'react-icons/fa';

import product1 from '../../assets/payroll.jpg';
import product2 from '../../assets/hospitalms.jpg';
import product3 from '../../assets/payrollhr.jpg';
import product4 from '../../assets/hospital.jpg';
import product5 from '../../assets/inventory.jpg';
import product6 from '../../assets/crm.jpg';
import product7 from '../../assets/erp.jpg';
import product8 from '../../assets/pos.jpg';
import cat1 from '../../assets/Categories/sde.jpg';
import cat2 from '../../assets/Categories/school.jpg';
import cat3 from '../../assets/Categories/csd.jfif';
import cat4 from '../../assets/Categories/account.jfif';
import cat5 from '../../assets/Categories/ads.jfif';
import cat6 from '../../assets/Categories/ams.jfif';
import cat7 from '../../assets/Categories/hs.jfif';
import cat8 from '../../assets/Categories/erpsoftwarepack.jfif';
import cat9 from '../../assets/Categories/hms.jfif';
import cat10 from '../../assets/Categories/hr.jfif';
import Building from './CategoryCard/Building';
import Electronics from './CategoryCard/Electrical';
import Pharmacy from './CategoryCard/Pharmacy';
import Industrial from './CategoryCard/Industrial';
import PremiumBrands from './PremiumBrands';
import City from './City';

function Home() {
    const categories = [
        { id: 1, image: cat1, title: 'Software Development Services' },
        { id: 2, image: cat2, title: 'School Management Software' },
        { id: 3, image: cat3, title: 'Customized Software Solution' },
        { id: 4, image: cat4, title: 'Accounting Software' },
        { id: 5, image: cat5, title: 'Application Development Service' },
        { id: 6, image: cat6, title: 'Attendance Management' },
        { id: 7, image: cat7, title: 'Hospital Software' },
        { id: 8, image: cat8, title: 'Erp Software Packages' },
        { id: 9, image: cat9, title: 'Hospital Management System' },
        { id: 10, image: cat10, title: 'Human Resources Software' }
    ];

    const products = [
        { id: 1, image: product1, title: 'Payroll And Hrms Software', price: '₹ 450 / Month', seller: 'Tech Innovations Pvt. Ltd.', phoneNumber: '+91 98765 43210' },
        { id: 2, image: product2, title: 'Hospital Software Development Services', price: '₹ 50000 / Project', seller: 'MedTech Solutions', phoneNumber: '+91 98765 43210' },
        { id: 3, image: product3, title: 'Payroll Software Services', price: '₹ 2100 / Month', seller: 'Payroll Systems Ltd.', phoneNumber: '+91 98765 43210' },
        { id: 4, image: product4, title: 'Hospital Management Software', price: '₹ 50000 / Year', seller: 'Healthcare Innovations', phoneNumber: '+91 98765 43210' },
        { id: 5, image: product5, title: 'Inventory Management Software', price: '₹ 1200 / Month', seller: 'Supply Chain Systems', phoneNumber: '+91 98765 43210' },
        { id: 6, image: product6, title: 'Customer Relationship Management (CRM) Software', price: '₹ 2500 / Month', seller: 'CRM Solutions Ltd.', phoneNumber: '+91 98765 43210' },
        { id: 7, image: product7, title: 'ERP Software Solutions', price: '₹ 80000 / Year', seller: 'Enterprise Tech', phoneNumber: '+91 98765 43210' },
        { id: 8, image: product8, title: 'Point of Sale (POS) Software', price: '₹ 1500 / Month', seller: 'Retail Systems Inc.', phoneNumber: '+91 98765 43210' },
    ];

    const [isCYLModalOpen, setIsCYLModalOpen] = useState(false);
    const [isPYLModalOpen, setIsPYLModalOpen] = useState(false);

    const [selectedItem, setSelectedItem] = useState(null);
    const [visiblePhoneNumber, setVisiblePhoneNumber] = useState({});

    const togglePhoneNumber = (id) => {
        setVisiblePhoneNumber((prevState) => ({
            ...prevState,
            [id]: prevState[id] ? null : products.find(product => product.id === id).phoneNumber
        }));
    };

    const handleOpenCYLModal = (item) => {
        setSelectedItem(item);
        setIsCYLModalOpen(true);
    };

    const handleCloseCYLModal = () => {
        setIsCYLModalOpen(false);
        setSelectedItem(null);
    };

    const handleOpenPYLModal = (item) => {
        setSelectedItem(item);
        setIsPYLModalOpen(true);
    };

    const handleClosePYLModal = () => {
        setIsPYLModalOpen(false);
        setSelectedItem(null);
    };

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
            
            {/* Products You May Like Section */}
            <div className="products-section">
                <h2>Products You May Like</h2>
                <div className="products-list">
                    {products.map(product => (
                        <div key={product.id} className="product-card">
                            <img src={product.image} alt={product.title} />
                            <h3>{product.title}</h3>
                            <p>{product.price}</p>
                            <button 
                                className="product-button"
                                onClick={() => togglePhoneNumber(product.id)}
                            >
                                {visiblePhoneNumber[product.id] || 'Get Number'}
                            </button>
                            <button 
                                className="product-button" 
                                onClick={() => handleOpenCYLModal(product)}
                            >
                                Get Best Price
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* Categories You May Like Section */}
            <div className="categories-section">
                <h2>Categories You May Like</h2>
                <div className="categories-list">
                    {categories.map(category => (
                        <div key={category.id} className="Hcategory-card">
                            <img src={category.image} alt={category.title} />
                            <h3>{category.title}</h3>
                            <button 
                                className="category-button" 
                                onClick={() => handleOpenPYLModal(category)}
                            >
                                Get Quotes
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* Categories Section */}
            <div className="categories">
                <Link to="/products/construction" className="category">
                    <FaBuilding className='icon' size={40} />
                    <p>Construction</p>
                </Link>
                <Link to="/products/electrical" className="category">
                    <FaPlug className='icon' size={40} />
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

            <Building />
            <Electronics />
            <Pharmacy />
            <Industrial />
            <PremiumBrands />
            <City /> 

            <div className="home-content">
                <h1>We connect</h1>
                <h2>Buyers & Sellers</h2>
                <p>B2B Mart is India's largest online B2B marketplace, connecting buyers with suppliers.</p>
            </div>

            <CYLModal 
                isOpen={isCYLModalOpen} 
                onClose={handleCloseCYLModal} 
                product={selectedItem} 
                categoryImage={selectedItem ? selectedItem.image : ''}
            />
            <PYLModal 
                isOpen={isPYLModalOpen} 
                onClose={handleClosePYLModal} 
                product={selectedItem} 
                categoryImage={selectedItem ? selectedItem.image : ''}
            />
        </div>
    );
}

export default Home;
