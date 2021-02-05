import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/footer";
import ProductGrid from "../../components/ProductGrid/ProductGrid";

function Products() {
    return(
        <div>
            <Navbar/>
            <ProductGrid/>
            <Footer/>
        </div>
    );
}
export default Products;