import React, { useState } from "react";
import "./LadiesWear.css";
import Product1 from "../../assets/product30.png";
import Product2 from "../../assets/product31.png";
import Product3 from "../../assets/product32.png";
import Product4 from "../../assets/product33.png";
import Product5 from "../../assets/product34.png";
import Product6 from "../../assets/product35.png";

import ProductModal from "./ProductModal";

function CleaningSupply() {
  const products = [
    {
      name: "Powerful Sink And Drain Cleaner, Portable Powder",
      price: "₹101",
      oldPrice: "₹249",
      discount: "-59%",
      image: Product1,
      supplier: {
        name: "The Little Big Store",
        location: "India",
        verified: true,
      },
      additionalDetails: {
        type: "Sink and Drain Cleaner",
        dispatch: "2 days",
        weight: "200 g",
      },
    },
    {
      name: "0620 Home Practical Washing Brush Magic Spray",
      price: "₹110",
      oldPrice: "₹199",
      discount: "-44%",
      image: Product2,
      supplier: {
        name: "offersonlineshop.in",
        location: "India",
        verified: true,
      },
      additionalDetails: {
        type: "Washing Brush",
        dispatch: "2 days",
        weight: "150 g",
      },
    },
    {
      name: "0691 Small Multipurpose Microfiber Duster",
      price: "₹150",
      oldPrice: "₹199",
      discount: "-24%",
      image: Product3,
      supplier: {
        name: "Jaatara",
        location: "India",
        verified: true,
      },
      additionalDetails: {
        type: "Microfiber Duster",
        dispatch: "2 days",
        weight: "100 g",
      },
    },
    {
      name: "Cleaning Supplies Kitchen Handle Universal Triangular Scrubber",
      price: "₹118",
      oldPrice: "₹199",
      discount: "-40%",
      image: Product4,
      supplier: {
        name: "Aakash Enterprise",
        location: "India",
        verified: true,
      },
      additionalDetails: {
        type: "Kitchen Scrubber",
        dispatch: "2 days",
        weight: "200 g",
      },
    },
    {
      name: "Cleaning Supplies Kitchen Handle Universal Triangular Scrubber",
      price: "₹66",
      oldPrice: "₹199",
      discount: "-66%",
      image: Product5,
      supplier: {
        name: "Deodap International Private Limited",
        location: "India",
        verified: true,
      },
      additionalDetails: {
        type: "Kitchen Scrubber",
        dispatch: "2 days",
        weight: "200 g",
      },
    },
    {
      name: "7223 Cleaning Supplies Kitchen Handle Universal Triangular Scrubber",
      price: "₹108",
      oldPrice: "₹199",
      discount: "-45%",
      image: Product6,
      supplier: {
        name: "Go5 Incorporation",
        location: "India",
        verified: true,
      },
      additionalDetails: {
        type: "Kitchen Scrubber",
        dispatch: "2 days",
        weight: "200 g",
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
        See results about <span>Cleaning Supplies</span>
      </h1>

      <div className="category-tags">
        <button>A V Cleaning Supply</button>
        <button>Liquid Cleaner</button>
        <button>Household Cleaning Chemicals</button>
        <button>MCX tips</button>
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

export default CleaningSupply;
