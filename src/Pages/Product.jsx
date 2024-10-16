import React, { useContext } from 'react'
import {useParams} from "react-router-dom"
import { ShopContext } from '../Context/ShopContext';
import Breadcrum from '../Components/Breadcrums/Breadcrum';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';
import useProducts from "../Components/Assets/all_product2";


const Product = () => {
  const {fakeProducts} = useProducts();
  const {all_product} = useContext(ShopContext);
  const {productId} = useParams();
  // const fProduct = fakeProducts.find((e) => e.id === Number(productId))
  const product = fakeProducts.find((e) => e.id === Number(productId))
  // console.log(productId, product)
  // console.log(Product)
  return (
    <div>
      <Breadcrum product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox product={product} />
      <RelatedProducts />
    </div>
  )
}

export default Product