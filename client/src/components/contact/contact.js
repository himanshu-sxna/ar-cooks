import React from "react";
import { MDBContainer,
         MDBRow, 
         MDBCol, 
         MDBBtn, 
         MDBIcon, 
         MDBInput,
         MDBTypography } from 'mdbreact';
import "../services/services.css";
import "./contact.css";

function ContactForm() {
return (
        <MDBContainer>
            <MDBRow className="text-center wrapper">
                <MDBCol>
                    <MDBTypography tag="h2" variant="h2-responsive" className="title font-weight-bolder">
                        Get in Touch
                    </MDBTypography>
                </MDBCol>
            </MDBRow>
            <MDBRow className="mt-4">
                <MDBCol md="4 mx-5 mt-3">
                    <MDBTypography tag="p">
                        We love to look after your catering needs, please feel free to get in touch with us if you have any questions.
                    </MDBTypography>
                    <MDBTypography tag="p" className="pt-2">
                        <a href="mailto:archycooks1@gmail.com" >
                            <i className="fa fa-envelope mr-2 icon-text" /> 
                            <span className="icon-text">archycooks1@gmail.com</span> 
                        </a>
                    </MDBTypography>
                    <MDBTypography tag="p">
                        <i className="fa fa-phone mr-1" /> + 01 234 567 88
                    </MDBTypography>
                </MDBCol>
                <MDBCol md="5 mx-5 mt-2">
                    <form>
                        <div className="grey-text">
                            <MDBInput label="Your name" icon="user" group type="text" validate error="wrong" success="right" />
                            <MDBInput label="Your contact details" icon="envelope" group type="email" validate error="wrong" success="right" />
                            <MDBInput type="textarea" rows="2" label="Your message" icon="pencil-alt" />
                        </div>
                        <div className="text-center">
                            <MDBBtn >
                                Send
                            </MDBBtn>
                        </div>
                    </form>
                </MDBCol>
            </MDBRow>
</MDBContainer>
);
};

export default ContactForm;