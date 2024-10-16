import React, { createContext, useState } from "react";
import all_product from "../Components/Assets/all_product";
// import all_product2 from "../Components/Assets/all_product2";
// import fakeProducts from "../Components/Assets/all_product2";
import useProducts from "../Components/Assets/all_product2";

export const ShopContext = createContext(null);

const getDefaultCart = (fakeProducts) => {
  let cart = {};
  for (let index = 0; index < 20 + 1; index++) {
    cart[index] = 0;
  }
  // console.log(all_product.length);
  return cart;
};

const ShopContextProvider = (props) => {
  const { fakeProducts, loading } = useProducts();
  const [cartItems, setCartItems] = useState(getDefaultCart(fakeProducts));

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    console.log(cartItems);
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    console.log(cartItems);
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = fakeProducts.find(
          (product) => product.id === Number(item)
        );
        totalAmount += itemInfo.price * cartItems[item];
      }
    }
    // console.log(totalAmount)
    return totalAmount;
  };
  const getTotalCartItems = () => {
    let totalItem = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item];
      }
    }
    return totalItem;
  };
  const contextValue = {
    getTotalCartAmount,
    all_product,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartItems,
    fakeProducts,
  };

  // console.log(cartItem)
  return (
    <ShopContext.Provider value={contextValue}>
      {loading ? <div>Loading...</div> : props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
