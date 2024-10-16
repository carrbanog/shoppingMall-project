import React from 'react'
import "./NewCollections.css"
import new_collections from '../Assets/new_collections'
import Item from '../Item/Item'
import useProducts from "../Assets/all_product2";
import all_product from '../Assets/all_product'

const NewCollections = () => {
  const {fakeProducts, loading} = useProducts();
  return (
    <div className='newcollections'>
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collections">
        {fakeProducts.slice(5,13).map((item,i) => {
          return(
            <Item 
            key={i} 
            id={item.id} 
            name={item.title} 
            image={item.image}
            new_price={item.price}
          />
          )
        })}
      </div>
    </div>
  )
}

export default NewCollections