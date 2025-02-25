import "../assets/scss/_dropdown.scss";

const Dropdown = ({options}) => {

    return(<>
        <div className="dropdown mx-1">
            <button className="btn btn-outline-brand-300 rounded-pill d-flex text-grey-400" type="button" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                <span>全部</span>
                <span className="material-symbols-rounded ms-4">keyboard_arrow_down</span>
            </button>
            <ul className="dropdown-menu">
                <li><a className="dropdown-item active" href="#">選項1</a></li>
                <li><a className="dropdown-item" href="#">選項2</a></li>
                <li><a className="dropdown-item" href="#">選項3</a></li>
            </ul>
        </div>
    </>)
};


export default Dropdown;
