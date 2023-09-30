import React from "react";
import { PRODUCTS } from "../../product";
import { Product } from "./product";
import "./shop.css";

export const Shop = () => {
  return (
    <div className="shop">
      <h1 className="shopTitle">Get Your Ticket Now!</h1>
      <div className="products"></div>

      <div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};
