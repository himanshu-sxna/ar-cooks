import React from "react";
import { MDBCol,
         MDBContainer,
         MDBRow, 
         MDBFooter,
         MDBTypography } from "mdbreact";
import img1 from "../../images/insta1.jpg";
import img2 from "../../images/insta 2.jpg";
import img3 from "../../images/insta3.jpg";
import img4 from "../../images/insta4.jpg";
import img5 from "../../images/insta5jpg.jpg";
import img6 from "../../images/insta6.jpg";

const imgArray = [ img1, img2, img3, img4, img5, img6 ];

function Footer() {
  return (
    <MDBFooter color="elegant-color-dark" className="font-small pt-4 mt-5">
      <MDBContainer className="text-center">
        <MDBRow className="text-center">
          <MDBCol>
            <MDBTypography variant="h1-responsive" tag="p">
                follow us @archycooks
              </MDBTypography>
          </MDBCol>
        </MDBRow>
        <MDBRow className="mt-4">
          { imgArray.map ((image) =>
          <MDBCol>
            <img src={image} alt="instaimg.jpg" className="m-2 img-fluid"/>
          </MDBCol> 
          )}
        </MDBRow>
        <MDBRow className="text-center mt-3 pb-3">
          <MDBCol md="3" lg="3" xl="3" className="mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">
              ARCHY COOKS LOGO
            </h6>
          </MDBCol>
        </MDBRow>
        <MDBRow className="text-center">
          <MDBCol className="mx-auto mt-3">
            <p>
              <a href="mailto:archycooks1@gmail.com">
                <i className="fa fa-envelope mr-1" /> archycooks1@gmail.com
              </a>
            </p>
            <p>
              <i className="fa fa-phone mr-1" /> + 01 234 567 88
            </p>
          </MDBCol>
        </MDBRow>
        <MDBRow className="text-center">
          <MDBCol>
            <div className="text-center">
              <ul className="list-unstyled list-inline">
                <li className="list-inline-item">
                  <a className="btn-floating btn-sm rgba-white-slight mx-1">
                    <i className="fab fa-facebook-f" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a className="btn-floating btn-sm rgba-white-slight mx-1">
                    <i className="fab fa-instagram" />
                  </a>
                </li>
              </ul>
            </div>
          </MDBCol>
        </MDBRow>
        <MDBRow className="text-center">
          <MDBCol>
            <a href="#!">Privacy Policy</a>
          </MDBCol>
        </MDBRow>
        <MDBRow className="text-center">
          <MDBCol>
              <p className="grey-text">
                &copy; {new Date().getFullYear()} Copyright:{" Archy Cooks"}
              </p>
            </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBFooter>
  );
}

export default Footer;