import React, { useState, useEffect } from 'react';

const useProducts = () => {
  const [fakeProducts, setFakeProducts] = useState([]); // 제품 상태 초기화
  const [loading, setLoading] = useState(true); // 로딩 상태 초기화

  useEffect(() => {
    // API에서 제품 데이터 가져오기
    fetch('https://fakestoreapi.com/products')
      .then(res => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then(data => {
        setFakeProducts(data); // 상태에 제품 데이터 저장
        setLoading(false); // 로딩 종료
      })
      .catch(error => {
        console.error("Fetch error:", error);
        setLoading(false); // 에러 발생 시에도 로딩 종료
      });
  }, []); // 빈 배열을 주어 컴포넌트 마운트 시에만 실행

  return { fakeProducts, loading }; // 제품과 로딩 상태 반환
};

export default useProducts;