import React from 'react';
import styled from "styled-components";
import { ProductConsumer } from "../context/Context";

export default function Footer() {
  return (
    <ProductConsumer>
      {value => {
        return <FooterWrapper>
          <div className="container py-3">
            <div className="row">
              <div className="col-md-6">
                <p className="text-capitalize">Copyright &copy; TechStore {new Date().getFullYear()} all rights reserved</p>
              </div>
              <div className="col-md-6">
                {value.socialLinks.map(item => <a href={item.url} key={item.id}>{item.icon}</a>)}
              </div>
            </div>
          </div>
        </FooterWrapper>
      }}
    </ProductConsumer>
  )
}

const FooterWrapper = styled.footer`

`