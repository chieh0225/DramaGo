import { Link } from "react-router-dom";
import LoginModal from "../../components/modal/LoginModal";

const FrontHeader = () => {
    return (<>
        <header>
            {/* 手機板nav */}
            <div className="w-100 d-lg-none">
                <nav className="navbar">
                    <Link className="ms-3 navbar-brand" to="/"><img style={{width:"140px"}} src="../DramaGo/src/assets/images/Variant7.svg" alt="" /></Link>
                    <button className="navbar-toggler border-0 me-3" type="button" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <img className="nav-icon-1" src="../DramaGo/src/assets/images/icon/24px/solid/memember.svg" alt="" />
                    </button>
                    <div className=" dropdown-menu w-100 py-0" aria-labelledby="navbarDropdown">
                        <div style={{ height: `calc(100vh - 58px)` }} className="d-flex flex-column border-top border-1 border-brand-200 w-100 border-0 bg-brand-50 pt-3 pb-6 px-3">
                            <div className="mb-2">
                                <form className="d-flex position-relative">
                                    <input className="form-control py-3 ps-6 rounded-pill border border-brand-300" type="search" placeholder="搜尋劇會" aria-label="Search" />
                                    <img className="position-absolute end-0 me-5 mt-3 nav-icon-2" src="../DramaGo/src/assets/images/icon/24px/line/search.svg" alt="" />
                                </form>
                            </div>
                            <Link className="text-grey-950 w-100 pt-3 ps-4" to="/dramaList">劇會總覽</Link>
                            <button type="button" className="rounded-pill btn w-100 btn-brand-400 mt-auto" data-bs-toggle="modal" data-bs-target="#Login">
                                <div className="d-flex justify-content-center align-iteams-center">
                                    <img className="icon me-2" src="../DramaGo/src/assets/images/icon/24px/solid/ueser.svg" alt="" />
                                    <span className="text-white">登入/註冊</span>
                                </div>
                            </button>
                        </div>
                    </div>
                </nav>
            </div> 
            {/* PC版nav */}
            <div className="container d-none d-lg-block">
                <nav className="navbar">
                    <div className="d-flex align-items-center">
                        <Link className="ms-3 me-13" to="/"><img src="../DramaGo/src/assets/images/Variant7.svg" alt="" /></Link>
                        <form style={{ width: "400px" }} className="d-flex position-relative">
                            <input className="form-control py-3 ps-6 rounded-pill border border-brand-300" type="search" placeholder="搜尋劇會" aria-label="Search" />
                            <img className="position-absolute end-0 me-5 mt-3 nav-icon-2" src="../DramaGo/src/assets/images/icon/24px/line/search.svg" alt="" />
                        </form>
                    </div>
                    <div className="d-flex align-items-center ">
                        <Link className="text-grey-950 fs-b1 me-19x" to="/dramaList">劇會總覽</Link>
                        <button type="button" className="btn rounded-pill btn-brand-400 mt-auto py-3 px-5" data-bs-toggle="modal" data-bs-target="#Login">
                            <div className="d-flex justify-content-center align-iteams-center">
                                <img className="icon me-2" src="../DramaGo/src/assets/images/icon/24px/solid/ueser.svg" alt="" />
                                <span className="text-white">登入/註冊</span>
                            </div>
                        </button>
                    </div>
                </nav>
            </div>
            {/* login modal */}
            <LoginModal/>
        </header>
    </>)
};

export default FrontHeader;

