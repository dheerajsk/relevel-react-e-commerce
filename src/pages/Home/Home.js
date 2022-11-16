import { useState } from "react";
import ProductCard from "../../components/Home/ProductCard/ProductCard";
import Footer from "../../components/Shared/Footer/Footer";
import Header from "../../components/Shared/Header/Header";

function Home() {
  // Creating a state for products data.
  // whenever there is achange in products, it will force component refresh.

  const [products, setProducts] = useState([]);
  let data = "My Data";

  fetch("Product.json")
    // calling json function.
    .then((res) => res.json())
    // listening for json function to return.
    .then((res) => {
      setProducts(res);
      console.log(products.length);
    });

  return (
    <div>
      <Header />
      {/* Products */}
      <div>
        <h3>{products && products.length}</h3>
        <h1>{data}</h1>
        <ProductCard />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
