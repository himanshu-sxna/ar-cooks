import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
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
        <header>
          <Router>
              <MDBNavbar light fixed="top" expand="md" scrolling scrollingNavbarOffset={100} className="navClass">
                <MDBNavbarBrand href="/">
                  <p>Archy Cooks</p>
                </MDBNavbarBrand>
                {!isWideEnough && <MDBNavbarToggler onClick={onClick} />}
                <MDBCollapse isOpen={collapse} navbar>
                <MDBNavbarNav right>
                  <MDBNavItem active>
                    <MDBNavLink to="#">HOME</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#">ABOUT</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#">CONTACT</MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
                </MDBCollapse>
              </MDBNavbar>
          </Router>
        </header>
      </div>
    );
};

export default Navbar;