import React, { useContext } from "react";
import "./ProductDisplay.css";
import { FaStar } from "react-icons/fa";
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);
  const handleClickProduct = (product) => {
    addToCart(product)
    console.log(product)
  }
  // console.log(product)
  if (!product) {
    return null;
  }
  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
          <img className="productdisplay-main-img" src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.title}</h1>
        <div className="productdisplay-right-star">
          {/* <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <p>(122)</p> */}
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-new">
            ${product.price}
          </div>
        </div>
        <div className="productdisplay-right-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, ad
          itaque? Eveniet aspernatur ab in?
        </div>
        <div className="productdisplay-right-size">
          <h1>Select Size</h1>
          <div className="productdisplay-right-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button
          onClick={() => handleClickProduct(product)}
        >
          ADD TO CART
        </button>
        <p className="productdisplay-right-category">
          <span>Category: </span> {product.category}
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
