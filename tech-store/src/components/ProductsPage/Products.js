import React from "react";
import { ProductConsumer } from "../../context/Context";
import Title from "../Title";
import Product from "../Product";
import ProductFilter from "./ProductFilter";

export default function Products() {
  return (
    <ProductConsumer>
      {value => {
        const { filteredProduct } = value;
        return (
          <section className="py-5">
            <div className="container">
              <Title center title="Our Products" />
              <ProductFilter />
              <div className="row">
                <div className="col-10 mx-auto">
                  <h6 className="text-title">
                    Total Products: {filteredProduct.length}
                  </h6>
                </div>
              </div>
              <div className="row py-5">
                {filteredProduct.length === 0 ? (
                  <div className="col text-title text-center">
                    Sorry, no items matched your search
                  </div>
                ) : (
                  filteredProduct.map(product => {
                    return <Product key={product.id} product={product} />;
                  })
                )}
              </div>
            </div>
          </section>
        );
      }}
    </ProductConsumer>
  );
}
