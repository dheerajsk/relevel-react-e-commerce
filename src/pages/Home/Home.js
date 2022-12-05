import { useEffect, useState } from "react";

import ProductCard from "../../components/Home/ProductCard/ProductCard";

import Footer from "../../components/Shared/Footer/Footer";
import Header from "../../components/Shared/Header/Header";

function Home() {
  // Creating a state for products data.
  // whenever there is achange in products, it will force component refresh.

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      // calling json function.
      .then((res) => res.json())
      // listening for json function to return.
      .then((res) => {
        res.forEach(o=>{
          o.qty=1;
          o.rating.rate=Math.ceil(Number(o.rating.rate));
        })
        setProducts(res);
      });
  }, []);

  // function notifyCartUpdate(){
  //   console.log("Home is notified");
  //   const items = localStorage.getItem("cartItems");
  //     if(items){
  //       const cartItems = JSON.parse(items);
  //       setCartItemCount(cartItems.length);
  //     }
  // }

  return (
    <div>
      <Header
        />
      <div>
        <div className="row">
          {products.map((product, i) => (
            <div key={product.id} className="col-3">
              <ProductCard 
              key={product.id} 
              item={product} 
              index={i}
              />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
