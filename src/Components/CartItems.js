import React from 'react'
import '../Styles/CartItems.css'
import CartItem from './CartItem'

const CartItems = ({index, items, setCartItems}) => {

  const changeItemQuantity = (e,index) => {
  const newItems = [...items]
  newItems[index].quantity=e.target.value
  setCartItems(newItems);
  }

  const deleteItem = (indexToDelete) => {
    const newitems = items.filter((value, index) => {
        return index !== indexToDelete
    })
     setCartItems(newitems)
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
      deleteItem={deleteItem}

      />
      ) }
      
      </div>
    </div>
  )
}

export default CartItems
