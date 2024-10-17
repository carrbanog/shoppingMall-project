import React, { createContext, useContext, useState } from 'react';

// CartContext 생성
const CartContext = createContext();

// Provider 컴포넌트: 상태와 함수를 자식 컴포넌트에 전달
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // 장바구니에 데이터 추가 함수
  const addToCartItems = (items) => {
    setCartItems([...items]); // 새 배열로 교체
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCartItems }}>
      {children}
    </CartContext.Provider>
  );
};

// 커스텀 훅: 쉽게 Context에 접근하도록 해줌
export const useCart = () => useContext(CartContext);
