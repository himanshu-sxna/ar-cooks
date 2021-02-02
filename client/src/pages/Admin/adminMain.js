import React from "react";
import AdminNav from "../../components/adminNav/adminNav";
import AdminBlog from "../../components/adminBlog/adminBlog";
import API from "../../utils/API";

function AdminMain () {

    function SendBlogData(blogData) {
        API.postJournalData(blogData)
        .then((res) => {
            console.log(res);
        })
        .catch(err => console.log(err));
    }
    return(
        <div>
            <AdminNav/>
            <AdminBlog SendBlogData={SendBlogData}/>
        </div>
        
    );
}

export default AdminMain;