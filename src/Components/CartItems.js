import React from 'react'
import '../Styles/CartItems.css'
import CartItem from './CartItem'

const CartItems = () => {
  return (
    <div className="CartItems">
      <h1>Shopping Cart</h1>
      <hr/>
      <CartItem/>
      <div className="CartItem-items">
      
      </div>
    </div>
  )
}

export default CartItems