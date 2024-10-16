import React from "react";
import "./DescriptionBox.css";
// import useProducts from "../Assets/all_product2";
const DescriptionBox = (props) => {
  const { product } = props;
  if (!product) {
    return null;
  }
  // console.log(product)
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews</div>
      </div>
      <div className="descriptionbox-description">
        {/* <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse amet
          quam obcaecati a animi voluptatibus alias? Quibusdam doloribus dolor
          autem perspiciatis placeat consectetur omnis ipsum quaerat eligendi
          deleniti eius quos, nostrum animi tempora ut mollitia voluptatum
          libero, id delectus. Repellendus!
        </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe sint commodi aliquam deleniti, praesentium quidem corrupti voluptatum placeat aliquid voluptatem quibusdam reiciendis, veritatis maiores eius beatae officia accusamus voluptas recusandae!</p> */}
        {product.description}
      </div>
    </div>
  );
};

export default DescriptionBox;
