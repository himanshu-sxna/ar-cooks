import React from "react";
import Navbar from "../../components/navbar/Navbar";
import JournalDisplay from "../../components/journalDisplay/journalDisplay";
import Footer from "../../components/footer/footer";

function JournalDetail(props) {

    return(
      <div>
        <Navbar/>
        <JournalDisplay id={props.match.params.id}/>
        <Footer/>
      </div>
    );      
}

export default JournalDetail;