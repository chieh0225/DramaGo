import { useEffect, useRef, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { Modal, Offcanvas } from "bootstrap";
import { useDispatch } from "react-redux";
import { changeLoadingState } from "../../redux/slice/loadingSlice";
import { pushMsg } from "../../redux/slice/toastSlice";

import Breadcrumb from "../../components/Breadcrumb";
import SearchBar from "../../components/SearchBar";
import Dropdown from "../../components/Dropdown";
import DramaFormModal from "../../components/modal/DramaFormModal";
import axios from "axios";
import { useOutletContext } from "react-router-dom";
import TagsFilter from "../../components/TagsFilter";
import DramaListCard from "../../components/card/dramaListCard";
import DramaListTab from "../../components/tab/DramaListTab";


const baseUrl = import.meta.env.VITE_APP_BASE_URL;
const apiPath = import.meta.env.VITE_APP_API_PATH;
const pageLink = [
    {
        name: `首頁`,
        link: `/`
    },
    {
        name: `劇會總覽`,
        link: `/dramaList`
    }
]

const DramaList = () => {
    //功能：表單
    const {
        register,
        watch,
        control,
    } = useForm({
        defaultValues: {
            category: '全部',
            day: '全部',
            cost: '全部',
            genderTerm: '全部',
            ageTerm: '全部',
            areaTerm: '全部',
            state: '全部',
        },
    });

    const watchForm = useWatch({
        control,
    });


    // 用戶輸入值
    const categoryTag = watch('category');
    const dayTag = watch('day');
    const costTag = watch('cost');
    const genderTag = watch('genderTerm');
    const ageTag = watch('ageTerm');
    const areaTag = watch('areaTerm');
    const stateTag = watch('state');

    // 系統標籤
    const categoryTags = ['全部', '看電影', '看表演', '逛劇展', '買劇品', '上劇課', '劇本殺', '接劇龍', '聽劇透', '遊劇旅', '追影星'];
    const dayTags = ['全部', '1天內', '2天以上'];
    const costTags = ['全部', '免費', 'AA制', '團主請客', '男生請客', '女生請客'];
    const genderTags = ['全部', '不限男女', '限男生', '限女生'];
    const ageTags = ['全部', '不限年齡', '限年齡'];
    const areaTags = ['全部', '不限居住地', '限居住地'];
    const stateTags = ['全部', '差一人出團', '三天內到期'];

    // 變數宣告
    const dramaFormRef = useRef(null);
    const dramaFormInstance = useRef(null);
    const searchOffcanvasRef = useRef(null);
    const searchOffcanvasInstance = useRef(null);
    const [modalMode, setModalMode] = useState('');
    const openButtonRef = useRef(null);
    const { dramas, setDramas } = useOutletContext()
    //(有修改) const [dramas,setDramas] = useState([]);
    const [loveDramas, setLoveDramas] = useState([]);
    const [filterDramas, setFilterDramas] = useState([]);
    const [tagFilter, setTagFilter] = useState([]);
    const [unitShareDrama, setUnitShareDrama] = useState({});
    const [dramaState, setDramaState] = useState('onGoing');
    const dispatch = useDispatch();
    const [phoneSearchState, setPhoneSearchState] = useState(false)
    // 開關劇會modal
    const openDramaForm = () => {
        dramaFormInstance.current.show();
    };
    const closeDramaForm = () => {
        setModalMode('');
        dramaFormInstance.current.hide();
    };
    // 開關offcanvas
    const closeSearchOffcanvas = () => {
        searchOffcanvasInstance.current.hide();
    };

    // 渲染劇會列表
    const getDramas = async () => {
        dispatch(changeLoadingState(true));
        try {
            const res = await axios.get(`${baseUrl}/api/${apiPath}/products`);
            setDramas(res.data.products);
            setFilterDramas(res.data.products);
        } catch (err) {
            const message = err.response.data;
            dispatch(pushMsg({
                text: message.join('、'),
                status: 'failed',
            }));
        } finally {
            dispatch(changeLoadingState(false));
        }
    };

    // 加入最愛蒐藏
    const postLoveDrama = async (product_id) => {
        const updateData = {
            data: {
                product_id,
                qty: 1,
            }
        };
        dispatch(changeLoadingState(true));
        try {
            await axios.post(`${baseUrl}/api/${apiPath}/cart`, updateData);
            dispatch(pushMsg({
                text: '已加入蒐藏',
                status: 'success',
            }));
            getLoveDramas();

        } catch (err) {
            const message = err.response.data;
            dispatch(pushMsg({
                text: message.join('、'),
                status: 'failed',
            }));
        } finally {
            dispatch(changeLoadingState(false));
            getLoveDramas();
        }
    };
    const getLoveDramas = async () => {
        dispatch(changeLoadingState(true));
        try {
            const res = await axios.get(`${baseUrl}/api/${apiPath}/cart`);
            setLoveDramas(res.data.data.carts);
        } catch (err) {
            console.log(err.response?.data?.message);
        } finally {
            dispatch(changeLoadingState(false));
        }
    };
    const deleteLoveDrama = async (cart_id) => {
        dispatch(changeLoadingState(true));
        try {
            await axios.delete(`${baseUrl}/api/${apiPath}/cart/${cart_id}`);
            dispatch(pushMsg({
                text: '已取消蒐藏',
                status: 'success',
            }));
            getLoveDramas();
        } catch (err) {
            const message = err.response.data;
            dispatch(pushMsg({
                text: message.join('、'),
                status: 'failed',
            }));
        } finally {
            dispatch(changeLoadingState(false));
        }
    };
    const handleLoveClick = (drama_id) => {
        if (loveDramas.some(item => item.product.id === drama_id)) {
            const cart_id = loveDramas.filter(loveDrama => loveDrama.product.id === drama_id)[0].id;
            deleteLoveDrama(cart_id);
        } else {
            postLoveDrama(drama_id);
        };
    };

    // 複選標籤劇會篩選
    const dramaFilter = () => {
        const newData = filterDramas.filter(drama => {
            const { category, cost } = drama;
            const { gender, age: { condition: ageCondition }, area: { condition: areaCondition } } = drama.term;
            const dramaTagsArr = [category, cost, gender, ageCondition, areaCondition];
            return tagFilter.every(item => dramaTagsArr.includes(item))

        })
        setDramas(newData);
    };


    // 初始化
    useEffect(() => {
        if (dramaFormRef.current) {
            dramaFormInstance.current = new Modal(dramaFormRef.current);
        };
        dramaFormRef.current.addEventListener("hidden.bs.modal", () => {
            if (openButtonRef.current) {
                openButtonRef.current.focus();
            }
        });
        if (searchOffcanvasRef.current) {
            searchOffcanvasInstance.current = new Offcanvas(searchOffcanvasRef.current);
        };

        getDramas();
        getLoveDramas();
    },[]);

    useEffect(() => {
        const arr = Object.values(watchForm).filter(item => item !== '全部');
        setTagFilter(arr);
        console.log(arr);
    }, [watchForm]);

    useEffect(() => {
        dramaFilter();
    }, [tagFilter]);

    useEffect(() => {
        getDramas();
    }, [modalMode]);

    const phoneSearch = () => {
        setPhoneSearchState(true)
    }

    return (<>
        <main className="dramaList bg-brand-50 pt-lg-13 pt-6 pb-15">
            <div className="container">

                {/* 電腦版 */}
                <Breadcrumb pageLink={pageLink} className='breadcrumb' />
                <div className="row d-none d-lg-flex">
                    <div className="filterBoard col-3">
                        {/* 建立劇會 */}
                        <div className="addDrama-bg rounded-5 rounded-bottom-0 d-flex align-items-center">
                            <button
                                type="button"
                                className="btn fs-5 text-white ms-9"
                                style={{ "--bs-btn-border-color": "none" }}
                                onClick={() => {
                                    setModalMode('add');
                                    openDramaForm();
                                }}
                            >
                                <i className="bi bi-plus-circle-fill"></i>
                                <span className="ms-1">我要發起劇會</span>
                            </button>
                        </div>
                        {/* 篩選區 */}
                        <div className="d-flex flex-column align-items-start bg-white p-5">
                            {/* 搜尋bar */}
                            <SearchBar
                                bar={false}
                                filterDramas={filterDramas}
                                setDramas={setDramas}
                            />
                            {/* 標籤區 */}

                            <TagsFilter 
                            filterDramas={filterDramas}
                            setDramas={setDramas}
                            dramaState={dramaState}
                            />

                           
                        </div>
                    </div>
                    <div className="col-9">
                        {/* 下拉選單 */}
                        <div className="d-flex justify-content-between mb-5 sortBoard">
                            <DramaListTab tabName={[{name:'熱門',state:'onGoing'},{name:'歷史',state:'history'}]} setDramaState={setDramaState}/>
                            <div className="d-flex">

                                <Dropdown 
                                options={['最新>最舊','最舊>最新']} 
                                type='time'
                                filterDramas={filterDramas}
                                setDramas={setDramas}
                                getDramas={getDramas}
                                />
                                <Dropdown options={['全部','我發起的','我跟團的']} type={'personal'}/>

                            </div>
                        </div>
                        {/* 卡片區 */}
                        <div className="row row-cols-md-2 gy-4">
                            {
                                
                                dramas.filter(drama=>dramaState==='onGoing'?(drama.isFinish===0):(drama.isFinish===1)).map(drama=>
                                    <DramaListCard 
                                    key={drama.id} 
                                    drama={drama}
                                    loveDramas={loveDramas}
                                    handleLoveClick={handleLoveClick}
                                    openDramaForm={openDramaForm}
                                    setModalMode={setModalMode}
                                    setUnitShareDrama={setUnitShareDrama}
                                    />
                                )
                            }
                            
                              
                        </div>
                    </div>
                </div>

                {/* 平板/手機版 */}

                <div className="d-flex d-lg-none align-items-center justify-content-between mb-4">
                    <button type="button" className="btn btn-brand-400 rounded-pill fs-5 text-white"
                        onClick={() => {
                            setModalMode('add');
                            openDramaForm();
                        }}
                    >
                        <i className="bi bi-plus-circle-fill"></i>
                        <span className="ms-1 fs-6">我要發起劇會</span>
                    </button>
                    <div className="h4" >
                        <span type="button" onClick={phoneSearch} data-bs-toggle="offcanvas" data-bs-target="#filterOffcanvas" aria-controls="filterOffcanvas"><i className="bi bi-funnel"></i></span>
                        <span type="button" data-bs-toggle="offcanvas" data-bs-target="#sortOffcanvas" aria-controls="sortOffcanvas"><i className="bi bi-sort-down ms-4"></i></span>

                    </div>
                </div>
                <div className="row row-cols-md-2 d-lg-none gy-4">
                    {
                        dramas.map(drama =>
                            <div className="col" key={drama.id}>
                                <div className="card border-0 rounded-3 shadow position-relative" >
                                    <div className="p-4 rounded-2">
                                        <div className="overflow-hidden cursor">
                                            <img src={drama.imageUrl} className="object-fit rounded-2 img-scale " alt={drama.title} />
                                        </div>
                                    </div>
                                    <div className="badge-group position-absolute d-flex flex-column">
                                        <span className="fs-6 badge bg-brand-700 py-2 px-5 rounded-pill rounded-start my-1">差一人出團</span>
                                        <span className="fs-6 badge bg-brand-700 py-2 px-5 rounded-pill rounded-start my-1">三天內到期</span>
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">{drama.title}</h5>
                                        <div className="my-4">
                                            <button type="button" className="brandBtn-4 mx-1 my-2" >{drama.category}</button>
                                            <button type="button" className="brandBtn-4 mx-1 my-2" >{drama.cost}</button>
                                            <button type="button" className="brandBtn-4 mx-1 my-2" >{drama.term.gender}</button>
                                            <button type="button" className="brandBtn-4 mx-1 my-2" >{drama.term.age.condition}</button>
                                            <button type="button" className="brandBtn-4 mx-1 my-2" >{drama.term.area.condition}</button>
                                        </div>
                                        <p className="card-text">
                                            <i className="bi bi-clock text-grey-300 me-4 mb-3"></i>
                                            <time dateTime={drama.date.start} className="fs-b3 text-grey-700">{drama.date.start}~{drama.date.end}</time>
                                        </p>
                                        <p className="card-text">
                                            <i className="bi bi-geo-alt text-grey-300 me-4 mb-3"></i>
                                            <span className="text-grey-700">{drama.location}</span>
                                        </p>
                                        <p className="card-text">
                                            <i className="bi bi-people text-grey-300 me-4 mb-3"></i>
                                            <span className="text-grey-700 me-4">欲揪人數｜<span>{drama.people}</span></span>
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
                                                <button
                                                    type="button"
                                                    className="btn p-0"
                                                    style={{ "--bs-btn-border-color": "none" }}
                                                    onClick={() => handleLoveClick(drama.id)}
                                                >
                                                    <i className={`bi text-brand-core fs-2 mx-1 ${loveDramas.some(item => item.product.id === drama.id) ? 'bi-bookmark-heart-fill' : 'bi-bookmark-heart'}`}></i>
                                                </button>
                                                <span className="material-symbols-rounded text-brand-core fs-2 mx-1 cursor">share</span>
                                                <button type="button" className="brandBtn-1-lg">劇會內容</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }

                </div>
            </div>


            {/* Modal */}
            <DramaFormModal
                dramaFormRef={dramaFormRef}
                closeDramaForm={closeDramaForm}
                modalMode={modalMode}
                unitShareDrama={unitShareDrama}
            />


            {/* Offcanvas */}
            {/* 篩選 */}
            <div className="offcanvas offcanvas-bottom offcanvas-filter rounded-6 rounded-bottom" tabIndex="-1" id="filterOffcanvas" aria-labelledby="filterOffcanvasLabel" ref={searchOffcanvasRef}>
                <div className="offcanvas-body">
                    <div className="d-flex flex-column align-items-start bg-white p-5">
                        <SearchBar
                            bar={false}
                            filterDramas={filterDramas}
                            setDramas={setDramas}
                            phoneSearchState={phoneSearchState}
                            closeSearchOffcanvas={closeSearchOffcanvas}
                        />

                        {/* 標籤區 */}
                        <TagsFilter 
                        filterDramas={filterDramas}
                        setDramas={setDramas}
                        />
                       
                    </div>
                </div>
                <button className="btn btn-brand-core w-100 text-white rounded-0" data-bs-toggle="offcanvas" data-bs-target="#filterOffcanvas">
                    套用
                </button>
            </div>
            {/* 排序 */}
            <div className="offcanvas offcanvas-bottom offcanvas-sort rounded-6 rounded-bottom" tabIndex="-1" id="sortOffcanvas" aria-labelledby="sortOffcanvasLabel">
                <div className="offcanvas-body">
                    <span className="h6 d-block my-3">發起時間</span>
                    <Dropdown />
                    <br />
                    <span className="h6 d-block my-3">出團情況</span>
                    <Dropdown />
                </div>
                <button className="btn btn-brand-core w-100 text-white rounded-0" data-bs-toggle="offcanvas" data-bs-target="#sortOffcanvas">
                    套用
                </button>
            </div>
        </main>
    </>)
};

export default DramaList;
