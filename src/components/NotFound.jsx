import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {

    const navigate = useNavigate();
    useEffect(()=>{
        setTimeout(()=>{
            navigate('/')
        },2000);
    },[]);

    return(<>
        <h2>你迷路囉~我送你回家~</h2>
    </>)
};

export default NotFound;