import React from 'react'
import { BsFillCartCheckFill } from 'react-icons/bs';
import './Navbar.css'
import { useSelector } from 'react-redux';
const Navbar = () => {
    const counterData = useSelector((c) => {
        return c.showCartCounter.value;
    })
  return (
      <div className="Navbar">
          <h1>ShopMee</h1>
          <div className="Cart">
              <BsFillCartCheckFill id='CartIcon' />
              <span id='cartCounter'>{counterData}</span>
          </div>
        </div>
  )
}

export default Navbar
