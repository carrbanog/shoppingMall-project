import React, { useContext } from "react";
import "./RelatedProducts.css";
import Item from "../Item/Item";
import data_product from "../Assets/data";
import { ProductContext } from "../../Context/ProductContext";
import useProducts from "../Assets/all_product2";

const RelatedProducts = () => {
  const { recommendProducts } = useContext(ProductContext);
  const { fakeProducts } = useProducts();
  // console.log(recommendProducts)
  const getMostFrequentCategory = () => {
    const categoryCount = {};
    if (recommendProducts.length === 0) {
      return null; // 추천 제품이 없을 경우 null 반환
    }

    // 카테고리 수 계산
    recommendProducts.forEach((category) => {
      categoryCount[category] = (categoryCount[category] || 0) + 1;
    });

    // 가장 많이 등장하는 카테고리 찾기
    return Object.keys(categoryCount).reduce((a, b) =>
      categoryCount[a] > categoryCount[b] ? a : b
    );
  };
  const mostFrequentCategory = getMostFrequentCategory();
  console.log(mostFrequentCategory);
  return (
    <div className="relatedproducts">
      <h1>Recommended Products</h1>
      <hr />
      <div className="relatedproducts-item">
        {/* {fakeProducts.filter((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.price}
              category={item.category}
            />
          );
        })} */}
        {fakeProducts
          .filter((product) => product.category === mostFrequentCategory).slice(0,3)
          .map((e,i) => (
            <Item
            key={i}
            id={e.id}
            name={e.name}
            image={e.image}
            new_price={e.price}
            category={e.category}
          />
          ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
