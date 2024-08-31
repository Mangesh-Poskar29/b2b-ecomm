import React, { useState } from "react";
import "./LadiesWear.css";
import Product1 from "../../assets/product53.png";
import Product2 from "../../assets/product54.png";
import Product3 from "../../assets/product55.png";
import Product4 from "../../assets/product56.png";
import Product5 from "../../assets/product57.png";
import Product6 from "../../assets/product58.png";

import ProductModal from "./ProductModal";

function Jewellry() {
  const products = [
    {
      name: "Neck Jewelry New Design",
      price: "₹230",
      oldPrice: "",
      discount: "-34%",
      image: Product1,
      supplier: {
        name: "nsss fashion store",
        location: "India",
        verified: false,
      },
      additionalDetails: {
        type: "Neck Jewelry",
        material: "Unknown",
        dispatch: "2 days",
      },
    },
    {
      name: "Artificial Jewellery",
      price: "₹49",
      oldPrice: "",
      discount: "",
      image: Product2,
      supplier: {
        name: "Aradhya Fashion Jewellery",
        location: "India",
        verified: false,
      },
      additionalDetails: {
        type: "Jewellery",
        material: "Unknown",
        dispatch: "2 days",
      },
    },
    {
      name: "Deep Red And Golden Designer Pendant Set",
      price: "₹399",
      oldPrice: "₹299",
      discount: "-69%",
      image: Product3,
      supplier: {
        name: "Liv-ysh",
        location: "India",
        verified: false,
      },
      additionalDetails: {
        type: "Pendant Set",
        material: "Unknown",
        dispatch: "2 days",
      },
    },
    {
      name: "Rhinestones Studded Geometrical Shapes Gold Oval Pendant Set",
      price: "₹479",
      oldPrice: "",
      discount: "",
      image: Product4,
      supplier: {
        name: "Indian Petals",
        location: "India",
        verified: false,
      },
      additionalDetails: {
        type: "Pendant Set",
        material: "Rhinestones",
        dispatch: "2 days",
      },
    },
    {
      name: "Traditional Rajwadi Ethnic Kada Set Of 2",
      price: "₹143",
      oldPrice: "",
      discount: "-50%",
      image: Product5,
      supplier: {
        name: "Trendisia Lifestyles LLP",
        location: "India",
        verified: true,
      },
      additionalDetails: {
        type: "Kada Set",
        material: "Ethnic",
        dispatch: "2 days",
      },
    },
    {
      name: "Pink Color Big Size Jhumka American Diamond Necklace",
      price: "₹1085",
      oldPrice: "",
      discount: "-37%",
      image: Product6,
      supplier: {
        name: "Jaipur Mart",
        location: "India",
        verified: true,
      },
      additionalDetails: {
        type: "Jhumka Necklace",
        material: "American Diamond",
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
        See results about <span>Artificial Jewellry</span>
      </h1>

      <div className="category-tags">
        <button>Gold Plated Jewellery</button>
        <button>Artificial Jewellery</button>
        <button>Lord Pendants</button>
        <button>Rings</button>
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

export default Jewellry;
