import './City.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCity, faBuilding, faMapMarkerAlt, faHome, faGlobe, faStore, faIndustry, faBriefcase, faSuitcase, faWarehouse } from '@fortawesome/free-solid-svg-icons';

const cityIcons = {
  Delhi: faCity,
  Kolkata: faBuilding,
  Bengaluru: faMapMarkerAlt,
  Pune: faHome,
  Chennai: faGlobe,
  Surat: faStore,
  Mumbai: faIndustry,
  Jaipur: faBriefcase,
  Ahmedabad: faSuitcase,
  Hyderabad: faWarehouse
};

const cities = [
  'Delhi',
  'Kolkata',
  'Bengaluru',
  'Pune',
  'Chennai',
  'Surat',
  'Mumbai',
  'Jaipur',
  'Ahmedabad',
  'Hyderabad'
];

const TopCitiesSuppliers = () => {
  return (
    <div className="top-cities-suppliers-container">
      <h2>Find Suppliers from Top Cities</h2>
      <div className="top-cities-grid">
        {cities.map((city, index) => {
          const Icon = cityIcons[city];
          return (
            <div key={index} className="city-item">
              <div className="city-icon-container">
                <FontAwesomeIcon icon={Icon} className="city-icon" />
              </div>
              <span className="city-name">{city}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TopCitiesSuppliers;
