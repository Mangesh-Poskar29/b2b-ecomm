import React from 'react';
import { useParams } from 'react-router-dom';
import './BrandDetails.css';

import asianPaintsProduct1 from '../../assets/Brands/Brand Details/product1.png';
import asianPaintsProduct2 from '../../assets/Brands/Brand Details/product2.png';
import asianPaintsProduct3 from '../../assets/Brands/Brand Details/product3.png';
import asianPaintsProduct4 from '../../assets/Brands/Brand Details/product4.png';

import threeMProduct1 from '../../assets/Brands/Brand Details/3m-product1.png';
import threeMProduct2 from '../../assets/Brands/Brand Details/3m-product2.png';
import threeMProduct3 from '../../assets/Brands/Brand Details/3m-product3.png';

import caterpillarProduct1 from '../../assets/Brands/Brand Details/caterpillar-product1.png';
import caterpillarProduct2 from '../../assets/Brands/Brand Details/caterpillar-product2.png';
import caterpillarProduct3 from '../../assets/Brands/Brand Details/caterpillar-product3.png';

import exxonmobilProduct1 from '../../assets/Brands/Brand Details/exxonmobil-product1.png';
import exxonmobilProduct2 from '../../assets/Brands/Brand Details/exxonmobil-product2.png';
import exxonmobilProduct3 from '../../assets/Brands/Brand Details/exxonmobil-product3.png';

import shellProduct1 from '../../assets/Brands/Brand Details/shell-product1.png';
import shellProduct2 from '../../assets/Brands/Brand Details/shell-product2.png';
import shellProduct3 from '../../assets/Brands/Brand Details/shell-product3.png';

import canonProduct1 from '../../assets/Brands/Brand Details/canon-product1.png';
import canonProduct2 from '../../assets/Brands/Brand Details/canon-product2.png';
import canonProduct3 from '../../assets/Brands/Brand Details/canon-product3.png';

import hulProduct1 from '../../assets/Brands/Brand Details/hul-product1.png';
import hulProduct2 from '../../assets/Brands/Brand Details/hul-product2.png';
import hulProduct3 from '../../assets/Brands/Brand Details/hul-product3.png';

import pidiliteProduct1 from '../../assets/Brands/Brand Details/pidilite-product1.png';
import pidiliteProduct2 from '../../assets/Brands/Brand Details/pidilite-product2.png';
import pidiliteProduct3 from '../../assets/Brands/Brand Details/pidilite-product3.png';

import philipsProduct1 from '../../assets/Brands/Brand Details/philips-product1.png';
import philipsProduct2 from '../../assets/Brands/Brand Details/philips-product2.png';
import philipsProduct3 from '../../assets/Brands/Brand Details/philips-product3.png';

import jindalPantherProduct1 from '../../assets/Brands/Brand Details/jindalpanther-product1.png';
import jindalPantherProduct2 from '../../assets/Brands/Brand Details/jindalpanther-product2.png';
import jindalPantherProduct3 from '../../assets/Brands/Brand Details/jindalpanther-product3.png';

import tataTisconProduct1 from '../../assets/Brands/Brand Details/tata-tiscon-product1.png';
import tataTisconProduct2 from '../../assets/Brands/Brand Details/tata-tiscon-product2.png';
import tataTisconProduct3 from '../../assets/Brands/Brand Details/tata-tiscon-product3.png';

import schneiderElectricProduct1 from '../../assets/Brands/Brand Details/schneider-electric-product1.png';
import schneiderElectricProduct2 from '../../assets/Brands/Brand Details/schneider-electric-product2.png';
import schneiderElectricProduct3 from '../../assets/Brands/Brand Details/schneider-electric-product3.png';

// Brand details data
const brandDetails = {
  'asian-paints': {
    name: 'Asian Paints Limited',
    location: 'Mumbai, Maharashtra',
    gst: '27AAACA3622K1ZV',
    rating: '4.6/5',
    products: [
      { name: 'Asian Paints ezyCR8 Ingenio PU Spray Matt', imgSrc: asianPaintsProduct1 },
      { name: '8pc Screwdriver Set', imgSrc: asianPaintsProduct2 },
      { name: '800W Paint Sprayer', imgSrc: asianPaintsProduct3 },
      { name: '6 Inch Long Nose Pliers', imgSrc: asianPaintsProduct4 },
    ],
    about: `The company has come a long way since its small beginnings in 1942. It was set up as a partnership firm by four friends who were willing to take on the world's biggest, most famous paint companies operating in India at that time. Over the course of 25 years, Asian Paints became a corporate force and India's leading paints company. Driven by its strong consumer-focus and innovative spirit, the company has been the market leader in paints since 1967. Today, it is double the size of any other paint company in India.`,
    businessType: 'Manufacturer',
    employees: '501 to 1000 People',
    establishmentYear: '1942',
    turnover: 'Rs. 1000 - 5000 Crore',
    legalStatus: 'Limited Company (Ltd./Pvt.Ltd.)',
  },
  '3m': {
    name: '3M India Limited',
    location: 'Bengaluru, Karnataka',
    gst: '29AAACA2565M1Z7',
    rating: '4.5/5',
    products: [
      { name: '3M Protective Respirator', imgSrc: threeMProduct1 },
      { name: '3M Double-Sided Tape', imgSrc: threeMProduct2 },
      { name: '3M Car Polish', imgSrc: threeMProduct3 },
    ],
    about: `3M India is a diversified technology company that offers products in healthcare, safety, graphics, electronics, and energy. The company’s innovative solutions are used in homes, businesses, schools, hospitals, and more.`,
    businessType: 'Manufacturer',
    employees: '1001 to 5000 People',
    establishmentYear: '1987',
    turnover: 'Rs. 5000 - 10000 Crore',
    legalStatus: 'Limited Company (Ltd./Pvt.Ltd.)',
  },
  'caterpillar': {
    name: 'Caterpillar India Private Limited',
    location: 'Chennai, Tamil Nadu',
    gst: '33AAACC2658K1Z5',
    rating: '4.7/5',
    products: [
      { name: 'Caterpillar Diesel Generator', imgSrc: caterpillarProduct1 },
      { name: 'Caterpillar Hydraulic Excavator', imgSrc: caterpillarProduct2 },
      { name: 'Caterpillar Wheel Loader', imgSrc: caterpillarProduct3 },
    ],
    about: `Caterpillar has been a leader in earthmoving equipment for nearly a century, offering solutions in construction, mining, and more. Their products are recognized for durability, efficiency, and high performance.`,
    businessType: 'Manufacturer',
    employees: '5001 to 10000 People',
    establishmentYear: '1977',
    turnover: 'Rs. 10000 - 25000 Crore',
    legalStatus: 'Private Limited Company',
  },
  'exxonmobil': {
    name: 'ExxonMobil Lubricants Pvt Ltd',
    location: 'Gurgaon, Haryana',
    gst: '06AAACD1665E1Z5',
    rating: '4.6/5',
    products: [
      { name: 'Mobil 1 Synthetic Motor Oil', imgSrc: exxonmobilProduct1 },
      { name: 'Mobil Delvac Diesel Engine Oil', imgSrc: exxonmobilProduct2 },
      { name: 'Mobil Super 1000', imgSrc: exxonmobilProduct3 },
    ],
    about: `ExxonMobil is one of the largest publicly traded international oil and gas companies in the world, providing energy that helps underpin growing economies and improve living standards around the globe.`,
    businessType: 'Manufacturer',
    employees: '1001 to 5000 People',
    establishmentYear: '1911',
    turnover: 'Rs. 25000+ Crore',
    legalStatus: 'Private Limited Company',
  },
  'shell': {
    name: 'Shell India Markets Private Limited',
    location: 'Bengaluru, Karnataka',
    gst: '29AABCA7860F1Z5',
    rating: '4.5/5',
    products: [
      { name: 'Shell Helix Ultra 5W-40', imgSrc: shellProduct1 },
      { name: 'Shell Advance 4T Ultra 10W-40', imgSrc: shellProduct2 },
      { name: 'Shell Spirax S2 G 80W-90', imgSrc: shellProduct3 },
    ],
    about: `Shell is a global group of energy and petrochemical companies with an aim to meet the world's growing need for energy in ways that are economically, environmentally, and socially responsible.`,
    businessType: 'Manufacturer',
    employees: '1001 to 5000 People',
    establishmentYear: '1928',
    turnover: 'Rs. 10000 - 25000 Crore',
    legalStatus: 'Private Limited Company',
  },
  'canon': {
    name: 'Canon India Pvt Ltd',
    location: 'Gurgaon, Haryana',
    gst: '06AAACC4480K1ZT',
    rating: '4.4/5',
    products: [
      { name: 'Canon EOS 5D Mark IV', imgSrc: canonProduct1 },
      { name: 'Canon EF 24-70mm f/2.8L II USM', imgSrc: canonProduct2 },
      { name: 'Canon PIXMA G6020', imgSrc: canonProduct3 },
    ],
    about: `Canon is a leading provider of imaging solutions, including cameras, camcorders, printers, and scanners. Known for innovation, Canon is committed to enhancing the quality of life and work through technology.`,
    businessType: 'Manufacturer',
    employees: '1001 to 5000 People',
    establishmentYear: '1997',
    turnover: 'Rs. 5000 - 10000 Crore',
    legalStatus: 'Private Limited Company',
  },
  'hul': {
    name: 'Hindustan Unilever Limited',
    location: 'Mumbai, Maharashtra',
    gst: '27AAACH1147H1Z8',
    rating: '4.7/5',
    products: [
      { name: 'Lux International Soap', imgSrc: hulProduct1 },
      { name: 'Dove Nourishing Body Wash', imgSrc: hulProduct2 },
      { name: 'Surf Excel Matic', imgSrc: hulProduct3 },
    ],
    about: `Hindustan Unilever Limited is a consumer goods company based in India and is a subsidiary of Unilever, a British company. It offers products in categories like food, beverages, cleaning agents, personal care, and water purifiers.`,
    businessType: 'Manufacturer',
    employees: '5001 to 10000 People',
    establishmentYear: '1931',
    turnover: 'Rs. 25000+ Crore',
    legalStatus: 'Public Limited Company',
  },
  'pidilite': {
    name: 'Pidilite Industries Limited',
    location: 'Mumbai, Maharashtra',
    gst: '27AAACP1463J1ZD',
    rating: '4.7/5',
    products: [
      { name: 'Fevicol SH Synthetic Resin Adhesive', imgSrc: pidiliteProduct1 },
      { name: 'Dr. Fixit Waterproofing', imgSrc: pidiliteProduct2 },
      { name: 'M-Seal Phataphat', imgSrc: pidiliteProduct3 },
    ],
    about: `Pidilite Industries Limited is a pioneer in consumer and specialities chemicals in India. Their brand, Fevicol, has become synonymous with adhesives in India.`,
    businessType: 'Manufacturer',
    employees: '1001 to 5000 People',
    establishmentYear: '1959',
    turnover: 'Rs. 5000 - 10000 Crore',
    legalStatus: 'Public Limited Company',
  },
  'philips': {
    name: 'Philips India Limited',
    location: 'Gurgaon, Haryana',
    gst: '06AAACT4068R1ZY',
    rating: '4.5/5',
    products: [
      { name: 'Philips Trimmer BT1212/15', imgSrc: philipsProduct1 },
      { name: 'Philips LED Bulb 9W', imgSrc: philipsProduct2 },
      { name: 'Philips Air Fryer', imgSrc: philipsProduct3 },
    ],
    about: `Philips India Limited is a subsidiary of Royal Philips of the Netherlands, a leading health technology company focused on improving people's health and enabling better outcomes across the health continuum.`,
    businessType: 'Manufacturer',
    employees: '1001 to 5000 People',
    establishmentYear: '1930',
    turnover: 'Rs. 5000 - 10000 Crore',
    legalStatus: 'Limited Company (Ltd./Pvt.Ltd.)',
  },
  'jindal-panther': {
    name: 'Jindal Panther Cement',
    location: 'New Delhi, Delhi',
    gst: '07AAACC5862C1ZT',
    rating: '4.3/5',
    products: [
      { name: 'Jindal Panther Cement PPC', imgSrc: jindalPantherProduct1 },
      { name: 'Jindal Panther TMT Rebars', imgSrc: jindalPantherProduct2 },
      { name: 'Jindal Panther Cement OPC', imgSrc: jindalPantherProduct3 },
    ],
    about: `Jindal Panther Cement is a subsidiary of Jindal Steel and Power Ltd. They produce high-quality cement that caters to both residential and commercial construction needs.`,
    businessType: 'Manufacturer',
    employees: '1001 to 5000 People',
    establishmentYear: '2012',
    turnover: 'Rs. 1000 - 5000 Crore',
    legalStatus: 'Private Limited Company',
  },
  'tata-tiscon': {
    name: 'Tata Tiscon',
    location: 'Mumbai, Maharashtra',
    gst: '27AAACT2803M1ZY',
    rating: '4.8/5',
    products: [
      { name: 'Tata Tiscon 500D TMT Bars', imgSrc: tataTisconProduct1 },
      { name: 'Tata Tiscon SD TMT Bars', imgSrc: tataTisconProduct2 },
      { name: 'Tata Tiscon Superlinks', imgSrc: tataTisconProduct3 },
    ],
    about: `Tata Tiscon is India’s best-known rebar brand. With over two decades of trust and quality, Tata Tiscon provides the strength to a wide range of residential, commercial, and infrastructure projects.`,
    businessType: 'Manufacturer',
    employees: '5001 to 10000 People',
    establishmentYear: '2000',
    turnover: 'Rs. 25000+ Crore',
    legalStatus: 'Public Limited Company',
  },
  'schneider-electric': {
    name: 'Schneider Electric India Pvt Ltd',
    location: 'Gurgaon, Haryana',
    gst: '06AABCS0777E1ZP',
    rating: '4.7/5',
    products: [
      { name: 'Schneider Electric Light Switch', imgSrc: schneiderElectricProduct1 },
      { name: 'Schneider Electric Circuit Breaker', imgSrc: schneiderElectricProduct2 },
      { name: 'Schneider Electric UPS', imgSrc: schneiderElectricProduct3 },
    ],
    about: `Schneider Electric is a global specialist in energy management and automation, delivering innovative solutions for homes, buildings, data centers, infrastructure, and industries.`,
    businessType: 'Manufacturer',
    employees: '10001+ People',
    establishmentYear: '1961',
    turnover: 'Rs. 10000 - 25000 Crore',
    legalStatus: 'Private Limited Company',
  },
};

const phoneNumber = '+91-22-12345678';


const BrandDetails = () => {
  const { brandId } = useParams();
  const brand = brandDetails[brandId];

  if (!brand) {
    return <div>Brand not found</div>;
  }

  return (
    <div className="BRbrand-detail-container">
      <h1>{brand.name}</h1>
      <p>{brand.location} | GST: {brand.gst} | Rating: {brand.rating}</p>
      <div className="BRproducts-slider">
        {brand.products.map((product, index) => (
          <div key={index} className="BRproduct-item">
            <img src={product.imgSrc} alt={product.name} />
            <p>{product.name}</p>
          </div>
        ))}
      </div>
      <h2>About Us</h2>
      <p>{brand.about}</p>
      <div className="BRbrand-info">
        <p>Nature of Business: {brand.businessType}</p>
        <p>Total Number of Employees: {brand.employees}</p>
        <p>Year of Establishment: {brand.establishmentYear}</p>
        <p>Annual Turnover: {brand.turnover}</p>
        <p>Legal Status of Firm: {brand.legalStatus}</p>
        <p>GST Number: {brand.gst}</p>
        <p>Phone Number: {phoneNumber}</p>
        <button className="BRsend-email-button">Send Email</button>
      </div>
    </div>
  );
};

export default BrandDetails;
