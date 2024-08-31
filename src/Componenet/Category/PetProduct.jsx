import React, { useState } from "react";
import "./LadiesWear.css";
import Product1 from "../../assets/product36.png";
import Product2 from "../../assets/product37.png";
import Product3 from "../../assets/product38.png";
import Product4 from "../../assets/product39.png";
import Product5 from "../../assets/product40.png";
import Product6 from "../../assets/product41.png";

import ProductModal from "./ProductModal";

function PetProduct() {
  const products = [
    {
      name: "Pedigree Adult Wet Dog Food, Chicken & Liver",
      price: "₹50",
      oldPrice: "",
      discount: "",
      image: Product1,
      supplier: {
        name: "Aikm Pharma Private Limited",
        location: "India",
        verified: true,
      },
      additionalDetails: {
        type: "Dog Food",
        dispatch: "2 days",
        weight: "200 g",
      },
    },
    {
      name: "Breed Plus Birds Health Supplement, 50g",
      price: "₹199",
      oldPrice: "₹250",
      discount: "-20%",
      image: Product2,
      supplier: {
        name: "Petzlife World",
        location: "India",
        verified: true,
      },
      additionalDetails: {
        type: "Bird Health Supplement",
        dispatch: "2 days",
        weight: "50 g",
      },
    },
    {
      name: "Basil Immune Care Twisted Chew Sticks For Dogs & Cats",
      price: "₹350",
      oldPrice: "",
      discount: "",
      image: Product3,
      supplier: {
        name: "Shubhesk Sales",
        location: "India",
        verified: true,
      },
      additionalDetails: {
        type: "Chew Sticks",
        dispatch: "2 days",
        weight: "100 g",
      },
    },
    {
      name: "PET FOOD",
      price: "₹400",
      oldPrice: "₹600",
      discount: "-33%",
      image: Product4,
      supplier: {
        name: "Thoothukudi Karuvaadu Kadai",
        location: "India",
        verified: true,
      },
      additionalDetails: {
        type: "Pet Food",
        dispatch: "2 days",
        weight: "200 g",
      },
    },
    {
      name: "Skull Eight Ball Pet Treat Pouch",
      price: "₹339",
      oldPrice: "₹1199",
      discount: "-71%",
      image: Product5,
      supplier: {
        name: "M/S The Mad Hat Apparel Co",
        location: "India",
        verified: true,
      },
      additionalDetails: {
        type: "Pet Treat Pouch",
        dispatch: "2 days",
        color: "Off White",
      },
    },
    {
      name: "Fish Jerky Dog Food Toppers",
      price: "₹299",
      oldPrice: "₹349",
      discount: "-14%",
      image: Product6,
      supplier: {
        name: "Leader Pet Foods",
        location: "India",
        verified: true,
      },
      additionalDetails: {
        type: "Dog Food Toppers",
        dispatch: "2 days",
        weight: "100 g",
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
        See results about <span>Pet Supplies</span>
      </h1>

      <div className="category-tags">
        <button>Pet Food</button>
        <button>Smart Heart Pet Food</button>
        <button>Dog Food</button>
        <button>Cat Food</button>
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

export default PetProduct;
