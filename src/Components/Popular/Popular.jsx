import React from "react";
import "./Popular.css";
import data_product from "../Assets/data";
import Item from "../Item/Item";
import useProducts from "../Assets/all_product2";


const Popular = () => {
  const {fakeProducts, loading} = useProducts();
  console.log(fakeProducts)
  
  return (
    <div className="popular">
      <h1>POPULAR IN T-SHIRT</h1>
      <hr />
      <div className="popular-item">
        {fakeProducts.slice(0,4).map((item, i) => {
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
        })}
      </div>
    </div>
  );
};

export default Popular;
