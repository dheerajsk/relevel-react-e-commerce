import ProductCard from "../../components/Home/ProductCard/ProductCard";
import Footer from "../../components/Shared/Footer/Footer";
import Header from "../../components/Shared/Header/Header";


function Home(){
    return(
        <div>
            <Header />
            <ProductCard />
            <Footer />
        </div>
    );
}

export default Home;