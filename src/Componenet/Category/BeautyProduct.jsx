import React, { useState } from "react";
import "./LadiesWear.css";
import Product1 from "../../assets/product24.png";
import Product2 from "../../assets/product25.png";
import Product3 from "../../assets/product26.png";
import Product4 from "../../assets/product27.png";
import Product5 from "../../assets/product28.png";
import Product6 from "../../assets/product29.png";

import ProductModal from "./ProductModal";

function BeautyProduct() {
  const products = [
    {
      name: "Forever Living Products Forever Aloe Vera Gel (1L)",
      price: "₹1237",
      oldPrice: "₹2,061",
      discount: "-39%",
      image: Product1,
      supplier: {
        name: "THE INDIAN LIFESTYLE STORE",
        location: "India",
        verified: true,
      },
      additionalDetails: {
        size: "1L",
        type: "Aloe Vera Gel",
        dispatch: "2 days",
        weight: "1.2 kg",
      },
    },
    {
      name: "Swiss Beauty Smooth Pearl Primer, 30ml",
      price: "₹420",
      oldPrice: "₹749",
      discount: "-43%",
      image: Product2,
      supplier: {
        name: "WholesaleBazzer",
        location: "India",
        verified: true,
      },
      additionalDetails: {
        size: "30ml",
        type: "Primer",
        dispatch: "2 days",
        weight: "50 g",
      },
    },
    {
      name: "Irregular Period Solution Herbal Kit - 1 Kit With Consultation",
      price: "₹960",
      image: Product3,
      supplier: {
        name: "Kaya Science",
        location: "India",
        verified: true,
      },
      additionalDetails: {
        type: "Herbal Kit",
        dispatch: "2 days",
        weight: "200 g",
      },
    },
    {
      name: "Golden Pearl Beauty Cream 28g",
      price: "₹325",
      oldPrice: "₹400",
      discount: "-18%",
      image: Product4,
      supplier: {
        name: "Livysh",
        location: "India",
        verified: true,
      },
      additionalDetails: {
        size: "28g",
        type: "Beauty Cream",
        dispatch: "2 days",
        weight: "50 g",
      },
    },
    {
      name: "Hair Dryer Cap Beauty Products",
      price: "₹285",
      oldPrice: "₹800",
      discount: "-64%",
      image: Product5,
      supplier: {
        name: "Putus Media",
        location: "India",
        verified: true,
      },
      additionalDetails: {
        type: "Hair Dryer Cap",
        dispatch: "2 days",
        weight: "300 g",
      },
    },
    {
      name: "Hair Removal Wax Warmer Roll On Heater Machine With Wax Strips",
      price: "₹698",
      oldPrice: "₹948",
      discount: "-26%",
      image: Product6,
      supplier: {
        name: "Deal IND ( A Brand of Store APT )",
        location: "India",
        verified: true,
      },
      additionalDetails: {
        type: "Wax Warmer",
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
        See results about <span>Beauty Product</span>
      </h1>

      <div className="category-tags">
        <button>Beauty Cosmetics</button>
        <button>Cosmetics</button>
        <button>Salon equipment</button>
        <button>Parlour chair</button>
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

export default BeautyProduct;
