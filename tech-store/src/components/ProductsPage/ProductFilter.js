import React from "react";
import styled from "styled-components";
import { ProductConsumer } from "../../context/Context";

export default function FilterProducts() {
  return (
    <ProductConsumer>
      {value => {
        const {
          search,
          price,
          min,
          max,
          company,
          shipping,
          handleChange,
          storeProducts
        } = value;

        return (
          <div className="row my-5">
            <div className="col-10 mx auto">
              <FilterWrapper>
                <div>
                  <label htmlFor="search">Search Products</label>
                  <input
                    type="text"
                    name="search"
                    id="search"
                    onChange={handleChange}
                    value={search}
                    className="filter-item"
                  />
                </div>
                <div>
                  <label htmlFor="company">Company</label>
                  <select
                    name="company"
                    id="company"
                    className="filter-item"
                    onChange={handleChange}
                    value={company}
                  >
                    <option value="all">All</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="price">
                    <p className="mb-2">
                      Product Price: <span>$ {price}</span>
                    </p>
                    <input
                      type="range"
                      name="price"
                      id="price"
                      min={min}
                      max={max}
                      className="filter-price"
                      value={price}
                      onChange={handleChange}
                    />
                  </label>
                </div>
                <div>
                  <label htmlFor="shipping" className="mx-2">
                    Free Shipping
                  </label>
                  <input
                    type="checkbox"
                    name="shipping"
                    id="shipping"
                    onChange={handleChange}
                    value={shipping && true}
                  />
                </div>
              </FilterWrapper>
            </div>
          </div>
        );
      }}
    </ProductConsumer>
  );
}

const FilterWrapper = styled.div``;
