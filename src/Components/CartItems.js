import React from 'react'
import '../Styles/CartItems.css'
import CartItem from './CartItem'

const CartItems = ({items}) => {
  return (
    <div className="CartItems">
      <h1>Shopping Cart</h1>
      <hr/>
      <div className="CartItem-items">
      {items.map((item, index) => 

      <CartItem
      item={item}
      key={index}
      />
      ) }
      
      </div>
    </div>
  )
}

export default CartItems
