import axios from "axios";
import { useState,useEffect, useRef } from "react";
import NoteTagsModal from "./NoteTagsModal";
import { Modal } from "bootstrap";


const baseUrl = import.meta.env.VITE_APP_BASE_URL;
const apiPath = import.meta.env.VITE_APP_API_PATH;


const DramaFormModal = ({dramaFormRef,closeDramaForm}) => {
    const noteModalRef = useRef(null);
    const noteModalInstance = useRef(null);
    const [isOpenNoteModal,setIsOpenNoteModal] = useState(false);
    // 系統預設標籤
    const categoryTags = ['看電影','看表演','逛劇展','買劇品','上劇課','劇本殺','接劇龍','聽劇透','遊劇旅','追影星'];
    const costTags = ['免費','AA制','團主請客','男生請客','女生請客'];
    const genderTags = ['不限男女','限男生','限女生'];
    const ageTags = ['不限年齡','限年齡'];
    const areaTags = ['不限居住地','限居住地'];
    const city = ['台北','台中','高雄'];

    // 用戶自輸入值
    const [imageUrl,setImageUrl] = useState('');
    const [selectedCategoryTag,setSelectedCategoryTag] = useState('');
    const [selectedCostTag,setSelectedCostTag] = useState('');
    const [selectedGenderTag,setSelectedGenderTag] = useState('不限男女');
    const [selectedAgeTag,setSelectedAgeTag] = useState('不限年齡');
    const [selectedAreaTag,setSelectedAreaTag] = useState('不限居住地');
    const [selectedNoteTag,setSelectedNoteTag] = useState([]);
    const [address,setAddress] = useState('');
    const [imgStorage,setImgStorage] = useState('');
    const [imagesUrl,setImagesUrl] = useState([]);

    // 功能：更多圖片
    const handleImgInput = async(e) => {
        const file = e.target.files[0]; 
        console.log(file);
        const formData = new FormData(); 
        formData.append('file-to-upload',file); 
        formData.forEach((value, key) => {
            console.log(`${key}:`, value);  
        });

        try {
            const res = await axios.post(`${baseUrl}/api/${apiPath}/admin/upload`,formData);
            console.log(res); 
        } catch (err) {
            console.log(err);
        }
    };
    const addImg = () => {
        const newImagesUrl = [...imagesUrl];
        newImagesUrl.push(imgStorage);
        setImagesUrl(newImagesUrl);
        setImgStorage('');
    };
    const deleteImg = (index) => {
        const newImagesUrl = [...imagesUrl];
        newImagesUrl.splice(index,1);
        setImagesUrl(newImagesUrl);
    };

    const openNoteModal = () => {
        setIsOpenNoteModal(true);
        noteModalInstance.current.show();
    };
    const closeNoteModal = () => {
        setIsOpenNoteModal(false);
        noteModalInstance.current.hide();
    };

    const deleteNoteTags = (index) => {
        setSelectedNoteTag(prev=>{
            const newNoteTags = [...prev];
            newNoteTags.splice(index,1);
            return newNoteTags;
        });
    };
    // useEffect
    useEffect(()=>{
        if (noteModalRef.current) {
            noteModalInstance.current = new Modal(noteModalRef.current);
        }
    },[]);

    // useEffect(()=>{
    //     console.log(imagesUrl);
    // },[imagesUrl]);

    return(<>
        <div className="modal"
        style={{...(isOpenNoteModal && {filter:" brightness(30%)"})}}
        tabIndex="-1" ref={dramaFormRef}>
            <div className="modal-dialog modal-md modal-fullscreen-md-down">
                <div className="modal-content">
                    <div className="modal-header bg-brand-600 text-white">
                        <h5 className="modal-title">發起劇會</h5>
                        <button
                        type="button" 
                        className="btn-close btn-close-white"  
                        aria-label="Close"
                        onClick={closeDramaForm}
                        ></button>
                    </div>
                    <div className="modal-body">

                        {/* 劇會主圖 */}
                        <div className="mb-10">
                            <span className="text-brand-400">* &nbsp;</span>
                            <span className="h5">劇會主圖</span>
                            <label htmlFor="fileInput" className="form-label">
                                <i className="bi bi-plus-circle-fill ms-2 text-brand-600 fs-4"
                                style={{cursor:'pointer'}}></i>
                            </label>
                            <input
                                type="file"
                                accept=".jpg,.jpeg,.png"
                                className="form-control"
                                id="fileInput"
                                style={{display:'none'}}
                                onChange={handleImgInput}
                            />
                            <br />
                            <img src="https://images.unsplash.com/photo-1739047855450-27615bc98bc5?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="劇會主圖" className="my-3 object-fit" style={{height:'250px'}}/>
                        </div>

                        {/* 劇會類型 */}
                        <div className="mb-10">
                            <span className="text-brand-400">* &nbsp;</span><span className="h5">劇會類型</span>
                            <br />
                            {
                                categoryTags.map((tag,index)=>
                                    <span className="my-1 mx-1" key={index}>
                                        <input 
                                        type="radio"
                                        name="category" 
                                        className="btn-check"
                                        id={`categoryTag-${tag}`}
                                        onChange={()=>setSelectedCategoryTag(tag)}
                                        checked={selectedCategoryTag===tag}
                                        />
                                        <label
                                        className={`brandBtn-2-sm ${selectedCategoryTag===tag&&'active'}`} 
                                        htmlFor={`categoryTag-${tag}`}
                                        style={{cursor:'pointer'}
                                        }>{tag}</label>
                                    </span>
                                )
                            }
                        </div>

                        {/* 劇會人數 */}
                        <div className="mb-10">
                            <span className="text-brand-400">* &nbsp;</span><span className="h5">劇會人數</span>
                            <br />
                            <select className="form-select mt-1" aria-label="Default select example" defaultValue=''>
                                <option value='' disabled>人數包含自己</option>
                                {
                                    Array.from({length:9}).map((option,index)=>
                                        <option value={index+2} key={index}>{index+2}人</option>
                                    )
                                }
                            </select>
                        </div>

                        {/* 劇會時間 */}
                        <div className="mb-10">
                            <span className="text-brand-400">* &nbsp;</span><span className="h5">劇會時間</span>
                            <br />
                            <div className="mt-1">
                                <div className="input-group mb-3">
                                    <input type="datetime-local" className="form-control" placeholder="開始時間"/>
                                    <span className="input-group-text">~</span>
                                    <input type="datetime-local" className="form-control" placeholder="結束時間"/>
                                </div>
                            </div>
                        </div>

                        {/* 劇會地點 */}
                        <div className="mb-10">
                            <span className="text-brand-400">* &nbsp;</span><span className="h5">劇會地點</span>
                            <br />
                            <div className="input-group mb-3 mt-1">
                                <input
                                type="text"
                                className="form-control"
                                placeholder="輸入地址"
                                onChange={e=>setAddress(e.target.value)}
                                value={address}
                                />
                                <span className="input-group-text bg-brand-600 text-white" id="basic-addon2" style={{cursor:'pointer'}}>搜地圖</span>
                            </div>
                            <img src="https://images.unsplash.com/photo-1586449480558-33ae22ffc60d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="地圖" className=" d-block object-fit" style={{height:'200px'}}/>
                            <div className="d-flex mt-3">
                                <i className="bi bi-geo-alt-fill text-brand-600 fs-4 me-1"></i>
                                <div>
                                    <p className="h6 text-brand-600">衛武營 國家藝術文化中心</p>
                                    <p className="text-grey-500">{address}</p>
                                </div>
                            </div>
                        </div>

                        {/* 劇會費用 */}
                        <div className="mb-10">
                            <span className="text-brand-400">* &nbsp;</span><span className="h5">劇會費用</span>
                            <br />
                            {
                                costTags.map((tag,index)=>
                                    <span className="my-1 mx-1" key={index}>
                                        <input
                                        type="radio"
                                        className="btn-check"
                                        name="cost"
                                        id={`costTag-${tag}`}
                                        onChange={()=>setSelectedCostTag(tag)}
                                        checked={selectedCostTag===tag}
                                        />
                                        <label
                                        className={`brandBtn-2-sm ${selectedCostTag===tag&&'active'}`}
                                        htmlFor={`costTag-${tag}`}
                                        style={{cursor:'pointer'}}
                                        >{tag}</label>
                                    </span>
                                )
                            }
                        </div>

                        {/* 劇會條件 */}
                        <div className="mb-10">
                            <span className="h5 mb-2">設定跟團條件</span>
                            <br />
                            <span className="h6 text-brand-600 me-3">性別</span>
                            {
                                genderTags.map((tag,index)=>
                                    <span className="my-1 mx-1" key={index}>
                                        <input 
                                        type="radio"
                                        className="btn-check"
                                        name="gender"
                                        id={`genderTag-${tag}`}
                                        onChange={()=>setSelectedGenderTag(tag)}
                                        checked={selectedGenderTag===tag}
                                        />
                                        <label
                                        className={`brandBtn-2-sm ${selectedGenderTag===tag&&'active'}`}
                                        htmlFor={`genderTag-${tag}`}
                                        style={{cursor:'pointer'}}
                                        >{tag}</label>
                                    </span>
                                )
                            }
                            <br />
                            <span className="h6 text-brand-600 me-3">年齡</span>
                            {
                                ageTags.map(tag=>
                                    <span className="my-1 mx-1" key={tag}>
                                        <input 
                                        type="radio"
                                        className="btn-check"
                                        name="age"
                                        id={`ageTag-${tag}`}
                                        onChange={()=>setSelectedAgeTag(tag)}
                                        checked={selectedAgeTag===tag}
                                        />
                                        <label
                                        className={`brandBtn-2-sm ${selectedAgeTag===tag&&'active'}`}
                                        htmlFor={`ageTag-${tag}`}
                                        style={{cursor:'pointer'}}
                                        >{tag}</label>
                                    </span>
                                )
                            }
                            {
                                selectedAgeTag==='限年齡'&&
                                <div className="input-group mt-2 w-75 mx-auto">
                                    <input type="text" className="form-control" placeholder="輸入年齡"/>
                                    <span className="input-group-text">~</span>
                                    <input type="text" className="form-control" placeholder="輸入年齡"/>
                                </div>
                            }
                            <br />
                            <span className="h6 text-brand-600 me-3">居住</span>
                            {
                                areaTags.map(tag=>
                                    <span className="my-1 mx-1" key={tag}>
                                        <input 
                                        type="radio"
                                        className="btn-check"
                                        name="area"
                                        id={`areaTag-${tag}`}
                                        onChange={()=>setSelectedAreaTag(tag)}
                                        checked={selectedAreaTag===tag}
                                        />
                                        <label
                                        className={`brandBtn-2-sm ${selectedAreaTag===tag&&'active'}`}
                                        htmlFor={`areaTag-${tag}`}
                                        style={{cursor:'pointer'}}
                                        >{tag}</label>
                                    </span>
                                )
                            }
                            {
                                selectedAreaTag==='限居住地'&&
                                <select className="form-select mt-2 w-75 mx-auto" defaultValue=''>
                                    <option value='' disabled>縣市地區</option>
                                    {
                                        city.map((tag,index)=>
                                            <option value={tag} key={index}>{tag}</option>
                                        )
                                    }
                                </select>
                            }
                        </div>

                        {/* 劇會詳情 */}
                        <div className="mb-10">
                            <div className="h5 mb-3">
                                <label htmlFor="detail" className="form-label">劇會詳情</label>
                                <textarea className="form-control" id="detail" rows="3"></textarea>
                            </div>
                        </div>

                        {/* 更多圖片 */}
                        <div className="mb-10">
                            <div className="h5 mb-3 w-100">
                                <label htmlFor="detail" className="form-label">劇會照片分享</label>
                                <div className="input-group mb-5">
                                    <input 
                                    type="text" 
                                    className="form-control"
                                    placeholder="貼入圖片網址" aria-label="Recipient's username" aria-describedby="basic-addon2"
                                    value={imgStorage||''}
                                    onChange={e=>setImgStorage(e.target.value)}
                                    />
                                    <span
                                    className="input-group-text bg-brand-600 text-white"
                                    id="addImg"
                                    style={{cursor:'pointer'}}
                                    onClick={addImg}
                                    >新增</span>
                                </div>
                                <div className="row row-cols-3 g-3">
                                    {
                                        imagesUrl.map((img,index)=>
                                            <div className="col" key={img}>
                                                <div className="position-relative w-100 mx-2" style={{height:'150px'}}>
                                                    <img src={img} alt={`附圖${index+1}`} 
                                                    className="object-fit"
                                                    />
                                                    <i className="fs-4 bi bi-x-square-fill text-brand-600 position-absolute top-0 end-0" 
                                                    style={{cursor:'pointer'}}
                                                    onClick={()=>deleteImg(index)}
                                                    ></i>
                                                </div>
                                            </div>
                                        )
                                    }

                                </div>
                                
                            </div>
                        </div>

                        {/* 劇會標籤 */}
                        <div className="mb-10">
                            <div className="mb-2">
                                <span className="h5">劇會標籤</span>
                                <i 
                                className="bi bi-plus-circle-fill ms-2 text-brand-600 fs-4"
                                style={{cursor:'pointer'}}
                                onClick={openNoteModal}
                                ></i>
                            </div>
                            {
                                selectedNoteTag.map((tag,index)=>
                                    <span className="my-1 mx-1 brandBtn-2-sm" key={tag}>
                                    {tag}
                                    <i
                                    className="bi bi-x-circle-fill ms-2"
                                    onClick={()=>deleteNoteTags(index)}
                                    style={{cursor:'pointer'}}
                                    ></i>
                                    </span>
                                )
                            }
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button 
                        type="button" 
                        className="brandBtn-1 w-100"
                        >發佈</button>
                    </div>
                </div>
            </div>
        </div>

        <NoteTagsModal
        noteModalRef={noteModalRef}
        closeNoteModal={closeNoteModal}
        setIsOpenNoteModal={setIsOpenNoteModal}
        selectedNoteTag={selectedNoteTag}
        setSelectedNoteTag={setSelectedNoteTag}
        />
    </>)

};

export default DramaFormModal;