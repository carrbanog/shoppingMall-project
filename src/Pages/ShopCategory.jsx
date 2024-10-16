import React, { useContext, useEffect } from "react";
import "./Css/ShopCategory.css";
import { ShopContext } from "../Context/ShopContext";
import Item from "../Components/Item/Item";
import { FaArrowDown } from "react-icons/fa";
import { useState } from "react";
import { json } from "react-router";
import all_product2 from "../Components/Assets/all_product2"
import useProducts from "../Components/Assets/all_product2";

const ShopCategory = (props) => {
  const {fakeProducts} = useProducts();
  const [fillteredProducts, setFillteredProducts] = useState([]);
  // const [fakeProduct, setFakeProduct] = useState([]);
  const { all_product } = useContext(ShopContext);
  useEffect(() => {
    const filtered = fakeProducts.filter(
      (product) => product.category === props.category
    );
    setFillteredProducts(filtered);
  }, [props.category, fakeProducts]);
  console.log(fakeProducts)
  console.log(props)
  return (
    <div className="shop-category">
      {/* <img className="shopcategory-banner" src={props.banner} alt="" /> */}
      <div className="shopcategory-banner">
        <p>FLAT 50% OFF</p>
      </div>
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1~{fillteredProducts.length}</span> out of{" "}
          {fakeProducts.length} products
        </p>
        <div className="shopcategory-sort">
          Sort by <FaArrowDown />
        </div>
      </div>
      <div className="shopcategory-products">
        {fakeProducts.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.title}
                image={item.image}
                new_price={item.price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="shopcategory-loadmore">Explore more</div>
    </div>
  );
};

export default ShopCategory;
