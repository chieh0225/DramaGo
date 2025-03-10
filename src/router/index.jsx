import { createHashRouter, Navigate } from "react-router-dom";

// 前台
import FrontLayout from "../layout/front/FrontLayout";
import FrontHome from "../pages/front/FrontHome";
import DramaList from "../pages/front/DramaList";
import DramaInfo from "../pages/front/DramaInfo";
import Profile from "../pages/front/Profile";
import ProfileInfo from "../pages/front/ProfileInfo";
import ProfileRecord from "../pages/front/ProfileRecord";
import ProfileCollection from "../pages/front/ProfileCollection";
// 後台
import AdminHome from "../pages/admin/AdminHome";
import DramaManage from "../pages/admin/DramaManage";
import TagManage from "../pages/admin/TagManage";
import Chart from "../pages/admin/Chart";
// 全域
import NotFound from "../components/NotFound";
// 套件
import Design from "../plugin/Design";
import ComponentsView from "../plugin/ComponentsView";

const router = createHashRouter([
  {
    //前台主版
    element: <FrontLayout />,
    children: [
      {
        index: true, //首頁
        element: <FrontHome />,
      },
      {
        path: "dramaList", //劇會總覽頁
        element: <DramaList />,
      },
      {
        path: "dramaInfo", //劇會內頁
        element: <DramaInfo />,
      },
      {
        path: "profile", //個人主頁
        element: <Profile />,
        children: [
                    {
                        path: "profileInfo", //個人主頁個人資訊頁
                        element: <ProfileInfo />,
                    },
                    {
                        path: "profileRecord", //個人主頁劇會記錄頁
                        element: <ProfileRecord />,
                    },
                    {
                        path: "profileCollection", //個人主頁收藏頁
                        element: <ProfileCollection />,
                    },
                ],
            },
            {
                path: '/adminSystem',                 //後台主版
                element: <AdminHome />,
                children: [
                    {
                        index: true,            //劇會管理頁
                        element: <DramaManage />,
                    },
                    {   
                        path: 'tag-manage',           //標籤管理頁
                        element: <TagManage />,
                    },
                    {
                        path: 'chart',                //圖表分析頁
                        element: <Chart />,
                    },
                ]
            },
        ]
    },
    {
        path: '*', //404錯誤頁
        element: <NotFound />
    },
    {
        path: '/design',     //樣式檢視頁 (最後會刪掉)
        element: <Design />
    },
    {
        path: 'compView',
        element: <ComponentsView />
    }
    ]
);

export default router;
