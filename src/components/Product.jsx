import { useContext, useEffect, useState } from "react";
import ProductContext from "../context/ProductContext";
import CartContext from "../context/CartContext";
import CartIcon from "../images/icon-cart.svg";
import "../css/Product.css";
const Product = () => {
  const { product } = useContext(ProductContext);
  const { cart, setCart } = useContext(CartContext);
  let [disableButton, setDisableButton] = useState(false)
  let [productPreviewImg, setProductPreviewImg] = useState(
    "/images/image-product-1.jpg"
  );
  let [itemCount, setItemCount] = useState(0);
  const itemCountPlus = () => {
    setItemCount(itemCount + 1);
  };
  const itemCountMinus = () => {
    setItemCount(itemCount - 1);
    if (itemCount <= 0) {
      setItemCount(0);
    }
  };
  const addToCart = (id) => {
    const productToAdd = product.find((prod) => prod.id === id);
    if (productToAdd) {
      setCart((prevCart) => [...prevCart, productToAdd]);
      setDisableButton(true)
    } else {
      alert("product not found!");
    }
    console.log(cart);
  };
  return (
    <>
      <div className="product">
        {product.map((prod, index) => {
          return (
            <div className="contents" key={prod.id}>
              <div className="product-preview">
                <div className="preview">
                  <img src={`/src${productPreviewImg}`} alt="" />
                </div>
                <div className="thumbnails">
                  <div className="thumbnail-1">
                    <img
                      onClick={() => setProductPreviewImg(prod.imgs.product_1)}
                      src={`/src${prod.imgs.thumbnail_1}`}
                      alt="Thumbail"
                    />
                  </div>
                  <div className="thumbnail-2">
                    <img
                      onClick={() => setProductPreviewImg(prod.imgs.product_2)}
                      src={`/src${prod.imgs.thumbnail_2}`}
                      alt="Thumbail"
                    />
                  </div>
                  <div className="thumbnail-3">
                    <img
                      onClick={() => setProductPreviewImg(prod.imgs.product_3)}
                      src={`/src${prod.imgs.thumbnail_3}`}
                      alt="Thumbail"
                    />
                  </div>
                  <div className="thumbnail-4">
                    <img
                      onClick={() => setProductPreviewImg(prod.imgs.product_4)}
                      src={`/src${prod.imgs.thumbnail_4}`}
                      alt="Thumbail"
                    />
                  </div>
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
                  <span className="price-with-no-discount">
                    ${prod.details.price}.00
                  </span>
                </div>
                <div className="add-to-cart">
                  <div className="item-counts">
                    <button onClick={itemCountMinus}>-</button>
                    <span>{itemCount}</span>
                    <button onClick={itemCountPlus}>+</button>
                  </div>
                  <button
                    className="add-item"
                    onClick={() => addToCart(prod.id)}
                    disabled={disableButton}
                  >
                    <svg
                      width="22"
                      height="20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                        fill="#fff"
                        fillRule="nonzero"
                      />
                    </svg>
                    <span>Add to Cart</span>
                  </button>
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
