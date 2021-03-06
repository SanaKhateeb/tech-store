import React from 'react'
import {FaTrash, FaChevronCircleUp, FaChevronCircleDown} from 'react-icons/fa'

export default function CartItem({cartItem, increment, decrement, removeItem}) {
  const {id, title, price, count, itemTotal, image} = cartItem
  return (
    <div className="row mt-5 mt-lg-0 text-center align-items-center">
      <div className="col-10 mx-auto col-lg-2 pb-2">
        <img src={image} alt="product" width="100vw" className="img-fluid" />
      </div>

      <div className="col-10 mx-auto col-lg-2 pb-2">
        <span className="d-lg-none">Product: </span><span className="text-capitalize">{title}</span>
      </div>

      <div className="col-10 mx-auto col-lg-2 pb-2">
        <span className="d-lg-none">Price: </span>${price}
      </div>

      {/* Item Controls */}
      <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
        <div className="d-flex justify-content-center">
          <div>
            <FaChevronCircleDown className="cart-icon text-primary" onClick={() => decrement(id)} />
            <span className="text-title text-muted mx-3">{count}</span>
            <FaChevronCircleUp className="cart-icon text-primary" onClick={() => increment(id)} />
          </div>
        </div>
      </div>
      {/* End of Item Controls */}

      <div className="col-10 mx-auto col-lg-2">
        <FaTrash className="text-danger cart-icon" onClick={() => removeItem(id)} /> 
      </div>

      <div className="col-10 mx-auto col-lg-2 mt-2 mt-lg-0">
        <strong className="d-lg-none text-muted">Item Subtotal: </strong>${itemTotal}
      </div>
    </div>
  )
}
