import React from "react";
import { MDBContainer,
         MDBRow,
         MDBBtn, 
         MDBCard, 
         MDBCardBody, 
         MDBCardImage, 
         MDBCardTitle, 
         MDBCardText, 
         MDBCol } from "mdbreact";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/footer";
import products from "../../products.json";


function Products() {
    return(
        <div>
            <Navbar/>
            <MDBContainer style={{marginTop: 150}}>
                <MDBRow>
                   { products.map((product) => 
                   <MDBCol xs="12" md="6">
                       <MDBCard key={product.id} >
                            <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
                            <MDBCardBody>
                                <MDBCardTitle>{product.title}</MDBCardTitle>
                                <MDBCardText>
                                    {product.description}
                                </MDBCardText>
                                <MDBCardText>
                                    ${product.price}
                                </MDBCardText>
                                <MDBBtn className="snipcart-add-item" href="#" data-item-id={product.id} data-item-name={product.title} data-item-url="/" data-item-price={product.price}>
                                    Add to Cart
                                </MDBBtn>
                            </MDBCardBody>
                        </MDBCard>
                   </MDBCol>
                   )} 
                </MDBRow>
            </MDBContainer>
            <Footer/>
        </div>
    );
}
export default Products;