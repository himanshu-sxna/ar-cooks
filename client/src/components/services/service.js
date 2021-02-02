import React, { useState } from "react";
import { MDBContainer, 
         MDBRow, 
         MDBCol,
         MDBTypography,
         MDBBtn, 
         MDBCard, 
         MDBCardBody, 
         MDBCardImage, 
         MDBCardTitle, 
         MDBCardText,
         MDBCollapse } from "mdbreact";
import Fade from 'react-reveal/Fade';
import "./services.css";
import service1Img from "../../images/service1.jpg";
import service2Img from "../../images/service2.jpg";
import service3Img from "../../images/service3.jpg";


function Services() {

    const [ collapse1, SetCollapse1 ] = useState(false);
    const [ collapse2, SetCollapse2 ] = useState(false);
    const [ collapse3, SetCollapse3 ] = useState(false);

    const allServices = [
        {
            image: service1Img,
            title: "Service One",
            short: "Quick example text to define the title",
            desc: "Long example text to offer mor einformation for the advertised product, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure",
            collapseId: collapse1
        },
        {   
            image: service2Img,
            title: "Service Two",
            short: "Quick example text to define the title",
            desc: "Long example text to offer mor einformation for the advertised product, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure",
            collapseId: collapse2
        },
        {   
            image: service3Img,
            title: "Service Three",
            short: "Quick example text to define the title",
            desc: "Long example text to offer more information for the advertised product. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure",
            collapseId: collapse3
        },
    ]

    function toggleCollapse(id) {
        switch (id) {
            case allServices[0].title:
                !collapse1 ? SetCollapse1(true) : SetCollapse1(false);
                break;
            case allServices[1].title:
                !collapse2 ? SetCollapse2(true) : SetCollapse2(false);
                break;
            case allServices[2].title:
                !collapse3 ? SetCollapse3(true) : SetCollapse3(false);
                break;
            default:
                break;
        };
    };

    return(
        <MDBContainer className="my-5">
            <MDBRow className="text-center wrapper">
                <MDBCol>
                    <MDBTypography tag="h2" variant="h2-responsive" className="title font-weight-bolder">
                        What We Offer
                    </MDBTypography>
                </MDBCol>
            </MDBRow>
            <MDBRow className="text-center mt-4">
                <MDBCol>
                    <MDBTypography tag="p" variant="h4-responsive" className="service-desc">
                    We would love working with you and offer the below services.
                    </MDBTypography>
                </MDBCol>
            </MDBRow>
            <MDBRow className="mt-5">
            { allServices.map((service) =>
                <MDBCol lg="4" className="mt-1">
                    <Fade bottom> 
                        <MDBCard key={service.title}>
                            <MDBCardImage hover overlay="white-slight" className=" card-img-top" src={service.image}/>
                            <MDBCardBody className="text-center">
                                <MDBCardTitle>{service.title}</MDBCardTitle>
                                <MDBCardText>{service.short}</MDBCardText>
                                <MDBBtn className="btn" onClick={()=>toggleCollapse(service.title)}>Know more</MDBBtn>
                                <MDBCollapse isOpen={service.collapseId} >
                                    {service.desc}
                                </MDBCollapse>
                            </MDBCardBody>
                        </MDBCard> 
                    </Fade>
                </MDBCol>
            )}
            </MDBRow>
        </MDBContainer>
    );
};

export default Services;