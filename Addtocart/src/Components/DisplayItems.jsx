import React from 'react'
import { ProductData } from '../ProductData/ProductData'
import './DisplayItems.css';
import { addToCart } from '../Features/CartSlice';
import { useDispatch } from 'react-redux';

const DisplayItems = () => {
    const dispatch = useDispatch();
  return (
      <div className='container wrapper'>
              <h1>Popular Now</h1>
          <div className="itemContainer scrollbar" id="style-4">
             
              {
                  ProductData.map((item, index) => {
                      return (
                        <div className="itemBox" key={index}>
                        <img src={item.thumbnail} alt="" />
                              <h2>{ item.title}</h2>
                              <p>{item.description}</p>
                              <h4>{item.category }</h4>
                              <h3>$ {item.price}</h3>
                              
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
