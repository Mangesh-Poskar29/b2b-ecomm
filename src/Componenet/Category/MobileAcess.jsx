import React, { useState } from "react";
import "./LadiesWear.css";
import Product1 from "../../assets/product41.png";
import Product2 from "../../assets/product42.png";
import Product3 from "../../assets/product43.png";
import Product4 from "../../assets/product44.png";
import Product5 from "../../assets/product45.png";
import Product6 from "../../assets/product46.png";

import ProductModal from "./ProductModal";

function MobileAcess() {
  const products = [
    {
      name: "Waterproof Mobile Zigm",
      price: "₹45",
      oldPrice: "",
      discount: "-25%",
      image: Product1,
      supplier: {
        name: "Ecompass LLP",
        location: "India",
        verified: true,
      },
      additionalDetails: {
        type: "Mobile Accessory",
        quality: "High-quality",
        dispatch: "2 days",
      },
    },
    {
      name: "3D Mobile Covers",
      price: "₹20",
      oldPrice: "",
      discount: "",
      image: Product2,
      supplier: {
        name: "Deeher Gifts",
        location: "India",
        verified: true,
      },
      additionalDetails: {
        type: "Mobile Cover",
        quality: "High-quality",
        dispatch: "2 days",
      },
    },
    {
      name: "Sunnylife Dz75 Support Base for Dji Om5",
      price: "₹425",
      oldPrice: "",
      discount: "",
      image: Product3,
      supplier: {
        name: "Getzget",
        location: "India",
        verified: true,
      },
      additionalDetails: {
        type: "Support Base",
        quality: "High-quality",
        dispatch: "2 days",
      },
    },
    {
      name: "Mobile Phone Holder with Easy Adjustable Rear",
      price: "₹118",
      oldPrice: "",
      discount: "-70%",
      image: Product4,
      supplier: {
        name: "Lakkad Industries",
        location: "India",
        verified: true,
      },
      additionalDetails: {
        type: "Mobile Holder",
        quality: "High-quality",
        dispatch: "2 days",
      },
    },
    {
      name: "MOZA Mini S Essential Foldable Smartphone",
      price: "₹5899",
      oldPrice: "",
      discount: "-26%",
      image: Product5,
      supplier: {
        name: "K. C. Enterprises",
        location: "India",
        verified: true,
      },
      additionalDetails: {
        type: "Smartphone Holder",
        quality: "High-quality",
        dispatch: "2 days",
      },
    },
    {
      name: "Magnifire Mobile 3D Screen",
      price: "₹55",
      oldPrice: "",
      discount: "-45%",
      image: Product6,
      supplier: {
        name: "Mozabee Enterprise",
        location: "India",
        verified: true,
      },
      additionalDetails: {
        type: "Mobile Screen Magnifier",
        quality: "High-quality",
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
        See results about <span>Mobile Accessories</span>
      </h1>

      <div className="category-tags">
        <button>Mobile Phone Accessories</button>
        <button>Wireless Accessories</button>
        <button>Mobile Cover</button>
        <button>Wired Accessories</button>
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

export default MobileAcess;
