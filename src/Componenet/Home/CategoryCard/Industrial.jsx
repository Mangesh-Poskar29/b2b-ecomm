import React from 'react';
import './Building.css';
import foodProcessing from '../../../assets/food-processing.png';  
import bagMaking from '../../../assets/bag-making.png';  
import snackMachine from '../../../assets/snack-machine.png';  
import bakeryMachinery from '../../../assets/bakery-machinery.png';  
import cncMachine from '../../../assets/cnc-machine.jpg';  
import printingMachine from '../../../assets/printing-machine.png';  
import banner from '../../../assets/industrial-banner.jpg';  

const Industrial = () => {
    const categories = [
        {
            title: "Food Processing Machine",
            items: ["Flour Mill", "Rice Mill Machinery", "Spice Processing Machines"],
            image: foodProcessing,
        },
        {
            title: "Bag Making Machine",
            items: ["Non Woven Bag Making Machine", "Paper Bag Making Machine", "Biodegradable Bag Making Machine"],
            image: bagMaking,
        },
        {
            title: "Snack Machine",
            items: ["Popcorn Machines", "Pani Puri Making Machine", "Namkeen Making Machines"],
            image: snackMachine,
        },
        {
            title: "Bakery & Dairy Machinery",
            items: ["Bakery Machinery", "Bakery Oven", "Sweets Making Machine"],
            image: bakeryMachinery,
        },
        {
            title: "CNC Machines & Lathe Machine",
            items: ["Lathe Machine", "CNC Machines", "CNC Vertical Machining Centers"],
            image: cncMachine,
        },
        {
            title: "Printing Machine",
            items: ["Large Format Printers", "Offset Printing Machines", "Sublimation Printing Machine"],
            image: printingMachine,
        }
    ];

    return (
        <div className="materials-container">
            <h2>Industrial Plants, Machinery & Equipment</h2>
            <div className="materials-grid">
                <div className="large-category">
                    <img src={banner} alt="Industrial Banner" className="banner-image" />
                    <div className="large-category-text">
                        <ul>
                            <li>Agarbatti Making Machines</li>
                            <li>Disposable Plate Making Machine</li>
                            <li>Oil Extraction Machine</li>
                            <li>Animal Feed Making Machine</li>
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

export default Industrial;
