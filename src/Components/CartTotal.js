import React from 'react'
import '../Styles/CartTotal.css'


const CartTotal = () => {
  return (
    <div className="CartTotal">
      <h3>
        Subtotal(5 items):
        <span className="CartTotal-price">
          $2,172.38
        </span>
      </h3>
      <button>
        Proceed to checkout
      </button>
      
    </div>
  )
}

export default CartTotal
