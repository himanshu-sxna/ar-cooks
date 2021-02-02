import React from "react";
import { MDBContainer, 
         MDBRow, 
         MDBCol,
         MDBTypography  } from "mdbreact";
import img from "../../images/bio.jpg";
import Fade from 'react-reveal/Fade';
import "./bio.css";
import "../services/services.css";


function Bio() {

    return(
        <MDBContainer className="my-5">
            <MDBRow className="text-center wrapper">
                <MDBCol>
                    <MDBTypography tag="h2" variant="h2-responsive" className="title font-weight-bolder">
                        Our Story
                    </MDBTypography>
                </MDBCol>
            </MDBRow>
            <MDBRow className="mt-5">
                <MDBCol md="8" className="mt-4" >
                    <Fade left>
                    <img src={img} className="img-fluid" alt="bio.jpg" />
                    </Fade>
                </MDBCol>
                <MDBCol className="">
                    <Fade right>
                    <MDBTypography tag="p" className="font-weight-bolder mt-3 nameClass text-monospace">
                        HELLO!
                    </MDBTypography>
                    <p className="story-text">
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',
                    </p>
                    <p className="story-text">
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like.
                    </p>
                    </Fade>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
};

export default Bio;