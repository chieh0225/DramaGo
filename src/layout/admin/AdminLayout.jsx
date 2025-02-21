import AdminHeader from "../admin/AdminHeader";
import AdminFooter from "../admin/AdminFooter";
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const AdminLayout = () => {
    const navigate = useNavigate();
    useEffect(()=>{
        navigate('/adminSystem/admin');
    },[]);

    return(<>
        <AdminHeader/>
        <Outlet/>
        <AdminFooter/>
    </>)
};

export default AdminLayout;