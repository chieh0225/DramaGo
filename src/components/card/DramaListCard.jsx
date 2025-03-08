
import dayjs from "dayjs";

const DramaListCard = ({drama,loveDramas,handleLoveClick,openDramaForm,setModalMode,setUnitShareDrama}) => {

    return(<>
    <div className="col">
        <div className="card border-0 rounded-3 shadow position-relative h-100" >
            <div className="p-4 rounded-2">
                <div className="overflow-hidden cursor w-100" style={{height:'300px'}}>
                    <img src={drama.imageUrl} className="object-fit rounded-2 img-scale " alt={drama.title}/>
                </div>
            </div>
            <div className="badge-group position-absolute d-flex flex-column">
                <span className="fs-6 badge bg-brand-700 py-2 px-5 rounded-pill rounded-start my-1">差一人出團</span>
                <span className="fs-6 badge bg-brand-700 py-2 px-5 rounded-pill rounded-start my-1">三天內到期</span>
            </div>
            <div className="card-body d-flex flex-column">
                <h5 className="card-title">{drama.title}</h5>
                <div className="my-4">
                    <button type="button" className="brandBtn-4 mx-1 mb-2" >{drama.category}</button>
                    <button type="button" className="brandBtn-4 mx-1 mb-2" >{drama.cost}</button>
                    <button type="button" className="brandBtn-4 mx-1 mb-2" >{drama.term.gender}</button>
                    <button type="button" className="brandBtn-4 mx-1 mb-2" >{drama.term.age.condition}</button>
                    <button type="button" className="brandBtn-4 mx-1 mb-2" >{drama.term.area.condition}</button>
                </div>
                <p className="card-text">
                    <i className="bi bi-clock text-grey-300 me-4 mb-3"></i>
                    <time dateTime={drama.date.start} className="fs-b2 text-grey-700">{dayjs(drama.date.start).format('YYYY/MM/DD hh:mm A')}~{dayjs(drama.date.end).format('YYYY/MM/DD hh:mm A')}</time>
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
                <div className="mt-auto">
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
                            {/* 最愛按鈕 */}
                            <button 
                            type="button" 
                            className="btn p-0" 
                            style={{ "--bs-btn-border-color": "none" }}
                            onClick = {()=>handleLoveClick(drama.id)}
                            >
                                <i className={`bi text-brand-core fs-2 mx-1 ${loveDramas.some(item=>item.product.id===drama.id)?'bi-bookmark-heart-fill':'bi-bookmark-heart'}`}></i>
                            </button>

                            {/* 分享按鈕 */}
                            <button 
                            type="button"
                            className="btn"
                            style={{ "--bs-btn-border-color": "none" }}
                            onClick={()=>{
                                setUnitShareDrama(drama);
                                setModalMode('share');
                                openDramaForm();
                            }}
                            >
                                <span className="material-symbols-rounded text-brand-core fs-2 mx-1 cursor">share</span>
                            </button>

                            {/* 查看按鈕 */}
                            <button type="button" className="brandBtn-1-lg">劇會內容</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>)
};


export default DramaListCard;