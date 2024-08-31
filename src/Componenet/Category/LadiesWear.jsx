import React, { useState } from "react";
import "./LadiesWear.css";
import Product1 from "../../assets/product1.png";
import Product2 from "../../assets/product2.png";
import Product3 from "../../assets/product3.png";
import Product4 from "../../assets/product4.png";
import Product5 from "../../assets/product5.png";
import Product6 from "../../assets/product6.png";
import Product7 from "../../assets/product7.png";
import Product8 from "../../assets/product8.png";
import ProductModal from "./ProductModal";

function LadiesWear() {
  const products = [
    {
      name: "Ethnic Festive Wear Girls Halter Neck Printed Cotton",
      price: "₹1485",
      oldPrice: "₹1,625",
      discount: "-8%",
      image: Product1,
      supplier: {
        name: "R & R Apparels",
        location: "Sector 63, Noida, Uttar Pradesh",
        verified: true,
      },
      additionalDetails: {
        size: "M",
        fabric: "Cotton",
        washCare: "Machine Wash",
        type: "Festive Wear",
        color: "Red",
        work: "Printed",
        dispatch: "2 days",
        weight: "500 g",
      },
    },
    {
      name: "Navy Blue Velvet Kurta With Bell Bottom Pants",
      price: "₹2290",
      oldPrice: "₹4,600",
      discount: "-50%",
      image: Product2,
      supplier: {
        name: "Fashion Hub",
        location: "Delhi, India",
        verified: true,
      },
      additionalDetails: {
        size: "L",
        fabric: "Velvet",
        washCare: "Dry Clean Only",
        type: "Kurta Set",
        color: "Navy Blue",
        work: "Embroidery",
        dispatch: "3 days",
        weight: "600 g",
      },
    },
    {
      name: "Alcis Women Activewear Jacket",
      price: "₹2299",
      image: Product3,
      supplier: {
        name: "Alcis",
        location: "Mumbai, Maharashtra",
        verified: true,
      },
      additionalDetails: {
        size: "S",
        fabric: "Polyester",
        washCare: "Machine Wash",
        type: "Activewear",
        color: "Black",
        work: "None",
        dispatch: "2 days",
        weight: "350 g",
      },
    },
    {
      name: "*trendy Partywear Women Dresses - Black, XXL",
      price: "₹650",
      oldPrice: "₹1,499",
      discount: "-56%",
      image: Product4,
      supplier: {
        name: "Trendy Wear",
        location: "Pune, Maharashtra",
        verified: true,
      },
      additionalDetails: {
        size: "XXL",
        fabric: "Georgette",
        washCare: "Hand Wash",
        type: "Partywear Dress",
        color: "Black",
        work: "Embellished",
        dispatch: "4 days",
        weight: "400 g",
      },
    },
    {
      name: "BLUEBIRD WOMEN'S BLACK AND WHITE...",
      price: "₹1199",
      oldPrice: "₹1,899",
      discount: "-36%",
      image: Product5,
      supplier: {
        name: "Bluebird",
        location: "Hyderabad, Telangana",
        verified: true,
      },
      additionalDetails: {
        size: "M",
        fabric: "Cotton Blend",
        washCare: "Machine Wash",
        type: "Casual Dress",
        color: "Black and White",
        work: "Printed",
        dispatch: "2 days",
        weight: "300 g",
      },
    },
    {
      name: "Black And Golden Jacquard Banarasi Brocade Straight...",
      price: "₹3250",
      oldPrice: "₹6,499",
      discount: "-49%",
      image: Product6,
      supplier: {
        name: "Royal Weaves",
        location: "Jaipur, Rajasthan",
        verified: true,
      },
      additionalDetails: {
        size: "L",
        fabric: "Banarasi Brocade",
        washCare: "Dry Clean Only",
        type: "Ethnic Wear",
        color: "Black and Golden",
        work: "Jacquard",
        dispatch: "5 days",
        weight: "800 g",
      },
    },
    {
      name: "Yellow Embroidered Schiffli Suit For Women",
      price: "₹2690",
      oldPrice: "₹4,299",
      discount: "-37%",
      image: Product7,
      supplier: {
        name: "Embroidery Haven",
        location: "Lucknow, Uttar Pradesh",
        verified: true,
      },
      additionalDetails: {
        size: "M",
        fabric: "Schiffli",
        washCare: "Hand Wash",
        type: "Suit",
        color: "Yellow",
        work: "Embroidered",
        dispatch: "3 days",
        weight: "600 g",
      },
    },
    {
      name: "Cotton Blend Solid Purple Women's Kurta Set",
      price: "₹799",
      oldPrice: "₹999",
      discount: "-20%",
      image: Product8,
      supplier: {
        name: "Cotton Comforts",
        location: "Ahmedabad, Gujarat",
        verified: true,
      },
      additionalDetails: {
        size: "L",
        fabric: "Cotton Blend",
        washCare: "Machine Wash",
        type: "Kurta Set",
        color: "Purple",
        work: "None",
        dispatch: "2 days",
        weight: "400 g",
      },
    },
  ];

  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="ladies-wear-page">
      <h1>
        See results about <span>Ladies Wear</span>
      </h1>

      <div className="category-tags">
        <button>Ladies Wear</button>
        <button>Ladies Casual Wear</button>
        <button>Women Clothes</button>
        <button>Ladies Readymade Garments</button>
        <button>Punjabi Dress</button>
        <button>Ladies Koti</button>
        <button>Indian Dresses</button>
        <button>Ladies Waistcoats</button>
      </div>

      <div className="sort-options">
        <p>Sort By:</p>
        <button>Price - Low to High</button>
        <button>Price - High to Low</button>
      </div>

      <div className="products-grid">
        {products.map((product, index) => (
          <div
            className="product-card"
            key={index}
            onClick={() => handleProductClick(product)}
          >
            <img src={product.image} alt={product.name} />
            <p className="product-name">{product.name}</p>
            <div className="product-pricing">
              <span className="current-price">{product.price}</span>
              {product.oldPrice && (
                <span className="old-price">{product.oldPrice}</span>
              )}
              {product.discount && (
                <span className="discount">{product.discount}</span>
              )}
            </div>
          </div>
        ))}
      </div>
      {selectedProduct && (
        <ProductModal product={selectedProduct} closeModal={closeModal} />
      )}
    </div>
  );
}

export default LadiesWear;
