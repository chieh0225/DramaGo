import { Outlet } from "react-router-dom";

import FrontHeader from "./FrontHeader";
import FrontFooter from "./FrontFooter";

const FrontLayout = () => {

    return(<>
        <FrontHeader/>
        <Outlet/>
        <FrontFooter/>
    </>)
};

export default FrontLayout;