import React from "react";
import { ProductConsumer } from "../../context/Context";
import Title from "../Title";
import Product from "../Product";

export default function Products() {
  return (
    <ProductConsumer>
      {value => {
        const { filteredProduct } = value;
        return (
          <section className="py-5">
            <div className="container">
              <Title center title="Our Products" />
              <div className="row py-5">
                  {filteredProduct.map(product => {
                      return <Product key={product.id} product={product}></Product>
                  })}
              </div>
            </div>
          </section>
        );
      }}
    </ProductConsumer>
  );
}
