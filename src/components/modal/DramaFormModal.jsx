import axios from "axios";


console.clear();

const baseUrl = import.meta.env.VITE_APP_BASE_URL;
const apiPath = import.meta.env.VITE_APP_API_PATH;


const DramaFormModal = ({dramaFormRef,closeDramaForm}) => {

    const categoryTags = ['看電影','看表演','逛劇展','買劇品','上劇課','劇本殺','接劇龍','聽劇透','遊劇旅','追影星'];
    const costTags = ['免費','AA制','團主請客','男生請客','女生請客'];
    const genderTags = ['不限男女','限男生','限女生'];
    const areaTags = ['台北','台中','高雄'];
    const noteTags = ['我不遲到','友善攜寵','I人話少'];

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
            console.log(res);  //API回拋 imageUrl
        } catch (err) {
            console.log(err);
        }
    };

    return(<>
        <div className="modal" tabIndex="-1" ref={dramaFormRef}>
            <div className="modal-dialog modal-lg modal-fullscreen-md-down">
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
                        <img src="https://images.unsplash.com/photo-1739047855450-27615bc98bc5?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="劇會主圖" className="w-50 my-3"/>
                    </div>
                    <div className="mb-10">
                        <span className="text-brand-400">* &nbsp;</span><span className="h5">劇會類型</span>
                        <br />
                        {
                            categoryTags.map((tag,index)=>
                                <span className="my-1 mx-1" key={index}>
                                    <input type="radio" className="btn-check" name="category" id="categoryTag1" autoComplete="off"/>
                                    <label className="brandBtn-2-sm" htmlFor="categoryTag1" style={{cursor:'pointer'}}>{tag}</label>
                                </span>
                            )
                        }
                    </div>
                    <div className="mb-10">
                        <span className="text-brand-400">* &nbsp;</span><span className="h5">劇會人數</span>
                        <br />
                        <select className="form-select w-50 mt-1" aria-label="Default select example">
                            <option defaultValue disabled>人數包含自己</option>
                            {
                                Array.from({length:9}).map((option,index)=>
                                    <option value={index+2} key={index}>{index+2}人</option>
                                )
                            }
                        </select>
                    </div>
                    <div className="mb-10">
                        <span className="text-brand-400">* &nbsp;</span><span className="h5">劇會時間</span>
                        <br />
                        <div className="mt-1">
                            <div className="form-check mb-3">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                    一天以內
                                </label>
                                <div className="input-group mb-3 w-50">
                                    <input type="text" className="form-control" placeholder="開始時間" aria-label="Username"/>
                                    <span className="input-group-text">~</span>
                                    <input type="text" className="form-control" placeholder="結束時間" aria-label="Server"/>
                                </div>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
                                <label className="form-check-label" htmlFor="flexRadioDefault2">
                                    兩天以上
                                </label>
                                <div className="input-group mb-3 w-50">
                                    <input type="text" className="form-control" placeholder="開始日期" aria-label="Username"/>
                                    <span className="input-group-text">~</span>
                                    <input type="text" className="form-control" placeholder="結束日期" aria-label="Server"/>
                                </div>
                            </div>  
                        </div>
                    </div>
                    <div className="mb-10">
                        <span className="text-brand-400">* &nbsp;</span><span className="h5">劇會地點</span>
                        <br />
                        <div className="input-group mb-3 w-50 mt-1">
                            <input type="text" className="form-control" placeholder="輸入地址" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                            <span className="input-group-text bg-brand-600 text-white" id="basic-addon2" style={{cursor:'pointer'}}>搜地圖</span>
                        </div>
                        <img src="https://images.unsplash.com/photo-1586449480558-33ae22ffc60d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="地圖" className="w-50 d-block"/>
                        <div className="d-flex mt-3">
                            <i className="bi bi-geo-alt-fill text-brand-600 fs-4 me-1"></i>
                            <div>
                                <p className="h6 text-brand-600">衛武營 國家藝術文化中心</p>
                                <p className="text-grey-500">高雄市鳳山區三多一路1號</p>
                            </div>
                        </div>
                    </div>
                    <div className="mb-10">
                        <span className="text-brand-400">* &nbsp;</span><span className="h5">劇會費用註記</span>
                        <br />
                        {
                            costTags.map((tag,index)=>
                                <span className="my-1 mx-1" key={index}>
                                    <input type="radio" className="btn-check" name="category" id="categoryTag1" autoComplete="off"/>
                                    <label className="brandBtn-2-sm" htmlFor="categoryTag1" style={{cursor:'pointer'}}>{tag}</label>
                                </span>
                            )
                        }
                    </div>
                    <div className="mb-10">
                        <span className="h5">設定跟團條件</span>
                        <br />
                        <span className="h6 text-brand-600 me-3">性別</span>
                        {
                            genderTags.map((tag,index)=>
                                <span className="my-1 mx-1" key={index}>
                                    <input type="radio" className="btn-check" name="category" id="categoryTag1" autoComplete="off"/>
                                    <label className="brandBtn-2-sm" htmlFor="categoryTag1" style={{cursor:'pointer'}}>{tag}</label>
                                </span>
                            )
                        }
                        <br />
                        <span className="h6 text-brand-600 me-3">年齡</span>
                        <div className="mt-1 ms-11">
                            <div className="form-check mb-3">
                                <input className="form-check-input" type="radio" name="age" id="ageNoNeed"/>
                                <label className="form-check-label" htmlFor="ageNoNeed">
                                    不限年齡
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="age" id="ageNeed"/>
                                <label className="form-check-label mb-1" htmlFor="ageNeed">
                                    限年齡
                                </label>
                                <div className="input-group mb-3 w-50">
                                    <input type="text" className="form-control" placeholder="輸入年齡" aria-label="Username"/>
                                    <span className="input-group-text">~</span>
                                    <input type="text" className="form-control" placeholder="輸入年齡" aria-label="Server"/>
                                </div>
                            </div>  
                        </div>
                        <br />
                        <span className="h6 text-brand-600 me-3">居住</span>
                        <div className="mt-1 ms-11">
                            <div className="form-check mb-3">
                                <input className="form-check-input" type="radio" name="area" id="areaNoNeed"/>
                                <label className="form-check-label" htmlFor="areaNoNeed">
                                    不限居住地
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="area" id="areaNeed"/>
                                <label className="form-check-label mb-1" htmlFor="areaNeed">
                                    限居住地
                                </label>
                                <select className="form-select w-50 mt-1" aria-label="Default select example">
                                    <option defaultValue disabled>縣市地區</option>
                                    {
                                        areaTags.map((tag,index)=>
                                            <option value={tag} key={index}>{tag}</option>
                                        )
                                    }
                                </select>
                            </div>  
                        </div>
                    </div>
                    <div className="mb-10">
                        <div className="h5 mb-3">
                            <label htmlFor="detail" className="form-label">劇會詳情</label>
                            <textarea className="form-control" id="detail" rows="3"></textarea>
                        </div>
                    </div>
                    <div className="mb-10">
                        <div className="h5 mb-3 w-100">
                            <label htmlFor="detail" className="form-label">劇會照片分享</label>
                            <div className="input-group mb-5">
                                <input type="text" className="form-control" placeholder="貼入圖片網址" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                                <span className="input-group-text bg-brand-600 text-white" id="basic-addon2" style={{cursor:'pointer'}}>新增</span>
                            </div>
                            <div className="d-flex">
                                <div className="position-relative w-100 mx-2">
                                    <img src="https://images.unsplash.com/photo-1740130768424-10c4fb1daaac?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="附圖1" />
                                    <i className="fs-4 bi bi-x-square-fill text-brand-600 position-absolute top-0 end-0" style={{cursor:'pointer'}}></i>
                                </div>
                                <div className="position-relative w-100 mx-2">
                                    <img src="https://images.unsplash.com/photo-1733506903133-9d65b66d299a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="附圖1" />
                                    <i className="fs-4 bi bi-x-square-fill text-brand-600 position-absolute top-0 end-0" style={{cursor:'pointer'}}></i>
                                </div>
                                <div className="position-relative w-100 mx-2">
                                    <img src="https://images.unsplash.com/photo-1740121565887-efe5b47fe9fb?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="附圖1" />
                                    <i className="fs-4 bi bi-x-square-fill text-brand-600 position-absolute top-0 end-0" style={{cursor:'pointer'}}></i>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div className="mb-10">
                        <div className="mb-2">
                            <span className="h5">劇會標籤</span>
                            <i className="bi bi-plus-circle-fill ms-2 text-brand-600 fs-4" style={{cursor:'pointer'}}></i>
                        </div>
                        {
                            noteTags.map((tag,index)=>
                                <span className="my-1 mx-1" key={index}>
                                    <input type="radio" className="btn-check" name="category" id="categoryTag1" autoComplete="off"/>
                                    <label className="brandBtn-2-sm" htmlFor="categoryTag1" style={{cursor:'pointer'}}>{tag}<i className="bi bi-x-circle-fill ms-2"></i></label>
                                </span>
                            )
                        }
                    </div>
                </div>
                <div className="modal-footer">
                    <button 
                    type="button" 
                    className="brandBtn-1"
                    >發佈</button>
                </div>
                </div>
            </div>
        </div>

    </>)

};

export default DramaFormModal;