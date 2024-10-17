import React, { useContext } from "react";
import "./Item.css";
import {Link} from "react-router-dom"
import { ProductContext } from "../../Context/ProductContext";

const Item = (props) => {
  const {recommendProducts, addProduct} = useContext(ProductContext);
  const handleClick = (category) => {
    window.scrollTo(0,0);
    addProduct(category);
    console.log(category)
  }
  // console.log(props)
  return (
    <div className="item">
      <Link to={`/product/${props.id}`}>
        <img src={props.image} alt="" onClick={() => handleClick(props.category)} />
      </Link>
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item-prices-new">${props.new_price}</div>
      </div>
    </div>
  );
};

export default Item;
