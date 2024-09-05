import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PremiumBrands.css';
import asianpaints from '../../assets/Brands/asianpaints-logo.png';
import threem from '../../assets/Brands/3m-logo.png';
import cat from '../../assets/Brands/caterpillar-logo.png';
import ex from '../../assets/Brands/exxonmobil-logo.png';
import shell from '../../assets/Brands/shell-logo.png';
import can from '../../assets/Brands/canon-logo.png';
import hu from '../../assets/Brands/hul-logo.png';
import pdl from '../../assets/Brands/pidilite-logo.png';
import ph from '../../assets/Brands/philips-logo.png';
import jp from '../../assets/Brands/jindalpanther-logo.png';
import tata from '../../assets/Brands/tata-tiscon-logo.png';
import se from '../../assets/Brands/schneider-electric-logo.png';

const PremiumBrands = () => {
  const navigate = useNavigate();

  const brands = [
    { id: 'asian-paints', name: 'Asian Paints', imgSrc: asianpaints },
    { id: '3m', name: '3M', imgSrc: threem },
    { id: 'caterpillar', name: 'Caterpillar', imgSrc: cat },
    { id: 'exxonmobil', name: 'ExxonMobil', imgSrc: ex },
    { id: 'shell', name: 'Shell', imgSrc: shell },
    { id: 'canon', name: 'Canon', imgSrc: can },
    { id: 'hul', name: 'Hindustan Unilever', imgSrc: hu  },
    { id: 'pidilite', name: 'Pidilite', imgSrc: pdl },
    { id: 'philips', name: 'Philips', imgSrc: ph },
    { id: 'jindal-panther', name: 'Jindal Panther', imgSrc: jp },
    { id: 'tata-tiscon', name: 'Tata Tiscon', imgSrc: tata },
    { id: 'schneider-electric', name: 'Schneider Electric', imgSrc: se },
  ];

  const handleBrandClick = (id) => {
    navigate(`/brand/${id}`);
  };

  return (
    <div className="BRpremium-brands-container">
      <h2>Explore related products from Premium Brands</h2>
      <div className="BRbrands-grid">
        {brands.map((brand, index) => (
          <div key={index} className="BRbrand-item" onClick={() => handleBrandClick(brand.id)}>
            <img src={brand.imgSrc} alt={brand.name} className="BRbrand-logo" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PremiumBrands;
