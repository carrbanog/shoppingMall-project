import React, { useContext, useEffect } from "react";
import "./Css/ShopCategory.css";
import { ShopContext } from "../Context/ShopContext";
import Item from "../Components/Item/Item";
import { FaArrowDown } from "react-icons/fa";
import { useState } from "react";
import { json } from "react-router";

const ShopCategory = (props) => {
  const [fillteredProducts, setFillteredProducts] = useState([]);
  // const [fakeProduct, setFakeProduct] = useState([]);
  const { all_product } = useContext(ShopContext);
  useEffect(() => {
    const filtered = all_product.filter(
      (product) => product.category === props.category
    );
    setFillteredProducts(filtered);
  }, [props.category, all_product]);

  // useEffect(() => {
  //   fetch("https://fakestoreapi.com/products")
  //     .then((res) => res.json())
  //     .then((data) => setFakeProduct(data)) // 데이터를 상태에 저장
  //     .catch((error) => console.error("Error fetching products:", error));
  // }, []);
  return (
    <div className="shop-category">
      {/* <img className="shopcategory-banner" src={props.banner} alt="" /> */}
      <div className="shopcategory-banner">
        <p>FLAT 50% OFF</p>
      </div>
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1~{fillteredProducts.length}</span> out of{" "}
          {all_product.length} products
        </p>
        <div className="shopcategory-sort">
          Sort by <FaArrowDown />
        </div>
      </div>
      <div className="shopcategory-products">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
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
