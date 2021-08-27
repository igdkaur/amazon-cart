import React from 'react'
import '../Styles/CartItems.css'
import CartItem from './CartItem'

const CartItems = ({index, items, setCartItems}) => {

  const changeItemQuantity = (e,index) => {
console.log(e.target.value)
  const newItems = [...items]
  newItems[index].quantity=e.target.value
  setCartItems(newItems);
  }
  return (
    <div className="CartItems">
      <h1>Shopping Cart</h1>
      <hr/>
      <div className="CartItem-items">
      {items.map((item, index) => 

      <CartItem
      index={index}
      item={item}
      key={index}
      changeItemQuantity={changeItemQuantity}

      />
      ) }
      
      </div>
    </div>
  )
}

export default CartItems
