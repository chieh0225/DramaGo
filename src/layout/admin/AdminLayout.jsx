import AdminHeader from "../admin/AdminHeader";
import AdminFooter from "../admin/AdminFooter";
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Loading from "../../components/Loading";
import DramaToasts from "../../components/DramaToasts";

const AdminLayout = () => {
    const navigate = useNavigate();
    useEffect(()=>{
        navigate('/adminSystem/admin');
    },[]);

    return(<>
        <AdminHeader/>
        <Outlet/>
        <AdminFooter/>

        <Loading/>
        <DramaToasts/>
    </>)
};

export default AdminLayout;