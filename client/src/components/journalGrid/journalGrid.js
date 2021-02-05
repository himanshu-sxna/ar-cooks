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
                            <MDBCardImage className="card-img-top" src={item.imageURL}
          waves />
                            <MDBCardBody>
                                <MDBCardTitle className="card-title">{item.title}</MDBCardTitle>
                                <MDBCardText className="card-author">By: {item.author}</MDBCardText>
                                <Link to={"/blog/" + item._id}>
                                    <MDBBtn size="lg" href="#">Read more</MDBBtn>
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