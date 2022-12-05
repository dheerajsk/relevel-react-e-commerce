import { useEffect, useState, useContext } from "react";
import AppContext from "../../context";

import Header from "../../components/Shared/Header/Header";
import CartItem from "../../components/Cart/CartItem/CartItem";
import "./Cart.css";

function Cart() {
  const {cartItems} = useContext(AppContext);
  console.log(cartItems);

  return (
    <div className="cart-container">
      <Header />
      {/* 2. Print updated total price */}
      {/* <h4 className="totalPrice">Total Price: {totalPrice}</h4> */}
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
  );
}

export default Cart;
