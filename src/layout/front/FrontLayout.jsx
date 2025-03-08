import { Outlet } from "react-router-dom";
import FrontHeader from "./FrontHeader";
import FrontFooter from "./FrontFooter";
import DramaToasts from "../../components/DramaToasts";
import Loading from "../../components/Loading";

const FrontLayout = () => {
    const [state, setState] = useState(false);
    const mymodal = useRef(null);
    const [dramas,setDramas] = useState([]);
    return(<>
             <FrontHeader setState={setState} state={state} mymodal={mymodal} setDramas={setDramas} dramas={dramas} />
             <Outlet context={{ state , mymodal ,setDramas ,dramas }} />
             <FrontFooter />

            <Loading/>
            <DramaToasts/>
};

export default FrontLayout;