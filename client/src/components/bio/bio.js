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
                <MDBCol md="8" >
                    <Fade left>
                    <img src={img} className="img-fluid" alt="bio.jpg" />
                    </Fade>
                </MDBCol>
                <MDBCol className="mt-2">
                    <Fade right>
                    <MDBTypography tag="p" className="font-weight-bolder mt-3 nameClass text-monospace">
                        Hi!  I am Archy,
                    </MDBTypography>
                    <p className="story-text">
                        Our humble origin for Archy Cooks dates back to 23rd June 2018, a couple just casually chatting about their life goals over a cup of ‘Masala Chai’ & boom - Archy Cooks was founded & established.
                    </p>
                    <p className="story-text">
                        We first went public with our first ever market stall on 2nd September 2018. Our business has modelled into delivering super-tasty Vegetarian & Vegan delicacies to the communities & Adelaide’s foodies! We love cooking Indian Curries & Street Food, in saying that, we are also well & truly into Fusion Cuisine, meaning we love vegetarianising favorite dishes & flavour profiles from around the world & adding a dash of Indian touch to create our version of an irrestitable chomp! 
                    </p>
                    </Fade>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
};

export default Bio;