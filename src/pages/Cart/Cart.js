import { useEffect, useState, useContext } from "react";
import AppContext from "../../context";

import Header from "../../components/Shared/Header/Header";
import CartItem from "../../components/Cart/CartItem/CartItem";
import "./Cart.css";

function Cart() {
  const { cartItems } = useContext(AppContext);
  console.log(cartItems);

  let totalPrice = 0;
  totalPrice = cartItems.reduce((prev, curr) => {
    return Math.ceil(prev + (curr.price*curr.qty));
  }, 0);
  console.log(totalPrice);

  return (
    <div>
      <div className="cart-header">
        <Header />
      </div>

      <div className="cart-container">
        {/* 2. Print updated total price */}
        <h4 className="totalPrice">Total Price: {totalPrice}</h4>
        <div>
          {cartItems.map((item, index) => (
            <CartItem
              // 4. Pass function as props.

              key={index}
              item={item}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cart;
