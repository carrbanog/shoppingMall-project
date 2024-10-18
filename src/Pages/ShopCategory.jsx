import React, { useContext, useEffect } from "react";
import "./Css/ShopCategory.css";
import { ShopContext } from "../Context/ShopContext";
import Item from "../Components/Item/Item";
import { FaArrowDown } from "react-icons/fa";
import { useState } from "react";
import { json } from "react-router";
import all_product2 from "../Components/Assets/all_product2";
import useProducts from "../Components/Assets/all_product2";

const ShopCategory = (props) => {
  const { fakeProducts } = useProducts();
  const [fillteredProducts, setFillteredProducts] = useState([]);
  const [isAscending, setIsAscending] = useState(true);
  // const [fakeProduct, setFakeProduct] = useState([]);
  const { all_product } = useContext(ShopContext);
  useEffect(() => {
    const filtered = fakeProducts.filter(
      (product) => product.category === props.category
    );
    setFillteredProducts(filtered);
  }, [props.category, fakeProducts]);
  // console.log(fakeProducts)
  // console.log(props)
  const toggleSort = () => {
    const sortedProducts = [...fillteredProducts].sort((a, b) =>
      isAscending ? a.price - b.price : b.price - a.price
    );
    setFillteredProducts(sortedProducts); // 정렬된 제품 목록 업데이트
    setIsAscending(!isAscending); // 정렬 방향 토글
  };
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
        <div className="shopcategory-sort" onClick={() => toggleSort()}>
          Sort by <FaArrowDown />
          <span>
            {isAscending ? "Price: Low to High" : "Price: High to Low"}
          </span>
        </div>
      </div>
      <div className="shopcategory-products">
        {fillteredProducts.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.title}
                image={item.image}
                new_price={item.price}
                category={item.category}
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
