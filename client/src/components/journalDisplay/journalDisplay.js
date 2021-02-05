import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import { MDBContainer, 
         MDBRow, 
         MDBCol,
         MDBTypography  } from "mdbreact";

function JournalDisplay(props) {

    const [ journal, SetJournal ]  = useState([]);

    useEffect(() => {
        API.getJournalbyID(props.id)
          .then((res) => {
            SetJournal(res.data);
          })
          .catch(err => console.log(err));
      }, []);

    return(
        <MDBContainer style={{marginTop:150}}>
            <MDBRow className="text-center">
                <MDBCol>
                    <MDBTypography tag="h2" variant="h2-responsive" className="title font-weight-bolder">
                        {journal.title}
                    </MDBTypography>
                </MDBCol>
            </MDBRow>
            <MDBRow className="text-center">
                <MDBCol className="m-3">
                    <MDBTypography tag="p" className="font-weight-bolder mt-3 nameClass text-monospace">
                        By:{journal.author}
                    </MDBTypography>
                </MDBCol>
            </MDBRow>
            <MDBRow className="text-center mt-3 ">
                <MDBCol>
                    {journal.body}
                </MDBCol>
            </MDBRow>   
        </MDBContainer>
    );
}

export default JournalDisplay;