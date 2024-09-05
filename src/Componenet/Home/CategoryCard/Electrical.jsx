import React from 'react';
import './Building.css';
import printer from '../../../assets/printer.png'; 
import sensor from '../../../assets/sensor.png';  
import controller from '../../../assets/controller.png';  
import automation from '../../../assets/automation.png';  
import diode from '../../../assets/diode.png';  
import wire from '../../../assets/wire.jpg';  
import banner from '../../../assets/electronics-banner.jpg';  
import { useNavigate } from 'react-router-dom';

const Electrical = () => {
    const navigate = useNavigate();

    const categories = [
        {
            title: "Office Automation Products",
            items: ["Multifunction Printer", "Xerox Machines", "Fingerprint Scanners"],
            image: printer, 
        },
        {
            title: "Sensors & Transducers",
            items: ["Level Sensors", "Proximity Sensor", "Sensor for Home & Office", "Load Cell"],
            image: sensor,
        },
        {
            title: "Process Controllers",
            items: ["Level Controllers", "Motor Controllers", "Temperature Controller"],
            image: controller, 
        },
        {
            title: "Control & Automation",
            items: ["VFD", "PLC", "HMI"],
            image: automation, 
        },
        {
            title: "Diodes & Active Devices",
            items: ["Integrated Circuits", "Thyristors", "Light Emitting Diode"],
            image: diode, 
        },
        {
            title: "Wires & Cables",
            items: ["House Wire", "Armoured Cable", "Power Cable"],
            image: wire, 
        },
        
    ];

    const returnToElectrical = () => {
        navigate('/products/electrical');
    };

    return (
        <div className="materials-container">
            <h2>Electronics & Electrical Goods & Supplies</h2>
            <div className="materials-grid">
                <div className="large-category">
                    <img src={banner} alt="Electronics Banner" className="banner-image" />
                    <div className="large-category-text">
                        <ul>
                            <li>Voltage & Power Stabilizers</li>
                            <li>GPS and Navigation Devices</li>
                            <li>Biometrics & Access Control Devices</li>
                            <li>CCTV, Surveillance Systems and Parts</li>
                        </ul>
                        <button className="view-all-button"  onClick={returnToElectrical}>View All</button>
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

export default Electrical;
