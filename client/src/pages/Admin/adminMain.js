import React from "react";
import AdminNav from "../../components/adminNav/adminNav";
import AdminBlog from "../../components/adminBlog/adminBlog";
import AdminProducts from "../../components/adminProducts/adminProducts";

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