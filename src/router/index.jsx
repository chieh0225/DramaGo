import { createHashRouter,Navigate} from "react-router-dom";

// 前台
import FrontLayout from "../layout/front/FrontLayout";
import FrontHome from "../pages/front/FrontHome";
import DramaList from "../pages/front/DramaList";
import DramaInfo from "../pages/front/DramaInfo";
import Profile from "../pages/front/Profile";
// 後台
import AdminLayout from "../layout/admin/AdminLayout";
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
    {                                        //前台主版
        element:<FrontLayout/>,
        children:[
            {
                index:true,                  //首頁
                element:<FrontHome/>,
            },
            {
                path:'dramaList',            //劇會總覽頁
                element:<DramaList/>,
            },
            {
                path:'dramaInfo',            //劇會內頁
                element:<DramaInfo/>,
            },
            {
                path:'profile',              //個人主頁
                element:<Profile/>,
            },
        ]    
    },
    {
        path:'/adminSystem',                 //後台主版
        element:<AdminLayout/>,
        children:[
            {
                path:'', 
                element:<Navigate to="admin" replace />,
            },
            {
                path:'admin',                //後台首頁
                element:<AdminHome/>,
            },
            {
                path:'drama-manage',         //劇會管理頁
                element:<DramaManage/>,
            },
            {
                path:'tag-manage',           //標籤管理頁
                element:<TagManage/>,
            },
            {
                path:'chart',                //圖表分析頁
                element:<Chart/>,
            },
        ]    
    },
    {
        path:'*',                            //404錯誤頁
        element:<NotFound/>     
    },
    {
        path:'/design',     //樣式檢視頁 (最後會刪掉)
        element:<Design/>
    },
    {
        path:'compView',
        element:<ComponentsView/>
    }
]);

export default router;