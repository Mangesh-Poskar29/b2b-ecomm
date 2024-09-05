import React from 'react';
import './Building.css';
import drug from '../../../assets/drug.png';  
import nutraceuticals from '../../../assets/nutraceuticals.png';  
import fitness from '../../../assets/fitness.png';  
import medicalTreatment from '../../../assets/medicalTreatment.png';  
import medicalTest from '../../../assets/medicalTest.png';  
import pcdFranchise from '../../../assets/pcdFranchise.png';  
import banner from '../../../assets/pharma-banner.jpg';  

const Pharmacy = () => {
    const categories = [
        {
            title: "Pharmaceutical Drug",
            items: ["Anticoagulant and Antiplatelet Drugs", "Antiparasitic Drug", "Antibiotic Tablets, Capsule & Syrup", "Antifungal Injection, Tablet & Syrup"],
            image: drug, 
        },
        {
            title: "Nutraceuticals",
            items: ["Vitamin Tablets & Capsules", "Weight Loss Supplement", "Dietary Supplements", "Mineral Supplement"],
            image: nutraceuticals,
        },
        {
            title: "Fitness Supplements",
            items: ["Weight Gain Nutrition", "Weight Gain Capsule", "Pre workout Supplements", "Immune Booster"],
            image: fitness, 
        },
        {
            title: "Medical Treatment Services",
            items: ["Dental Treatment Services", "Medical Surgery Services", "Eye Treatment", "Plastic Surgery Services"],
            image: medicalTreatment, 
        },
        {
            title: "Medical Test Services",
            items: ["CT Scan Services", "Ultrasound Services", "ECHO Cardiology", "Blood Testing"],
            image: medicalTest, 
        },
        {
            title: "PCD Pharma Franchise",
            items: ["Pharma Franchise", "Allopathic PCD Pharma Franchise", "Ayurvedic PCD Pharma Franchise", "Veterinary PCD Pharma Franchise"],
            image: pcdFranchise,
        },
    ];

    return (
        <div className="materials-container">
            <h2>Pharmaceutical Drug, Medicine, Medical Care & Consultation</h2>
            <div className="materials-grid">
                <div className="large-category">
                    <img src={banner} alt="Material Banner" className="banner-image" />
                    <div className="large-category-text">
                        <ul>
                            <li>Pharma Raw Material</li>
                            <li>Pharmaceutical Chemical</li>
                            <li>Clinical Trial Services</li>
                            <li>X-ray Services</li>
                        </ul>
                        <button className="view-all-button">View All</button>
                    </div>
                </div>
                <div className="categories-wrapper">
                    {categories.map((category, index) => (
                        <div key={index} className="category-card">
                            <img src={category.image} alt={category.title} />
                            <h3>{category.title}</h3>
                            <ul>
                                {category.items.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Pharmacy;
