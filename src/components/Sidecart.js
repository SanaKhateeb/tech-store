import React from 'react'
import {ProductConsumer} from '../context'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

export default function Sidecart() {
  return (
    <ProductConsumer>
      {value => {
        const {cartOpen, closeCart, cart, cartTotal} = value;
        return (
          <CartWrapper show={cartOpen} onClick={closeCart}>
            <ul>
              {cart.map(item => {
                return (
                  <li key={item.id} className="cart-item mb-4">
                    <img width="50vw" src={`../${item.image}`} alt="item img" />
                    <div className="mt-2">
                      <h6 className="text-uppercase">{item.title}</h6>
                      <h6 className="text-title text-capitalize">Amount: {item.count}</h6>
                    </div>
                  </li>
                )
              })}
            </ul>
            <h4 className="text-main">
              Cart Total: ${cartTotal}
            </h4>
            <div className="text-center my-5">
              <Link to="/cart" className="main-link">Cart Page</Link>
            </div>
          </CartWrapper>
        )
      }}
    </ProductConsumer>
  )
}

const CartWrapper = styled.div`
  position: fixed;
  right: 0;
  width: 100%;
  height: 100%;
  background: var(--mainGrey);
  z-index: 1;
  border-left: 4px solid var(--primaryColor);
  transition: var(--mainTransition);
  overflow: scroll;
  padding: 1rem;

  transform:${props => props.show ? 'translateX(0)' : 'translateX(100%)'};

  ul {
    padding: 0 !important;
  }

  .cart-item{
    list-style-type: none;
  }
  
  @media (min-width:576px) {
    width: 20rem;
  }
`