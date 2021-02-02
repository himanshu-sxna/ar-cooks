import React, { useState } from 'react';
import { MDBNavbar,
         MDBNavbarBrand,
         MDBNavbarNav,
         MDBNavbarToggler, 
         MDBCollapse, 
         MDBNavItem, 
         MDBNavLink,
                    } from 'mdbreact';
import "./navbarStyles.css";

function Navbar () {

    const [ collapse, SetCollapse ] = useState();
    const [ isWideEnough, SetIsWideEnough ] = useState();

    function onClick() {
        SetCollapse(!collapse);
    };

    return(
      <div>
        <MDBNavbar dark expand="md" color="default-color-dark" fixed="top" scrolling scrollingNavbarOffset={200} className="introWrapper">
          <MDBNavbarBrand href="/">
            <strong>LOGO</strong>
          </MDBNavbarBrand>
          {!isWideEnough && <MDBNavbarToggler onClick={onClick} />}
          <MDBCollapse isOpen={collapse} navbar>
            <MDBNavbarNav right>
              <MDBNavItem className="navPills">
                <MDBNavLink to="/home">HOME</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem className="navPills">
                <MDBNavLink  to="/products">PRODUCTS</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem className="navPills" >
                <MDBNavLink to="/blog">BLOG</MDBNavLink>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
      </div>
    );
};

export default Navbar;