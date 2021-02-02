import React, { useState } from "react";
import { MDBNavbar,
         MDBNavbarBrand,
         MDBNavbarNav,
         MDBNavItem,
         MDBNavLink, 
         MDBNavbarToggler, 
         MDBCollapse, 
         MDBContainer } from "mdbreact";
import LogoutBtn from "../utils/LogoutButton";

function AdminNav() {

    const [ collapse, SetCollapse ] = useState();
    const [ isWideEnough, SetIsWideEnough ] = useState();

    function onClick() {
    SetCollapse(!collapse);
    };

return(
    <MDBContainer>
      <MDBNavbar color="red" dark expand="md" style={{ marginTop: "20px" }}>
        <MDBNavbarBrand>
          <strong className="white-text">LOGO</strong>
        </MDBNavbarBrand>
        {!isWideEnough && <MDBNavbarToggler onClick={onClick} />}
        <MDBCollapse isOpen={collapse} navbar>
          <MDBNavbarNav right>
            <MDBNavItem>
                <MDBNavLink className="waves-effect waves-light" to="#!">
                    <LogoutBtn/>
                </MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    </MDBContainer>
);
}

export default AdminNav;