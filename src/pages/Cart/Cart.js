import { useEffect, useState } from "react";

import Header from "../../components/Shared/Header/Header";
import CartItem from "../../components/Cart/CartItem/CartItem";
import "./Cart.css";

function Cart() {
  const [cartItems, setCartItem] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let cart = localStorage.getItem("cart");
    let cartItems = JSON.parse(cart);
    setCartItem(cartItems);
    updateTotalPrice(cartItems);

    // fetch("product.json")
    //   .then((res) => res.json())
    //   .then((res) => {
    //     updateTotalPrice(res);
    //     setCartItem(res);
    //   });
  }, []);

  // Step 3: takes new quantity and update cart items.
  function updatePrice(item, newQuantity) {
    let items = cartItems;
    let cartItemIndex = items.findIndex((i) => i.name === item.name);
    items[cartItemIndex].qty = newQuantity;
    setCartItem(items);
    updateTotalPrice(items);
  }

  // 1. Update Total Price = sum of price*quantity for each cart items.
  useEffect(() => {});
  function updateTotalPrice(res) {
    let sum = 0;
    // for (let i = 0; i < res.length; i++) {
    //   sum = sum + Number(res[i].price) * Number(res[i].qty);
    // }
    sum = res.reduce((prev, curr) => {
      return prev + +curr.price * curr.qty;
    }, 0);
    setTotalPrice(sum);
  }

  function deleteItem(index) {
    let items = cartItems;
    items.splice(index, 1);
    console.log(items);
    setCartItem(items.slice());
    updateTotalPrice(items);
  }

  return (
    <div className="cart-container">
      <Header />
      {/* 2. Print updated total price */}
      <h4 className="totalPrice">Total Price: {totalPrice}</h4>
      <div>
        {cartItems.map((item, index) => (
          <CartItem
            // 4. Pass function as props.
            updatePrice={updatePrice}
            key={index}
            delete={deleteItem}
            item={item}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}

export default Cart;
