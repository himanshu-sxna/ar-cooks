import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { MDBBtn } from "mdbreact";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
      <MDBBtn size="sm" className="text-muted" onClick={() => loginWithRedirect()} style={{boxShadow: "none"}}>
          Admin Login
      </MDBBtn>
  );
};

export default LoginButton;