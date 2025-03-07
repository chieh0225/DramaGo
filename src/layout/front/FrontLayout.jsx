import { Outlet } from "react-router-dom";
import FrontHeader from "./FrontHeader";
import FrontFooter from "./FrontFooter";
import { useRef, useState } from "react";



const FrontLayout = () => {
    const [state, setState] = useState(false);
    const mymodal = useRef(null);

    return (<>
        <FrontHeader setState={setState} state={state} mymodal={mymodal} />
        <Outlet context={{ state , mymodal }} />
        <FrontFooter />
    </>)
};

export default FrontLayout;