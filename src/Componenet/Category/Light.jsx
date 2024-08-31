import React, { useState } from "react";
import "./LadiesWear.css";
import Product1 from "../../assets/product59.png";
import Product2 from "../../assets/product60.png";
import Product3 from "../../assets/product61.png";
import Product4 from "../../assets/product62.png";
import Product5 from "../../assets/product63.png";
import Product6 from "../../assets/product64.png";

import ProductModal from "./ProductModal";

function Light() {
  const products = [
    {
      name: "Battery Operated LED String Lights (Fairy Light) - 2.5m",
      price: "₹69",
      oldPrice: "",
      discount: "-13%",
      image: Product1,
      supplier: {
        name: "Parshwa Traders",
        location: "India",
        verified: false,
      },
      additionalDetails: {
        type: "LED String Lights",
        material: "LED",
        dispatch: "2 days",
      },
    },
    {
      name: "Petal-Shaped LED Clip-on Book Light",
      price: "₹999",
      oldPrice: "₹999",
      discount: "",
      image: Product2,
      supplier: {
        name: "My Bear Hugs",
        location: "India",
        verified: false,
      },
      additionalDetails: {
        type: "Clip-on Book Light",
        material: "LED",
        dispatch: "2 days",
      },
    },
    {
      name: "Solar Power LED Light",
      price: "₹399",
      oldPrice: "",
      discount: "",
      image: Product3,
      supplier: {
        name: "Fizzi.Shcp",
        location: "India",
        verified: false,
      },
      additionalDetails: {
        type: "Solar LED Light",
        material: "LED",
        dispatch: "2 days",
      },
    },
    {
      name: "FEDUS USB Bulb for Power Bank, USB LED Light",
      price: "₹49",
      oldPrice: "",
      discount: "",
      image: Product4,
      supplier: {
        name: "Cheeku Technologies",
        location: "India",
        verified: false,
      },
      additionalDetails: {
        type: "USB Bulb",
        material: "LED",
        dispatch: "2 days",
      },
    },
    {
      name: "Selfie Ring Light, Clip-On Ring Light For Video",
      price: "₹449",
      oldPrice: "",
      discount: "-55%",
      image: Product5,
      supplier: {
        name: "Honda",
        location: "India",
        verified: false,
      },
      additionalDetails: {
        type: "Ring Light",
        material: "LED",
        dispatch: "2 days",
      },
    },
    {
      name: "Tyfy 12 Inch Ring Light With 7ft Adjustable Light Stand",
      price: "₹1949",
      oldPrice: "",
      discount: "-51%",
      image: Product6,
      supplier: {
        name: "Cowboy Stores",
        location: "India",
        verified: false,
      },
      additionalDetails: {
        type: "Ring Light with Stand",
        material: "LED",
        dispatch: "2 days",
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
        See results about <span>Light</span>
      </h1>

      <div className="category-tags">
        <button>Remote Controller Buld</button>
        <button>Reading Lamp</button>
        <button>Blue Light</button>
        <button>Solar Power</button>
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

export default Light;
