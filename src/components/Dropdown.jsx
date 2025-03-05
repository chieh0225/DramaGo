import { useState } from "react";
import "../assets/scss/_dropdown.scss";

const Dropdown = ({options,type}) => {

    const [activeOption,setActiveOption] = useState(options?.[0]||'全部');

    const handleSortClick = (option) => {
        setActiveOption(option);
    };

    return(<>
        <div className="dropdown mx-1">
            <button className="btn btn-outline-brand-300 rounded-pill d-flex justify-content-between text-grey-400 w-100" type="button" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                <span>{activeOption||'全部'}</span>
                <span className="material-symbols-rounded">keyboard_arrow_down</span>
            </button>
            <ul className="dropdown-menu w-100">
                {
                    options&&
                    options.map(option=>
                        <li key={option}>
                            <a 
                            className={`dropdown-item ${activeOption===option?'active':''}`}
                            role="button"
                            onClick={()=>handleSortClick(option)}
                            >{option}</a>
                        </li>
                    )
                }
            </ul>
        </div>
    </>)
};


export default Dropdown;
