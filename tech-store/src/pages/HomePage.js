import React from 'react';
import { ProductConsumer } from "../context/Context";

export default function HomePage() {
  return (
    <ProductConsumer>
      {value => <h1>{value}</h1>}
    </ProductConsumer>
  )
}
