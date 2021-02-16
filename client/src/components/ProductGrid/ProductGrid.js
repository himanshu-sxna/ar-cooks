import React, { useState, useEffect } from "react";
import { MDBContainer, 
         MDBRow, 
         MDBCol,
         MDBTypography,
         MDBBtn, 
         MDBCard, 
         MDBCardBody, 
         MDBCardImage, 
         MDBCardTitle, 
         MDBCardText, } from "mdbreact";
import API from  "../../utils/API";
import "../services/services.css";
import ShoppingCartFAB from "../utils/ShoppingCartFAB/shoppingcratFAB";

function ProductGrid() {

    const [ ProductArray, SetProductArray ]  = useState([]);

    useEffect(() => {
        API.getProducts()
        .then((res) => {
            SetProductArray(res.data);
        })
        .catch(err => console.log(err));
    }, []);

    return(
        <MDBContainer style={{marginTop: 150}}>
            <MDBRow className="text-center wrapper">
                <MDBCol>
                    <MDBTypography tag="h2" variant="h2-responsive" className="title font-weight-bolder">
                        Online Shop
                    </MDBTypography>
                </MDBCol>
            </MDBRow>
            <MDBRow className="text-center mt-4">
                <MDBCol>
                    <MDBTypography tag="p" variant="h4-responsive" className="service-desc">
                    Product Showcase
                    </MDBTypography>
                </MDBCol>
            </MDBRow>
            <MDBRow>
                { ProductArray.map((product) => 
                   <MDBCol sm="12" md="4" className="my-3">
                       <MDBCard key={product.name} style={{height: "100%"}} >
                            <MDBCardImage className="card-img-top" src={product.imageUrl} waves />
                            <MDBCardBody className="d-flex flex-column" >
                                <MDBCardTitle>{product.name}</MDBCardTitle>
                                <MDBCardText>
                                    {product.description}
                                </MDBCardText>
                                <MDBCardText style={{fontSize: "1.15em"}} className="black-text">
                                   <strong>${product.price}.00</strong> 
                                </MDBCardText>
                                <MDBBtn className="snipcart-add-item mt-auto" data-item-id={product.productID} data-item-name={product.name} data-item-url="/" data-item-price={product.price} data-item-image={product.imageUrl} data-item-description={product.description}>
                                    Add to Cart
                                </MDBBtn>
                            </MDBCardBody>
                        </MDBCard>
                   </MDBCol>
                   )} 
                </MDBRow>
                <ShoppingCartFAB/>
            </MDBContainer>
    );
}

export default ProductGrid;