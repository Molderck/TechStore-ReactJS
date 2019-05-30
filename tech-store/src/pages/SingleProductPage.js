import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import singleProductImg from "../images/singleProductBcg.jpeg";
import { ProductConsumer } from "../context/Context";

export default function SingleProductPage() {
  return (
    <>
      <Hero img={singleProductImg} title="Single Product" />
    </>
  );
}
