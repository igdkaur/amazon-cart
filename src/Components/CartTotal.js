import React from 'react'
import '../Styles/CartTotal.css'


const CartTotal = ({items}) => {

  const getTotalPrice = () => {
    let total = 0;
    items.forEach((item) => {
      total = total + (item.quantity * item.price)
    })
    return total; 
  }

  return (
    <div className="CartTotal">
      <h3>
        Subtotal({items.length}):
        <span className="CartTotal-price">
          $2,172.38
          {getTotalPrice()}
        </span>
      </h3>
      <button>
        Proceed to checkout
      </button>
      
    </div>
  )
}

export default CartTotal
