import React from "react";
import "./Breadcrum.css";
import { IoMdArrowDropright } from "react-icons/io";

const Breadcrum = (props) => {
  const { product } = props;
  return (
    <div className="breadcrum">
      HOME <IoMdArrowDropright /> SHOP <IoMdArrowDropright /> {product.category}
      <IoMdArrowDropright />
      {product.name}
    </div>
  );
};

export default Breadcrum;
