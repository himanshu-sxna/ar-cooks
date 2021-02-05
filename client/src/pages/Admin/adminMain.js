import React from "react";
import AdminNav from "../../components/adminNav/adminNav";
import AdminBlog from "../../components/adminBlog/adminBlog";
import AdminProducts from "../../components/adminProducts/adminProducts";
import API from "../../utils/API";

function AdminMain () {
    return(
        <div>
            <AdminNav/>
            <AdminBlog />
            <AdminProducts/>
        </div>
        
    );
}

export default AdminMain;