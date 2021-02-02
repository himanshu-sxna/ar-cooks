import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MDBContainer, 
         MDBRow, 
         MDBCol,
         MDBTypography,
         MDBBtn, 
         MDBCard, 
         MDBCardBody, 
         MDBCardImage, 
         MDBCardTitle, 
         MDBCardText, } from "mdbreact";
import API from  "../../utils/API";
import "../services/services.css";
import "./journalGrid.css";

function JournalGrid() {

    const [ JournalArray, SetJournalArray ]  = useState([]);
    const [ isFetching, SetisFetching ] = useState();

    useEffect(() => {
        API.getJournals()
        .then((res) => {
            SetJournalArray(res.data);
        })
        .catch(err => console.log(err));
    }, []);

    return(
        <MDBContainer>
             <MDBRow className="text-center wrapper">
                <MDBCol>
                    <MDBTypography tag="h2" variant="h2-responsive" className="title font-weight-bolder">
                        Journal
                    </MDBTypography>
                </MDBCol>
            </MDBRow>
            <MDBRow className="text-center mt-4">
                <MDBCol>
                    <MDBTypography tag="p" variant="h4-responsive" className="service-desc">
                    Past, Present & Future
                    </MDBTypography>
                </MDBCol>
            </MDBRow>
    
            { JournalArray.map((item) =>
            <MDBRow className="m-4">
                <MDBCol>         
                    <MDBCard key={item._id}>
                        <div className="card-horizontal">
                            <MDBCardImage className="img-fluid" src={item.imageURL}
          waves />
                            <MDBCardBody>
                                <MDBCardTitle>{item.title}</MDBCardTitle>
                                <MDBCardText>By: {item.author}</MDBCardText>
                                <MDBCardText>{item.date}</MDBCardText>
                                <Link to={"/blog/" + item._id}>
                                    <MDBBtn href="#">Read more</MDBBtn>
                                </Link>
                            </MDBCardBody>
                        </div>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
            )}
        </MDBContainer>
    );
}

export default JournalGrid;