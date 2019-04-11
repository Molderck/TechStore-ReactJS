import React from 'react';
import { FaBars, FaCartPlus } from "react-icons/fa";
import styled from "styled-components";
import { ProductConsumer } from "../context/Context";
import Logo from "../images/logo.svg";

export default function Navbar() {
  return (
    <ProductConsumer>
      {value => {
        const { cartItems, handleSidebar, handleCart } = value;
        return <NavWrapper>
          <div className="nav-center">
            <FaBars className="nav-icons" onClick={handleSidebar} />
            <img src={Logo} alt="TechStore Logo" />
            <div className="nav-cart">
              <FaCartPlus className="nav-icon" onClick={handleCart} />
              <div className="cart-items">
                {cartItems}
              </div>
            </div>
          </div>
        </NavWrapper>
      }}
    </ProductConsumer>
  )
}

const NavWrapper = styled.nav`

`  