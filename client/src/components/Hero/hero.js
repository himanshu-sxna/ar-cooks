import React, { useState } from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import { MDBNavbar, 
         MDBNavbarBrand,
         MDBNavbarNav, 
         MDBNavbarToggler, 
         MDBCollapse, 
         MDBNavItem, 
         MDBNavLink, 
         MDBMask, 
         MDBView,
         MDBTypography } from "mdbreact";
import Fade from 'react-reveal/Fade';
import "./hero.css";
import img from "../../images/hero2 (2).jpg";

function Hero() {

    const [ collapse, SetCollapse ] = useState();
    const [ isWideEnough, SetIsWideEnough ] = useState();

    function onClick() {
        SetCollapse(!collapse);
    };

    return(
        
        <div>
        <header>
          <Router>
            <MDBNavbar dark color="elegant-color-dark" expand="md" fixed="top" scrolling transparent scrollingNavbarOffset={670} className="introWrapper">
              <MDBNavbarBrand href="/">
                <strong>Archy Cooks Logo</strong>
              </MDBNavbarBrand>
              {!isWideEnough && <MDBNavbarToggler onClick={onClick} />}
              <MDBCollapse isOpen={collapse} navbar>
                <MDBNavbarNav right>
                  <MDBNavItem className="navPills">
                    <MDBNavLink  to="#">HOME</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem className="navPills">
                    <MDBNavLink  to="#">SERVICES</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem className="navPills" >
                    <MDBNavLink to="#">ABOUT</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem className="navPills" >
                    <MDBNavLink to="#">CONTACT</MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>
          </Router>

          <MDBView src={img} className="hero-img">
            <MDBMask overlay="black-strong" className="flex-center flex-column text-white text-center">
              <Fade cascade duration={2000}>
              <MDBTypography tag="h3" variant="h3-responsive" className="hero-h3 mx-1">
                Refined Taste
              </MDBTypography>
              </Fade>
              <Fade cascade delay={1000} duration={2000}>
              <MDBTypography tag="h3" variant="h3-responsive" className="hero-h3 mx-1">
                Authentic Flavors
              </MDBTypography>
              </Fade>
              <Fade cascade delay={2000} duration={2000}>
              <MDBTypography tag="h3" variant="h3-responsive" className="hero-h3 mx-1">
                Innovative Vegetarian Recipes
              </MDBTypography>
              </Fade>
              <Fade cascade delay={3000} duration={2500}>
              <MDBTypography tag="h1" variant="h1-responsive" className="hero-h1 mx-1" >
                Welcome to Archy Cooks
              </MDBTypography>
              </Fade>
            </MDBMask>
          </MDBView>
        </header>
      </div>

    );
}

export default Hero;