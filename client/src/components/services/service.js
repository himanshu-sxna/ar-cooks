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
import Flip from 'react-reveal/Flip';
import "./services.css";
import dBoxImg from "../../images/delivery_box.jpg";
import eventImg from "../../images/events.jpg";
import classImg from "../../images/culinary_masterclass.jpg";


function Services() {

    const [ collapse1, SetCollapse1 ] = useState(false);
    const [ collapse2, SetCollapse2 ] = useState(false);
    const [ collapse3, SetCollapse3 ] = useState(false);

    const allServices = [
        {
            image: dBoxImg,
            title: "Delivery Box",
            short: "Quick example text to define the title",
            desc: "Long example text to offer mor einformation for the advertised product, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure",
            collapseId: collapse1
        },
        {   
            image: eventImg,
            title: "Events",
            short: "Quick example text to define the title",
            desc: "Long example text to offer mor einformation for the advertised product, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure",
            collapseId: collapse2
        },
        {   
            image: classImg,
            title: "Culinary Masterclass",
            short: "Quick example text to define the title",
            desc: "Long example text to offer more information for the advertised product. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure",
            collapseId: collapse3
        },
    ]

    function toggleCollapse(id) {
        switch (id) {
            case "Delivery Box":
                !collapse1 ? SetCollapse1(true) : SetCollapse1(false);
                break;
            case "Events":
                !collapse2 ? SetCollapse2(true) : SetCollapse2(false);
                break;
            case "Culinary Masterclass":
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
                    We are into catering and have a few other interesting things going on, basically more than one ways you could try our lip-smacking food!
                    </MDBTypography>
                </MDBCol>
            </MDBRow>
            <MDBRow className="mt-5">
            { allServices.map((service) =>
                <MDBCol lg="4" className="mt-1">
                    <Flip top> 
                        <MDBCard key={service.title}>
                            <MDBCardImage hover overlay="white-slight" className=" card-img-top" src={service.image}/>
                            <MDBCardBody className="text-center">
                                <MDBCardTitle>{service.title}</MDBCardTitle>
                                <MDBCardText>{service.short}</MDBCardText>
                                <MDBBtn onClick={()=>toggleCollapse(service.title)}>Know more</MDBBtn>
                                <MDBCollapse isOpen={service.collapseId} >
                                    {service.desc}
                                </MDBCollapse>
                            </MDBCardBody>
                        </MDBCard> 
                    </Flip>
                </MDBCol>
            )}
            </MDBRow>
        </MDBContainer>
    );
};

export default Services;