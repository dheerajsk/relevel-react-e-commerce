import { useEffect, useState } from "react";

import ProductCard from "../../components/Home/ProductCard/ProductCard";

import Footer from "../../components/Shared/Footer/Footer";
import Header from "../../components/Shared/Header/Header";

function Home() {
  // Creating a state for products data.
  // whenever there is achange in products, it will force component refresh.

  const [products, setProducts] = useState([]);
  const [click, setClick] = useState(0);
  // const [click2, setClick2] = useState(100);
  // let data = "My Data";

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      // calling json function.
      .then((res) => res.json())
      // listening for json function to return.
      .then((res) => {
        console.log("fetching data");
        res.forEach(o=>{
          o.rating.rate=Math.ceil(Number(o.rating.rate));
        })
        console.log(res);
        setProducts(res);
      });
  }, [click]);

  return (
    <div>
      <Header />
      {/* Products */}
      
      <div>
        {/* <h1>{click}</h1>
        <h1>{click2}</h1>
       
        <button
          onClick={() => {
            setClick2(click2 + 1);
          }}>
          Click 2
        </button> */}
        {/* <h3>{products && products.length}</h3>
        <h1>{data}</h1> */}

        {/* Products */}
        <div className="row">
          {products.map((product, i) => (
            <div className="col-3">
              <ProductCard item={product} index={i} />
              <h1 id="header1"></h1>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
