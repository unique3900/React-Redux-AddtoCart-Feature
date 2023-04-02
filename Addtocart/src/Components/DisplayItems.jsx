import React from 'react'
import { ProductData } from '../ProductData/ProductData'
import './DisplayItems.css';
import { addToCart } from '../Features/CartSlice';
import { useDispatch } from 'react-redux';

const DisplayItems = () => {
    const dispatch = useDispatch();
  return (
      <div className='container wrapper'>
             
          <div className="itemContainer scrollbar" id="style-4">
              
              {
                  ProductData.map((item, index) => {
                      return (
                        <div className="itemBox" key={index}>
                        <img src="https://i.dummyjson.com/data/products/1/thumbnail.jpg" alt="" />
                        <h2>Iphone</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, voluptatem laboriosam. Quaerat nulla odit, eaque nam nisi error molestiae voluptate.</p>
                        <h3>12000</h3>
                        <button onClick={()=>{dispatch(addToCart())}}>Add To Cart</button>
                    </div>
                      )
                    
                  })
              }

      </div>
    </div>
  )
}

export default DisplayItems
