import React from 'react'
import '../Styles/CartTotal.css'
import NumberFormat from 'react-number-format';


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
        Subtotal({items.length} items):
        <span className="CartTotal-price">
          <NumberFormat value = {getTotalPrice()} displayType = {'text'} thousandSeparator={true} prefix={'$'} decimalScale={2} />
        </span>
      </h3>
      <button>
        Proceed to checkout
      </button>
      
    </div>
  )
}

export default CartTotal
