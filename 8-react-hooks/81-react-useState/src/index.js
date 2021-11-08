import React, { useState, useEffect, useReducer } from "react";
import { render } from "react-dom";

import Products from "./products";
import ShoppingCart from "./shoppingcart";

import { retrieveProducts } from "./products/repositories/ProductsRepository";

const App = () => {
  const products = {};
  const shoppingcart = {};

  useEffect(() => {
    retrieveProducts().then((products) => {});
  }, []);

  const addToCart = () => {};

  const checkout = () => {};

  const productsOnCart = () => {
    return Object.entries(shoppingcart).map(([key, value]) => {
      const product = products[key];
      product.quantity = value;

      return product;
    });
  }

  return (
    <>
      <Products products={Object.values(products)} onAddToCartClicked={addToCart} />
      <ShoppingCart products={productsOnCart()} onCheckoutClicked={checkout} />
    </>
  );
};

render(<App />, document.getElementById("root"));