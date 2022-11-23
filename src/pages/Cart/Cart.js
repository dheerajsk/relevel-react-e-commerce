import { useEffect, useState } from "react";

import Header from "../../components/Shared/Header/Header";
import CartItem from "../../components/Cart/CartItem/CartItem";

function Cart(){
    const [cartItems, setCartItem] = useState([]);

   useEffect(() => {
       fetch("product.json")
       .then(res => res.json())
       .then(res => setCartItem(res))
   })

    return(
        <div>
        <Header/>
        <div>
            {
            cartItems.map((item,index) => (
                <CartItem key={index} item={item} index={index}/>
            ))
            }
        </div>
        </div>
    );
}

export default Cart;