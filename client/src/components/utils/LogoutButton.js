import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { MDBBtn } from "mdbreact";

const LogoutButton = () => {
  const { logout } = useAuth0();
  return (
      <MDBBtn onClick={() => logout( {returnTo: window.location.origin,})} 
            style={{boxShadow: "none"}}>
          LOGOUT
      </MDBBtn>
  );
};

export default LogoutButton;