import { Link, useNavigate } from 'react-router-dom';
import LoginModal from '../../components/modal/LoginModal';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import SearchBar from '../../components/SearchBar';
import PropTypes from 'prop-types';
//照片
import logout from '../../assets/images/icon/24px/solid/logout.svg';
import logo from '../../assets/images/Variant7.svg';
import menber from '../../assets/images/icon/24px/solid/memember.svg';
import ueser from '../../assets/images/icon/24px/solid/ueser.svg';
import axios from 'axios';

const baseUrl = import.meta.env.VITE_APP_BASE_URL;
const apiPath = import.meta.env.VITE_APP_API_PATH;
const domainUrl = import.meta.env.VITE_APP_DOMAIN;

const FrontHeader = ({ state, setState, mymodal, setDramas }) => {
  const [filterDramas, setFilterDramas] = useState(null);
  const navigate = useNavigate();

  // 渲染劇會列表
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(`${baseUrl}/api/${apiPath}/products`);
        setFilterDramas(res.data.products);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  //Login modal
  const LoginOpenMadal = () => {
    mymodal.current.show();
  };

  //登出
  const logoutUser = () => {
    console.log('執行登出');
    Cookies.remove('token', { path: '/', domain: domainUrl });
    setState(false);
    navigate('/');
  };

  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      setState(true);
    } else {
      setState(false);
    }
  }, [setState]);

  return (
    <header className="header">
      {/* 手機板nav */}
      <div className="w-100 d-lg-none">
        <nav className="navbar">
          <Link className="ms-3 navbar-brand" to="/">
            <img style={{ width: '140px' }} src={logo} alt="logo" />
          </Link>
          <button
            className="navbar-toggler border-0 me-3"
            type="button"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img className="nav-icon-1" src={menber} alt="member" />
          </button>
          <div className=" dropdown-menu w-100 py-0" aria-labelledby="navbarDropdown">
            <div
              style={{ height: `calc(100vh - 58px)` }}
              className="d-flex flex-column border-top  border-brand-200 w-100 border-0 bg-brand-50 pt-3 pb-6 px-3"
            >
              <div className="mb-2">
                <div>
                  <SearchBar bar={true} filterDramas={filterDramas} setDramas={setDramas} />
                </div>
              </div>
              <Link className="text-grey-950 fs-2 w-100 pt-6 ps-4" to="/dramaList">
                劇會總覽
              </Link>
              {state && (
                <>
                  <Link className="text-grey-950 fs-2 w-100 pt-6 ps-4" to="/profile/-OKxd94Su2SMB1GKkzqL/profileInfo">
                    個人管理
                  </Link>
                  <Link className="text-grey-950 fs-2 w-100 pt-6 ps-4" to="/adminSystem">
                    後台管理
                  </Link>
                </>
              )}
            </div>
          </div>
        </nav>
      </div>
      {/* PC版nav */}
      <div className="container d-none d-lg-block">
        <nav className="navbar">
          <div className="d-flex align-items-center">
            <Link className="ms-3 me-13" to="/">
              <img src={logo} alt="logo" />
            </Link>
            <div style={{ width: '400px' }} className="">
              <SearchBar bar={true} filterDramas={filterDramas} setDramas={setDramas} />
            </div>
          </div>
          <div className="d-flex align-items-center ">
            {state && (
              <>
                <Link className="text-grey-950 fs-b1 me-19x navLink" to="/profile/-OKxd94Su2SMB1GKkzqL/profileInfo">
                  個人管理
                </Link>
                <Link className="text-grey-950 fs-b1 me-19x navLink" to="/adminSystem">
                  後台管理
                </Link>
              </>
            )}
            <Link className="text-grey-950 fs-b1 me-19x navLink" to="/dramaList">
              劇會總覽
            </Link>
            {!state && (
              <>
                <button
                  type="button"
                  className="btn rounded-pill btn-brand-400 mt-auto py-3 px-5"
                  onClick={LoginOpenMadal}
                >
                  <div className="d-flex justify-content-center align-iteams-center">
                    <img className="icon me-2" src={ueser} alt="user" />
                    <span className="text-white">登入/註冊</span>
                  </div>
                </button>
              </>
            )}
            {state && (
              <>
                <button type="button" className="btn brandBtn-1-lg fs-6 mt-auto py-3 px-5" onClick={logoutUser}>
                  <div className="d-flex justify-content-center align-iteams-center">
                    <img className="icon me-2" src={logout} alt="logout" />
                    <span className="text-white">登出</span>
                  </div>
                </button>
              </>
            )}
          </div>
        </nav>
      </div>
      {/* login modal */}
      <LoginModal mymodal={mymodal} setState={setState} />
    </header>
  );
};

export default FrontHeader;
