import React, { useContext, useEffect, useState } from "react";
import ProductContext from "../context/ProductContext";
import Thumbnail from '../images/image-product-1-thumbnail.jpg'
import CartIcon from '../images/icon-cart.svg'
const Product = () => {
  const { product } = useContext(ProductContext);
  return (
    <>
      <div className="product">
        {product.map((prod, index) => {
          console.log(prod)
          return (
            <div className="contents" key={prod.id}>
              <div className="product-preview">
                <div className="preview"></div>
                <div className="thumbnails">
                  <div className="thumbnail-1"><img src={`/src${prod.imgs.thumbnail_1}`} alt="Thumbail" /></div>
                  <div className="thumbnail-2"><img src={`/src${prod.imgs.thumbnail_2}`} alt="Thumbail" /></div>
                  <div className="thumbnail-3"><img src={`/src${prod.imgs.thumbnail_3}`} alt="Thumbail" /></div>
                  <div className="thumbnail-4"><img src={`/src${prod.imgs.thumbnail_4}`} alt="Thumbail" /></div>
                </div>
              </div>
              <div className="product-details">
                <h3>{prod.details.h3}</h3>
                <h1>{prod.details.h1}</h1>
                <p>{prod.details.p}</p>
                <div className="price-section">
                  <div className="discount">
                      <h2>${prod.details.discountedPrice}</h2>
                      <span>{prod.details.discount}%</span>
                  </div>
                  <span className="price-with-no-discount">${prod.details.price}</span>
                </div>
                <div className="add-to-cart">
                    <div className="item-counts">
                      <button>-</button>
                      <span></span>
                      <button>+</button>
                    </div>
                    <button className="add-item"><img src={CartIcon} alt="Cart" /><span>Add to Cart</span></button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Product;
