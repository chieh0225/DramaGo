// Todo 更換圖片功能

import { NavLink, Outlet } from "react-router-dom";

import avatar from "/images/avatar-3.png";

const routes = [
  {
    path: "profileInfo",
    name: "個人資訊",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className="me-2"
      >
        <title>profile_fill</title>
        <g id="profile_fill" fill="none">
          <path d="M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z" />
          <path
            fill="#FF8A20FF"
            d="M20 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-3 12H7a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2m-7-8H8a2 2 0 0 0-1.995 1.85L6 9v2a2 2 0 0 0 1.85 1.995L8 13h2a2 2 0 0 0 1.995-1.85L12 11V9a2 2 0 0 0-1.85-1.995zm7 4h-3a1 1 0 0 0-.117 1.993L14 13h3a1 1 0 0 0 .117-1.993zm-7-2v2H8V9zm7-2h-3a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2"
          />
        </g>
      </svg>
    ),
  },
  {
    path: "profileRecord",
    name: "我的劇會記錄",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className="me-2"
      >
        <title>calendar_2_fill</title>
        <g id="calendar_2_fill" fill="none" fillRule="evenodd">
          <path d="M24 0v24H0V0zM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.036c-.01-.003-.019 0-.024.006l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.016-.018m.264-.113-.014.002-.184.093-.01.01-.003.011.018.43.005.012.008.008.201.092c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.003-.011.018-.43-.003-.012-.01-.01z" />
          <path
            fill="#FF8A20FF"
            d="M16 3a1 1 0 0 1 1 1v1h2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2V4a1 1 0 0 1 2 0v1h6V4a1 1 0 0 1 1-1M8.01 16H8a1 1 0 0 0-.117 1.993L8.01 18a1 1 0 1 0 0-2m4 0H12a1 1 0 0 0-.117 1.993l.127.007a1 1 0 1 0 0-2m4 0H16a1 1 0 0 0-.117 1.993l.127.007a1 1 0 1 0 0-2m-8-4H8a1 1 0 0 0-.117 1.993L8.01 14a1 1 0 1 0 0-2m4 0H12a1 1 0 0 0-.117 1.993l.127.007a1 1 0 1 0 0-2m4 0H16a1 1 0 0 0-.117 1.993l.127.007a1 1 0 1 0 0-2M19 7H5v2h14z"
          />
        </g>
      </svg>
    ),
  },
  {
    path: "profileCollection",
    name: "我的收藏",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className="me-2"
      >
        <title>bookmark_fill</title>
        <g id="bookmark_fill" fill="none">
          <path d="M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z" />
          <path
            fill="#FF8A20FF"
            d="M4 5a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v16.028c0 1.22-1.38 1.93-2.372 1.221L12 18.229l-5.628 4.02c-.993.71-2.372 0-2.372-1.22z"
          />
        </g>
      </svg>
    ),
  },
];

const Profile = () => {
  return (
    <>
      <div className="profile-container">
        <div className="container pt-13 pb-18">
          <div className="row">
            <div className="col-lg-4 mb-lg-0 mb-6">
              <div className="profile">
                <div className="profile-info">
                  <div className="profile-pic-container position-relative d-inline-block">
                    <div className="flex-shrink-0">
                      <img
                        src={avatar}
                        alt="正在COS的角色"
                        width="200"
                        height="200"
                        className="rounded-circle object-fit-cover profile-pic"
                      />
                    </div>
                    <a
                      href=""
                      className="change-btn rounded-circle position-absolute bg-white
                  d-flex justify-content-center align-items-center"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <title>點擊更換個人圖片~</title>
                        <g id="refresh_3_fill" fill="none">
                          <path d="M24 0v24H0V0zM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.036c-.01-.003-.019 0-.024.006l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.016-.018m.264-.113-.014.002-.184.093-.01.01-.003.011.018.43.005.012.008.008.201.092c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.003-.011.018-.43-.003-.012-.01-.01z" />
                          <path
                            fill="#FF8A20FF"
                            d="M20 9.5a1.5 1.5 0 0 1 1.5 1.5 8.5 8.5 0 0 1-8.5 8.5h-2.382a1.5 1.5 0 0 1-2.179 2.06l-2.494-2.494a1.495 1.495 0 0 1-.445-1.052v-.028c.003-.371.142-.71.368-.97l.071-.077 2.5-2.5a1.5 1.5 0 0 1 2.18 2.061H13a5.5 5.5 0 0 0 5.5-5.5A1.5 1.5 0 0 1 20 9.5m-4.44-7.06 2.5 2.5a1.5 1.5 0 0 1 0 2.12l-2.5 2.5a1.5 1.5 0 0 1-2.178-2.06H11A5.5 5.5 0 0 0 5.5 13a1.5 1.5 0 1 1-3 0A8.5 8.5 0 0 1 11 4.5h2.382a1.5 1.5 0 0 1 2.179-2.06Z"
                          />
                        </g>
                      </svg>
                    </a>
                  </div>

                  <p className="fs-c mt-11 mb-3">
                    我正在COS  薛芳菲 (墨雨雲間)
                  </p>
                  <p className="fs-3 fw-bold mb-3">樂樂</p>
                  <p className="fs-6 mb-11">愛追劇的樂</p>
                </div>
                <div className="profile-nav">
                  <ul className="nav nav-pills flex-column gap-5">
                    {routes.map((route) => (
                      <li className="nav-item" key={route.path}>
                        <NavLink className="nav-link" to={route.path}>
                          {route.icon}
                          {route.name}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
