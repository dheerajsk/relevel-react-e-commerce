
import { useEffect, useState, useContext } from "react";
import AppContext from "../../../context";
import './CartItem.css';

function CartItem(prop)
{ 
    let [totalPrice, setPrice]=useState(prop.item.price);
    const {dispatcherEvents} = useContext(AppContext);
    
    useEffect(()=>{
        let price = prop.item.qty*prop.item.price;
        setPrice(price);
    }, [prop]);

    function handleQuantityChange(newQuantity){
        prop.item.qty=newQuantity
        console.log(prop.item);
        dispatcherEvents("UPDATE_ITEM", prop.item);
    }

    function handleDeleteClick(){
      dispatcherEvents("DELETE_ITEM", prop.item.id);
    }

  return(
    <div className="cart-item">
       <div className="container-1">
       <div className="container">
            <img className="cart-img" src={prop.item.image}></img>
       </div>
       <div className="container">
           <h4>{prop.item.title}</h4>
       </div>
       </div>

       <div className="container-2">
       <button className="btn btn-danger" onClick={handleDeleteClick}>Delete</button>
       <div className="container">
            <h4>&#8377; {totalPrice}</h4>
       </div>


       <div className="quantity btn-group">
       <button className="btn btn-minus" onClick={() => handleQuantityChange(prop.item.qty<=1?0:prop.item.qty-1)}>-</button>
          <button className="btn btn-primary">{prop.item.qty}</button>
          <button className="btn btn-plus" onClick={() => handleQuantityChange(prop.item.qty+1)}>+</button>
       </div>
       </div>
    </div>
  );
}

export default CartItem;