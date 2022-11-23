

import { useEffect, useState } from "react";
import './CartItem.css';

function CartItem(prop)
{ 

    let [quantity, setQuantity] = useState(1);
    let [totalPrice, setPrice]=useState(prop.item.price);

    function handleQuantityChange(value){
        if(value>0){
            totalPrice = Number(prop.item.price)*value;
            setQuantity(value);
            setPrice(totalPrice);
        }else{
            totalPrice=0;
            setPrice(totalPrice);
            setQuantity(0);
        }
    }

  return(
    <div className="cart-item">
       <div className="container-1">
       <div className="container">
            <img className="cart-img" src={prop.item.image}></img>
       </div>
       <div className="container">
           <h4>{prop.item.name}</h4>
       </div>
       </div>

       <div className="container-2">
       <div className="container">
            <h4>&#8377; {totalPrice}</h4>
       </div>

       <div className="quantity btn-group">
       <button className="btn btn-minus" onClick={() => handleQuantityChange(quantity==1?0:quantity-1)}>-</button>
          <button className="btn btn-primary">{quantity}</button>
          <button className="btn btn-plus" onClick={() => handleQuantityChange(quantity+1)}>+</button>
       </div>
       </div>
    </div>
  );
}

export default CartItem;