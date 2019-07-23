import React from 'react'

export default function CartColumns() {
  return (
    <div className="container-fluid text-center d-none d-lg-block my-5">
      <div className="row">
        <div className="col-lg-2 text-uppercase">
          <p>Image</p>
        </div>
        <div className="col-lg-2 text-uppercase">
          <p>Product Name</p>
        </div>
        <div className="col-lg-2 text-uppercase">
          <p>Price</p>
        </div>
        <div className="col-lg-2 text-uppercase">
          <p>Quantity</p>
        </div>
        <div className="col-lg-2 text-uppercase">
          <p>Remove</p>
        </div>
        <div className="col-lg-2 text-uppercase">
          <p>Subtotal</p>
        </div>
      </div>
    </div>
  )
}
