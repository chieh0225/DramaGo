import { useEffect } from "react";
import { useRef } from "react";
import { Modal } from "bootstrap";

import Breadcrumb from "../../components/Breadcrumb";
import SearchBar from "../../components/SearchBar";
import Dropdown from "../../components/Dropdown";
import DramaFormModal from "../../components/modal/DramaFormModal";


const DramaList = () => {
    const categoryTags = ['全部','看電影','看表演','逛劇展','買劇品','上劇課','劇本殺','接劇龍','聽劇透','遊劇旅','追影星'];
    const dayTags = ['全部','1天內','2天以上'];
    const costTags = ['全部','免費','AA制','團主請客','男生請客','女生請客'];
    const genderTags = ['不限男女','限男','限女'];
    const ageTags = ['不限年齡','限年齡'];
    const areaTags = ['不限居住地','限居住地'];
    const stateTags = ['全部','差一人出團','三天內到期'];
    const dramaTags = ['追影星','晚上','AA制','台北'];
    const dramaFormRef = useRef(null);
    const dramaFormInstance = useRef(null);

    const openDramaForm = (e)=>{
        e.preventDefault();
        dramaFormInstance.current.show();
    };

    const closeDramaForm = ()=>{
        dramaFormInstance.current.hide();
    };

    useEffect(()=>{
        if (dramaFormRef.current) {
            dramaFormInstance.current = new Modal(dramaFormRef.current);
        };
        dramaFormRef.current.addEventListener("hidden.bs.modal", () => {
            if (openButtonRef.current) {
                openButtonRef.current.focus();
            }
        });
    },[]);

    return(<>
        <main className="dramaList bg-brand-50 pt-13">
            <div className="container">
                <Breadcrumb/>
                <div className="row">
                    <div className="col-3">
                        <div className="addDrama-bg rounded-5 rounded-bottom-0 d-flex align-items-center">
                            <a href="#" className="fs-5 text-white ms-9" onClick={openDramaForm}>
                                <i className="bi bi-plus-circle-fill"></i>
                                <span className="ms-1">我要發起劇會</span>
                            </a>
                            <DramaFormModal
                            dramaFormRef={dramaFormRef}
                            closeDramaForm={closeDramaForm}
                            />
                        </div>
                        <div style={{width:'310px'}} className="d-flex flex-column align-items-start bg-white p-5">
                            <SearchBar/>
                            <div className="mt-8 mb-4">
                                <span className="h5 mb-4">劇會類型</span>
                                <br />
                                {
                                    categoryTags.map((tag,index)=>
                                        <span className="my-1 mx-1" key={index}>
                                            <input type="radio" className="btn-check" name={tag} id="categoryTag1" autoComplete="off"/>
                                            <label className={`brandBtn-3 ${tag==='全部'?'active':null}`} htmlFor="categoryTag1" style={{cursor:'pointer'}} >{tag}</label>
                                        </span>
                                    )
                                }
                            </div>
                            <div className="my-4">
                                <span className="h5 mb-4 ">劇會時間</span>
                                <br />
                                {
                                    dayTags.map((tag,index)=>
                                        <span className="my-1 mx-1" key={index}>
                                            <input type="radio" className="btn-check" name={tag} id="categoryTag1" autoComplete="off"/>
                                            <label className={`brandBtn-3 ${tag==='全部'?'active':null}`} htmlFor="categoryTag1" style={{cursor:'pointer'}} >{tag}</label>
                                        </span>
                                    )
                                }
                            </div>
                            <div className="my-4">
                                <span className="h5 mb-4">劇會費用</span>
                                <br />
                                {
                                    costTags.map((tag,index)=>
                                        <span className="my-1 mx-1" key={index}>
                                            <input type="radio" className="btn-check" name={tag} id="categoryTag1" autoComplete="off"/>
                                            <label className={`brandBtn-3 ${tag==='全部'?'active':null}`} htmlFor="categoryTag1" style={{cursor:'pointer'}} >{tag}</label>
                                        </span>
                                    )
                                }
                            </div>
                            <div className="my-4">
                                <span className="h5 mb-4">劇會條件</span>
                                <br />
                                <div className="my-3">
                                    <span className="mb-1 d-block">性別</span>
                                    {
                                        genderTags.map((tag,index)=>
                                            <span className="my-1 mx-1" key={index}>
                                                <input type="radio" className="btn-check" name={tag} id="categoryTag1" autoComplete="off"/>
                                                <label className={`brandBtn-3 ${tag==='不限男女'?'active':null}`} htmlFor="categoryTag1" style={{cursor:'pointer'}} >{tag}</label>
                                            </span>
                                        )
                                    }
                                </div>
                                <div className="my-3">
                                    <span className="mb-1 d-block">年齡</span>
                                    {
                                        ageTags.map((tag,index)=>
                                            <span className="my-1 mx-1" key={index}>
                                                <input type="radio" className="btn-check" name={tag} id="categoryTag1" autoComplete="off"/>
                                                <label className={`brandBtn-3 ${tag==='不限年齡'?'active':null}`} htmlFor="categoryTag1" style={{cursor:'pointer'}} >{tag}</label>
                                            </span>
                                        )
                                    }
                                </div>
                                <div className="my-3">
                                    <span className="mb-1 d-block">居住</span>
                                    {
                                        areaTags.map((tag,index)=>
                                            <span className="my-1 mx-1" key={index}>
                                                <input type="radio" className="btn-check" name={tag} id="categoryTag1" autoComplete="off"/>
                                                <label className={`brandBtn-3 ${tag==='不限居住地'?'active':null}`} htmlFor="categoryTag1" style={{cursor:'pointer'}} >{tag}</label>
                                            </span>
                                        )
                                    }
                                </div>
                            </div>
                            <div className="my-4">
                                <span className="h5 mb-4">劇會狀態</span>
                                <br />
                                {
                                    stateTags.map((tag,index)=>
                                        <span className="my-1 mx-1" key={index}>
                                            <input type="radio" className="btn-check" name={tag} id="categoryTag1" autoComplete="off"/>
                                            <label className={`brandBtn-3 ${tag==='全部'?'active':null}`} htmlFor="categoryTag1" style={{cursor:'pointer'}} >{tag}</label>
                                        </span>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                    <div className="col-9">
                        <div className="d-flex justify-content-between mb-5">
                            <ul className="nav nav-enable">
                                <li className="nav-item">
                                    <a className="nav-link active" href="#">熱門</a>
                                </li>
                                <li className="nav-item">
                                    <span className="nav-link disable">｜</span>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">歷史</a>
                                </li>
                            </ul>
                            <div className="d-flex">
                                <Dropdown/>
                                <Dropdown/>
                            </div>
                        </div>
                        <div className="row row-cols-2 gy-4">
                            <div className="col">
                                <div className="card border-0 rounded-3 shadow" >
                                    <div className="p-4 rounded-2">
                                        <div className="overflow-hidden cursor">
                                            <img src="https://images.unsplash.com/photo-1726661025473-d7fd07ebbab1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="object-fit rounded-2 img-scale " alt="主圖"/>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">機智醫生生活五位主角要開演唱會拉～一起聽</h5>
                                        <div className="my-4">
                                            {
                                                dramaTags.map(tag=>
                                                    <button type="button" className="brandBtn-3 mx-1" key={tag}>{tag}</button>
                                                )
                                            }  
                                        </div>
                                        <p className="card-text">
                                            <i className="bi bi-clock text-grey-300 me-4 mb-3"></i>
                                            <time dateTime="h6 2025/03/31  19:00" className="text-grey-700">2025/03/31  19:00</time>
                                        </p>
                                        <p className="card-text">
                                            <i className="bi bi-geo-alt text-grey-300 me-4 mb-3"></i>
                                            <span className="text-grey-700">大巨蛋</span>
                                        </p>
                                        <p className="card-text">
                                            <i className="bi bi-people text-grey-300 me-4 mb-3"></i>
                                            <span className="text-grey-700 me-4">欲揪人數｜<span>4</span></span>
                                            <span className="text-grey-700">已跟團者｜<span>2</span></span>
                                        </p>
                                        <hr />
                                        <div className="d-flex justify-content-between">
                                            <div className="d-flex align-items-center cursor">
                                                <div className="avatar me-2">
                                                    <img src="https://images.unsplash.com/photo-1520780662578-a2e93221bbd5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="頭像" className="object-fit rounded-circle" />
                                                </div>
                                                <div className="d-flex flex-column">
                                                    <span className="h6">樂樂</span>
                                                    <span className="text-grey-400 fs-c">揪團主</span>
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <span className="material-symbols-rounded text-brand-core fs-2 mx-1 cursor">bookmark</span>
                                                <span className="material-symbols-rounded text-brand-core fs-2 mx-1 cursor">share</span>
                                                <button type="button" className="brandBtn-1-lg">劇會內容</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card border-0 rounded-3 shadow" >
                                    <div className="p-4 rounded-2">
                                        <img src="https://images.unsplash.com/photo-1726661025473-d7fd07ebbab1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="object-fit rounded-2" alt="主圖"/>
                                    
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">機智醫生生活五位主角要開演唱會拉～一起聽</h5>
                                        <div className="my-4">
                                            {
                                                dramaTags.map(tag=>
                                                    <button type="button" className="brandBtn-3 mx-1" key={tag}>{tag}</button>
                                                )
                                            }  
                                        </div>
                                        <p className="card-text">
                                            <i className="bi bi-clock text-grey-300 me-4 mb-3"></i>
                                            <time dateTime="h6 2025/03/31  19:00" className="text-grey-700">2025/03/31  19:00</time>
                                        </p>
                                        <p className="card-text">
                                            <i className="bi bi-geo-alt text-grey-300 me-4 mb-3"></i>
                                            <span className="text-grey-700">大巨蛋</span>
                                        </p>
                                        <p className="card-text">
                                            <i className="bi bi-people text-grey-300 me-4 mb-3"></i>
                                            <span className="text-grey-700 me-4">欲揪人數｜<span>4</span></span>
                                            <span className="text-grey-700">已跟團者｜<span>2</span></span>
                                        </p>
                                        <hr />
                                        <div className="d-flex justify-content-between">
                                            <div className="d-flex align-items-center">
                                                <div className="avatar me-2">
                                                    <img src="https://images.unsplash.com/photo-1520780662578-a2e93221bbd5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="頭像" className="object-fit rounded-circle" />
                                                </div>
                                                <div className="d-flex flex-column">
                                                    <span className="h6">樂樂</span>
                                                    <span className="text-grey-400 fs-c">揪團主</span>
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <span className="material-symbols-rounded text-brand-core fs-2 mx-1">bookmark</span>
                                                <span className="material-symbols-rounded text-brand-core fs-2 mx-1">share</span>
                                                <button type="button" className="brandBtn-1-lg">劇會內容</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card border-0 rounded-3 shadow" >
                                    <div className="p-4 rounded-2">
                                        <img src="https://images.unsplash.com/photo-1726661025473-d7fd07ebbab1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="object-fit rounded-2" alt="主圖"/>
                                    
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">機智醫生生活五位主角要開演唱會拉～一起聽</h5>
                                        <div className="my-4">
                                            {
                                                dramaTags.map(tag=>
                                                    <button type="button" className="brandBtn-3 mx-1" key={tag}>{tag}</button>
                                                )
                                            }  
                                        </div>
                                        <p className="card-text">
                                            <i className="bi bi-clock text-grey-300 me-4 mb-3"></i>
                                            <time dateTime="h6 2025/03/31  19:00" className="text-grey-700">2025/03/31  19:00</time>
                                        </p>
                                        <p className="card-text">
                                            <i className="bi bi-geo-alt text-grey-300 me-4 mb-3"></i>
                                            <span className="text-grey-700">大巨蛋</span>
                                        </p>
                                        <p className="card-text">
                                            <i className="bi bi-people text-grey-300 me-4 mb-3"></i>
                                            <span className="text-grey-700 me-4">欲揪人數｜<span>4</span></span>
                                            <span className="text-grey-700">已跟團者｜<span>2</span></span>
                                        </p>
                                        <hr />
                                        <div className="d-flex justify-content-between">
                                            <div className="d-flex align-items-center">
                                                <div className="avatar me-2">
                                                    <img src="https://images.unsplash.com/photo-1520780662578-a2e93221bbd5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="頭像" className="object-fit rounded-circle" />
                                                </div>
                                                <div className="d-flex flex-column">
                                                    <span className="h6">樂樂</span>
                                                    <span className="text-grey-400 fs-c">揪團主</span>
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <span className="material-symbols-rounded text-brand-core fs-2 mx-1">bookmark</span>
                                                <span className="material-symbols-rounded text-brand-core fs-2 mx-1">share</span>
                                                <button type="button" className="brandBtn-1-lg">劇會內容</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </main>
        


    </>)
};

export default DramaList;
