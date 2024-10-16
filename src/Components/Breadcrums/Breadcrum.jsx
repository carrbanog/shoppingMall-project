import React from "react";
import "./Breadcrum.css";
import { IoMdArrowDropright } from "react-icons/io";

const Breadcrum = (props) => {
  const { product } = props;
  if(!product){
    return null;
  }
  return (
    <div className="breadcrum">
      HOME <IoMdArrowDropright /> SHOP <IoMdArrowDropright /> {product.category}
      <IoMdArrowDropright />
      {product.title}
    </div>
  );
};

export default Breadcrum;
