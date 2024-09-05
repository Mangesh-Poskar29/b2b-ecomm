import React from 'react';
import './Building.css';
import brick from '../../../assets/brick-machine.png';
import lift from '../../../assets/lift.jpg';
import tmt from '../../../assets/tmt.jpg';
import plywood from '../../../assets/plywood.jpg';
import excavator from '../../../assets/excavator.jpg';
import paint from '../../../assets/paint.jpg';
import banner from '../../../assets/construction.jpg';
import { useNavigate } from 'react-router-dom';

const Building = () => {
    const navigate = useNavigate();

    const categories = [
        {
            title: "Brick Making Machines",
            items: ["Brick Making Machine", "Clay Making Machine", "Cement Brick Machine"],
            image: brick, 
        },
        {
            title: "Passenger Lifts",
            items: ["Residential Elevator", "Kone Passenger Lift", "Stair Lift"],
            image: lift,
        },
        {
            title: "TMT Bars",
            items: ["TMT Steel Bars", "TATA TMT Bars", "Kamdhenu TMT Bars"],
            image: tmt, 
        },
        {
            title: "Plywoods",
            items: ["Shuttering Plywood", "Laminated Plywood", "Waterproof Plywood"],
            image: plywood, 
        },
        {
            title: "Excavator",
            items: ["Hitachi Excavator", "Hyundai Excavator", "Komatsu Excavator"],
            image: excavator, 
        },
        {
            title: "Emulsion Paints",
            items: ["Asian Emulsion Paints", "Berger Emulsion Paints", "Nerolac Emulsion Paints"],
            image: paint, 
        },
    ];

    const returnToConstruction = () => {
        navigate('/products/construction');
    };

    return (
        <div className="materials-container">
            <h2>Building Construction Material & Equipment</h2>
            <div className="materials-grid">
                <div className="large-category">
                    <img src={banner} alt="Construction Banner" className="banner-image" /> 
                    <div className="large-category-text">
                        <ul>
                            <li>Prefabricated Houses</li>
                            <li>Scaffolding Planks & Plates</li>
                            <li>Construction Machines</li>
                            <li>Crushing Machines & Plants</li>
                        </ul>
                        <button className="view-all-button" onClick={returnToConstruction}>View All</button>
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

export default Building;
