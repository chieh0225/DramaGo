import { Outlet } from "react-router-dom";
import FrontHeader from "./FrontHeader";
import FrontFooter from "./FrontFooter";
import DramaToasts from "../../components/DramaToasts";
import Loading from "../../components/Loading";


const FrontLayout = () => {
    return(<>
            <FrontHeader/>
            <Outlet/>
            <FrontFooter/>

            <Loading/>
            <DramaToasts/>
    </>)
};

export default FrontLayout;