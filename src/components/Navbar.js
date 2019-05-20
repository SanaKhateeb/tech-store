import React from 'react'
import {FaBars, FaCartPlus} from 'react-icons/fa'
import styled from 'styled-components'
import {ProductConsumer} from '../context'
import logo from '../images/logo.svg'

export default function Navbar() {
  return (
    <ProductConsumer>
      {value => {
        const {cartItems, handleSidebar, handleCart} = value;
        return (
          <NavWrapper>
            <div className="nav-center">
              <FaBars className="nav-icon" onClick={handleSidebar}/>
              <img className="nav-logo" src={logo} alt="tech store logo" />
              <div className="nav-cart">
                <FaCartPlus className="nav-icon" onClick={handleCart}/>
                <div className="cart-items">{cartItems}</div>
              </div>
            </div>
          </NavWrapper>
        )
      }}
    </ProductConsumer>
  )
}

const NavWrapper = styled.nav`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  width: 100%;
  padding: 1rem 1.5rem;
  background: var(--mainGrey);
  border-bottom: 3px solid var(--primaryColor);

  .nav-center{
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 95vw;
    margin: 0 auto;
  }

  .nav-center .nav-logo {
    width: 25%;
  }

  .nav-icon {
    font-size: 1.5rem;
    cursor: pointer;
  }

  .nav-cart {
    position: relative;
    font-size: 1.5rem;
  }

  .cart-items {
    background: var(--primaryColor);
    color: var(--mainWhite);
    font-size: 0.8rem;
    position: absolute;
    top: -.2rem;
    right: -1rem;
    padding: 0 .3rem;
    border-radius: 50%;
  }
`