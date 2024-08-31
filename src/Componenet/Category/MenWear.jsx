import React, { useState } from "react";
import "./LadiesWear.css";
import Product1 from "../../assets/product9.png";
import Product2 from "../../assets/product10.png";
import Product3 from "../../assets/product11.png";
import Product4 from "../../assets/product12.png";
import Product5 from "../../assets/product13.png";
import Product6 from "../../assets/product14.png";
import Product7 from "../../assets/product15.png";
import ProductModal from "./ProductModal";

function MenWear() {
  const products = [
    {
      name: "Casual Linen Shirt - Blue",
      price: "₹1499",
      oldPrice: "₹2,299",
      discount: "-35%",
      image: Product1,
      supplier: {
        name: "Linen Lux",
        location: "Bangalore, Karnataka",
        verified: true,
      },
      additionalDetails: {
        size: "M",
        fabric: "Linen",
        washCare: "Machine Wash",
        type: "Casual Shirt",
        color: "Blue",
        work: "None",
        dispatch: "2 days",
        weight: "250 g",
      },
    },
    {
      name: "Slim Fit Jeans - Dark Blue",
      price: "₹1799",
      oldPrice: "₹3,499",
      discount: "-49%",
      image: Product2,
      supplier: {
        name: "Denim World",
        location: "Delhi, India",
        verified: true,
      },
      additionalDetails: {
        size: "32",
        fabric: "Denim",
        washCare: "Machine Wash",
        type: "Jeans",
        color: "Dark Blue",
        work: "None",
        dispatch: "3 days",
        weight: "500 g",
      },
    },
    {
      name: "Formal Blazer - Grey",
      price: "₹3499",
      oldPrice: "₹5,999",
      discount: "-42%",
      image: Product3,
      supplier: {
        name: "Classy Attire",
        location: "Mumbai, Maharashtra",
        verified: true,
      },
      additionalDetails: {
        size: "L",
        fabric: "Wool Blend",
        washCare: "Dry Clean Only",
        type: "Blazer",
        color: "Grey",
        work: "None",
        dispatch: "4 days",
        weight: "700 g",
      },
    },
    {
      name: "Athletic Shorts - Black",
      price: "₹899",
      oldPrice: "₹1,399",
      discount: "-36%",
      image: Product4,
      supplier: {
        name: "Sports Gear",
        location: "Chennai, Tamil Nadu",
        verified: true,
      },
      additionalDetails: {
        size: "M",
        fabric: "Polyester",
        washCare: "Machine Wash",
        type: "Athletic Shorts",
        color: "Black",
        work: "None",
        dispatch: "2 days",
        weight: "200 g",
      },
    },
    {
      name: "Graphic T-Shirt - White",
      price: "₹599",
      oldPrice: "₹999",
      discount: "-40%",
      image: Product5,
      supplier: {
        name: "Trendy Tees",
        location: "Pune, Maharashtra",
        verified: true,
      },
      additionalDetails: {
        size: "L",
        fabric: "Cotton",
        washCare: "Machine Wash",
        type: "Graphic T-Shirt",
        color: "White",
        work: "Printed",
        dispatch: "2 days",
        weight: "150 g",
      },
    },
    {
      name: "Woolen Sweater - Maroon",
      price: "₹1299",
      oldPrice: "₹2,199",
      discount: "-41%",
      image: Product6,
      supplier: {
        name: "Warm Wear",
        location: "Shimla, Himachal Pradesh",
        verified: true,
      },
      additionalDetails: {
        size: "M",
        fabric: "Wool",
        washCare: "Hand Wash",
        type: "Sweater",
        color: "Maroon",
        work: "None",
        dispatch: "3 days",
        weight: "400 g",
      },
    },
    {
      name: "Hooded Jacket - Olive Green",
      price: "₹2199",
      oldPrice: "₹3,499",
      discount: "-37%",
      image: Product7,
      supplier: {
        name: "Urban Outfit",
        location: "Delhi, India",
        verified: true,
      },
      additionalDetails: {
        size: "L",
        fabric: "Polyester",
        washCare: "Machine Wash",
        type: "Hooded Jacket",
        color: "Olive Green",
        work: "None",
        dispatch: "4 days",
        weight: "600 g",
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
        See results about <span>Mens Wear</span>
      </h1>

      <div className="category-tags">
        <button>Mens Wear</button>
        <button>Mens Casual Wear</button>
        <button>Mens Clothes</button>
        <button>Mens Readymade Garments</button>
        <button>Wedding Wear</button>
        <button>Indian Dresses</button>
        <button>Men WinterWear</button>
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

export default MenWear;
