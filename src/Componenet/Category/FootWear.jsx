import React, { useState } from "react";
import "./LadiesWear.css";
import Product1 from "../../assets/product16.png";
import Product2 from "../../assets/product17.png";
import Product3 from "../../assets/product18.png";
import Product4 from "../../assets/product19.png";
import Product5 from "../../assets/product20.png";
import Product6 from "../../assets/product21.png";
import Product7 from "../../assets/product22.png";
import ProductModal from "./ProductModal";

function FootWear() {
  const products = [
    {
      name: "Men's Leather Oxford Shoes - Black",
      price: "₹2999",
      oldPrice: "₹4,499",
      discount: "-33%",
      image: Product1,
      supplier: {
        name: "Elite Footwear",
        location: "Delhi, India",
        verified: true,
      },
      additionalDetails: {
        size: "42",
        material: "Leather",
        washCare: "Wipe Clean",
        type: "Oxford Shoes",
        color: "Black",
        design: "Classic",
        dispatch: "3 days",
        weight: "700 g",
      },
    },
    {
      name: "Women's Strappy Sandals - Gold",
      price: "₹1499",
      oldPrice: "₹2,199",
      discount: "-32%",
      image: Product2,
      supplier: {
        name: "Glamour Steps",
        location: "Mumbai, Maharashtra",
        verified: true,
      },
      additionalDetails: {
        size: "37",
        material: "Synthetic",
        washCare: "Wipe Clean",
        type: "Sandals",
        color: "Gold",
        design: "Strappy",
        dispatch: "2 days",
        weight: "300 g",
      },
    },
    {
      name: "Men's Casual Sneakers - Navy Blue",
      price: "₹1999",
      oldPrice: "₹3,299",
      discount: "-39%",
      image: Product3,
      supplier: {
        name: "Sneaker Hub",
        location: "Bangalore, Karnataka",
        verified: true,
      },
      additionalDetails: {
        size: "41",
        material: "Canvas",
        washCare: "Machine Wash",
        type: "Sneakers",
        color: "Navy Blue",
        design: "Casual",
        dispatch: "2 days",
        weight: "500 g",
      },
    },
    {
      name: "Women's Flat Slippers - Pink",
      price: "₹899",
      oldPrice: "1,399",
      discount: "-36%",
      image: Product4,
      supplier: {
        name: "Cozy Feet",
        location: "Hyderabad, Telangana",
        verified: true,
      },
      additionalDetails: {
        size: "38",
        material: "Foam",
        washCare: "Wipe Clean",
        type: "Slippers",
        color: "Pink",
        design: "Flat",
        dispatch: "2 days",
        weight: "200 g",
      },
    },
    {
      name: "Men's Leather Sandals - Brown",
      price: "1799",
      oldPrice: "₹2,799",
      discount: "-36%",
      image: Product5,
      supplier: {
        name: "Comfort Walk",
        location: "Chennai, Tamil Nadu",
        verified: true,
      },
      additionalDetails: {
        size: "43",
        material: "Leather",
        washCare: "Wipe Clean",
        type: "Sandals",
        color: "Brown",
        design: "Open-Toe",
        dispatch: "3 days",
        weight: "400 g",
      },
    },
    {
      name: "Women's Slip-On Loafers - Beige",
      price: "₹1599",
      oldPrice: "₹2,299",
      discount: "-30%",
      image: Product6,
      supplier: {
        name: "Chic Walk",
        location: "Pune, Maharashtra",
        verified: true,
      },
      additionalDetails: {
        size: "36",
        material: "Suede",
        washCare: "Wipe Clean",
        type: "Loafers",
        color: "Beige",
        design: "Slip-On",
        dispatch: "2 days",
        weight: "350 g",
      },
    },
    {
      name: "Men's Sports Sandals - Black",
      price: "₹2499",
      oldPrice: "₹3,799",
      discount: "-34%",
      image: Product7,
      supplier: {
        name: "Sporty Feet",
        location: "Kolkata, West Bengal",
        verified: true,
      },
      additionalDetails: {
        size: "42",
        material: "Mesh",
        washCare: "Machine Wash",
        type: "Sports Sandals",
        color: "Black",
        design: "Adjustable Straps",
        dispatch: "3 days",
        weight: "500 g",
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
        See results about <span>Footwear</span>
      </h1>

      <div className="category-tags">
        <button>Women Foot Wear</button>
        <button>Rubber Foot Wear</button>
        <button>Safety Shoes</button>
        <button>Trandy Shoes</button>
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

export default FootWear;
