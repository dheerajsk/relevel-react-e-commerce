
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import AppContext from './context';

import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import Cart from './pages/Cart/Cart';
import { useState } from 'react';

function App() {

  // 2. Initialize Store.
  const [cartItems, setCartItems]=useState([]);

  // 3. Dispatchers.
  const dispatcherEvents = (actionType, payload)=>{
      switch(actionType){
        case "ADD_ITEM":{
          console.log(payload);
          let items = cartItems.slice();
          items.push(payload);
          setCartItems(items);
          console.log(items);
          break;
        }
        case "UPDATE_ITEM":{
          let items = cartItems.slice();
          let index = items.findIndex(p=> p.id===payload.id);
          items[index]=payload;
          setCartItems(items);
          break;
        }
        case "DELETE_ITEM":{
          let items = [...cartItems];
          let index = items.findIndex(p=> p.id===payload);
          items.splice(index, 1);
          setCartItems(items);
          break;
        }
        default:{
          console.log("INVALID...");
        }
      }
  }


  return (
    // 4. Initializing Context.
    <AppContext.Provider value={{cartItems, dispatcherEvents}}>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='register' element={<Register />}></Route>
      <Route path='login' element={<Login />}></Route>
      <Route path='cart' element={<Cart />}></Route>
    </Routes>
  </BrowserRouter>
  </AppContext.Provider>
  );
}

export default App;
