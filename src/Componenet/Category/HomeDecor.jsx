import React, { useState } from "react";
import "./LadiesWear.css";
import Product1 from "../../assets/product47.png";
import Product2 from "../../assets/product48.png";
import Product3 from "../../assets/product49.png";
import Product4 from "../../assets/product50.png";
import Product5 from "../../assets/product51.png";
import Product6 from "../../assets/product52.png";

import ProductModal from "./ProductModal";

function HomeDecor() {
  const products = [
    {
      name: "Guara Nitai Idol Showpiece For Home Decor - 12 Inch",
      price: "₹2499",
      oldPrice: "",
      discount: "-50%",
      image: Product1,
      supplier: {
        name: "Glorious World Creations",
        location: "India",
        verified: true,
      },
      additionalDetails: {
        type: "Home Decor",
        material: "Resin",
        dispatch: "2 days",
      },
    },
    {
      name: "Khatu Shyam Pocket Temple (24 Karat Gold Coated)",
      price: "₹599",
      oldPrice: "",
      discount: "",
      image: Product2,
      supplier: {
        name: "ShopOn",
        location: "India",
        verified: true,
      },
      additionalDetails: {
        type: "Religious Decor",
        material: "Metal",
        dispatch: "2 days",
      },
    },
    {
      name: "Islamic Quote and Sign Home Decor | Golden Acrylic",
      price: "₹399",
      oldPrice: "",
      discount: "-60%",
      image: Product3,
      supplier: {
        name: "A To Z Overseas",
        location: "India",
        verified: true,
      },
      additionalDetails: {
        type: "Wall Art",
        material: "Acrylic",
        dispatch: "2 days",
      },
    },
    {
      name: "Musicians Decorative Figurines | Home Decor",
      price: "₹2199",
      oldPrice: "",
      discount: "-12%",
      image: Product4,
      supplier: {
        name: "Moiopanda Exim Private Limited",
        location: "India",
        verified: true,
      },
      additionalDetails: {
        type: "Decorative Figurine",
        material: "Polyresin",
        dispatch: "2 days",
      },
    },
    {
      name: "Varalakshmi Decoration Set",
      price: "₹1750",
      oldPrice: "",
      discount: "",
      image: Product5,
      supplier: {
        name: "Puja Celebrations",
        location: "India",
        verified: true,
      },
      additionalDetails: {
        type: "Decoration Set",
        material: "Fabric",
        dispatch: "2 days",
      },
    },
    {
      name: "Rose Simulation Flower Three-layer Flower",
      price: "₹699",
      oldPrice: "",
      discount: "-6%",
      image: Product6,
      supplier: {
        name: "Bakematic Digital Private Limited",
        location: "India",
        verified: true,
      },
      additionalDetails: {
        type: "Artificial Flower",
        material: "Silk",
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
        See results about <span>Home Decor</span>
      </h1>

      <div className="category-tags">
        <button>Home Decoration Pieces</button>
        <button>Lord Ganesh</button>
        <button>Hanuman</button>
        <button>Lord Images</button>
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

export default HomeDecor;
