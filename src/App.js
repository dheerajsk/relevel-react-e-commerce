
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';

import { createContext } from 'react';

import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import Cart from './pages/Cart/Cart';
import { useState } from 'react';

function App() {

  // 1. Create Context for application.
  const AppContext = createContext();

  // 2. Initialize Store.
  const [cartItems, setCartItems]=useState([]);

  // 3. Dispatchers.
  const dispatcherEvents = (actionType, payload)=>{
      switch(actionType){
        case "ADD_ITEM":{
          setCartItems(...cartItems, payload);
          break;
        }
        default:{
          console.log("INVALID...");
        }
      }
  }


  return (
    // 3. Initializing Context.
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
