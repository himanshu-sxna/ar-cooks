import React from "react";
import Navbar from "../../components/navbar/Navbar";
import JournalGrid from "../../components/journalGrid/journalGrid";
import Footer from "../../components/footer/footer";
import "./Blog.css";

function Blog() {
    return(
        <div>
            <Navbar/>
            <JournalGrid/>
            <Footer/>
        </div>
    );
}
export default Blog;