import React from 'react';
import { ProductConsumer } from "../context/Context";
import styled from "styled-components";

export default function Sidecart() {
  return (
    <ProductConsumer>
      {value => {
        const { cartOpen, closeCart } = value;
        return (
          <CartWrapper show={cartOpen} onClick={closeCart}>
            <p>Cart Items</p>
          </CartWrapper>
        )
      }}
    </ProductConsumer>
  )
}

const CartWrapper = styled.div`

`
