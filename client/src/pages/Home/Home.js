import React from "react";
import Hero from "../../components/Hero/hero";
import Bio from "../../components/bio/bio";
import Services from "../../components/services/service";
import Contact from "../../components/contact/contact";
import Footer from "../../components/footer/footer";
import "./Home.css";
import API from "../../utils/API";
import Cookies from 'js-cookie';

function Home() {

  let sessionID = Cookies.get("snipcart-cart");
  API.sendSessionID(sessionID);

    return(
        <div>
            <Hero/>
            <Services/>
            <Bio/>
            <Contact/>
            <Footer/>
        </div> 
    );
};

export default Home;