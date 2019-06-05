import React from "react";
import {
  FaTrash,
  FaChevronCircleUp,
  FaChevronCircleDown
} from "react-icons/fa";

export default function CartItem({
  CartItem,
  increment,
  decrement,
  removeItem
}) {
  const { id, title, price, count, total, image } = CartItem;

  return (
    <div className="row mt-5 mt-lg-0 text-capitalize text-center align-items-center">
      <div className="col mx-auto col-lg-2 pb-2">
        <img src={image} alt="Product" width="60" className="img-fluid" />
      </div>
    </div>
  );
}
