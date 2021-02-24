import React,  { useState, useContext } from "react";
import { MDBNavbar,
         MDBNavbarBrand,
         MDBNavbarNav,
         MDBNavbarToggler, 
         MDBCollapse, 
         MDBNavItem, 
         MDBNavLink,MDBMask, 
         MDBView,
         MDBTypography } from "mdbreact";
import Fade from 'react-reveal/Fade';
import "./hero.css";
import img from "../../images/hero.jpg";
import ShoppingCartFAB from "../utils/ShoppingCartFAB/shoppingcratFAB";
import CartContext from "../context/cartContext";

function Hero() {

  const { displayCart } = useContext(CartContext);

  const [ collapse, SetCollapse ] = useState();
  const [ isWideEnough, SetIsWideEnough ] = useState();

  function onClick() {
      SetCollapse(!collapse);
  };

    return(
      <header>
        <MDBNavbar dark expand="md" color="default-color-dark" transparent fixed="top" scrolling scrollingNavbarOffset={820} className="introWrapper">
        <MDBNavbarBrand href="/">
          <strong>LOGO</strong>
        </MDBNavbarBrand>
        {!isWideEnough && <MDBNavbarToggler onClick={onClick} />}
        <MDBCollapse isOpen={collapse} navbar>
          <MDBNavbarNav right>
            <MDBNavItem active className="navPills">
              <MDBNavLink to="/home">HOME</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem className="navPills">
              <MDBNavLink to="/products">PRODUCTS</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem className="navPills" >
              <MDBNavLink to="/blog">BLOG</MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
        <MDBView src={img} className="hero-img">
          <MDBMask overlay="black-light" className="flex-center flex-column text-white text-center">
            <Fade cascade duration={2000}>
            <MDBTypography tag="h3" variant="h3-responsive" className="hero-h3 mx-1">
              Landing Page
            </MDBTypography>
            </Fade>
            <Fade cascade delay={1000} duration={2000}>
            <MDBTypography tag="h3" variant="h3-responsive" className="hero-h3 mx-1">
              Online Store
            </MDBTypography>
            </Fade>
            <Fade cascade delay={2000} duration={2000}>
            <MDBTypography tag="h3" variant="h3-responsive" className="hero-h3 mx-1">
              Online Blog
            </MDBTypography>
            </Fade>
            <Fade cascade delay={3000} duration={2500}>
            <MDBTypography tag="h1" variant="h1-responsive" className="hero-h1 mx-1" >
              Get Your Business Online
            </MDBTypography>
            </Fade>
          </MDBMask>
          { displayCart && <ShoppingCartFAB/> }
        </MDBView>
      </header>
    );
}

export default Hero;