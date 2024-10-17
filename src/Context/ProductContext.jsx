import React, { createContext, useState } from 'react';

// Context 생성
export const ProductContext = createContext();

// Provider 컴포넌트 생성
export const ProductProvider = ({ children }) => {
  const [recommendProducts, setRecommendProducts] = useState([]);

  // 배열에 제품 추가하는 함수
  const addProduct = (product) => {
    setRecommendProducts((prevProducts) => [...prevProducts, product]);
  };

  return (
    <ProductContext.Provider value={{ recommendProducts, addProduct }}>
      {children}
    </ProductContext.Provider>
  );
};
