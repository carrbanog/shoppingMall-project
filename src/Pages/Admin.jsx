import React from "react";
import { useCart } from "../Context/GraphContext";
import { Bar } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import useProducts from "../Components/Assets/all_product2";
Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
const Admin = () => {
  const {fakeProducts, loading} = useProducts();
  const { cartItems } = useCart();
  const getProductTitleById = (id) => {
    const product = fakeProducts.find((product) => product.id === id);
    return product ? product.title : `Unknown Product (ID: ${id})`
  }
  const data = {
    labels: cartItems.map(item => getProductTitleById(item.id)), // x축 라벨
    datasets: [
      {
        label: 'Quantity',
        data: cartItems.map(item => item.quantity), // y축 데이터
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
      },
      title: {
        display: true,
        text: 'Item Quantity Graph',
      },
    },
    scales: {
      y: {
        beginAtZero: true, // y축 0부터 시작
        ticks: {
          stepSize: 1, // 눈금 간격 1로 설정
        },
      },
    },
  };

  return (
    <div className="graph" style={{
      width:"70%", height:"50%", margin:"0 auto"
    }}>
      <Bar data={data} options={options} />
    </div>
  )
};

export default Admin;
