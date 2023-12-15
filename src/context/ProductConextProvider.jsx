import React, { useState } from "react";
import ProductContext from "./ProductContext";
const ProductConextProvider = ({ children }) => {
  const productApi = [
    {
      id: 1,
      imgs: {
        thumbnail_1: "/images/image-product-1-thumbnail.jpg",
        thumbnail_2: "/images/image-product-2-thumbnail.jpg",
        thumbnail_3: "/images/image-product-3-thumbnail.jpg",
        thumbnail_4: "/images/image-product-4-thumbnail.jpg",
        product_1: "'/images/image-product-1.jpg",
        product_2: "/images/image-product-2-thumbnail.jpg",
        product_3: "/images/image-product-3.jpg",
        product_4: "/images/image-product-4.jpg",
      },
      details: {
        h3: "sneaker company",
        h1: "Fall Limited Edition Sneakers",
        p: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
        price: 250,
        discountedPrice: 125,
        discount: 50,
      },
    },
  ];
  let [product, setProduct] = useState(productApi);
  return (
    <>
      <ProductContext.Provider value={{ product, setProduct }}>
        {children}
      </ProductContext.Provider>
    </>
  );
};

export default ProductConextProvider;
