import React from 'react'
import "../Styles/CartItem.css"

const CartItem = () => {
  return (
    <div className="CartItem">
      <div className="CartItem-image">
        <img src="https://media.croma.com/image/upload/f_auto,q_auto,d_Croma%20Assets:no-product-image.jpg,h_350,w_350/v1605270687/Croma%20Assets/Computers%20Peripherals/Tablets%20and%20iPads/Images/8976685629470.png" alt ="ipad" />
      </div>
      <div className="CartItem-info">
        <div className="info-title">
        <h2>Apple Ipad Pro</h2>
        </div>
        <div className="info-Stock">
          In Stock
        </div>
        <div className="item-actions">
          <div className="item-quantity">
            <select></select>
          </div>
          <div className="item-delete">
            Delete
          </div>
        </div>
      </div>
      <div className="CartItem-price">
        $900
      </div>
      
    </div>
  )
}

export default CartItem
