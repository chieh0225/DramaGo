import axios from "axios";
import { useState,useEffect } from "react";
import { useDispatch } from "react-redux";
import { changeLoadingState } from "../../redux/slice/loadingSlice";
import { pushMsg } from "../../redux/slice/toastSlice";


const baseUrl = import.meta.env.VITE_APP_BASE_URL;
const apiPath = import.meta.env.VITE_APP_API_PATH;

const TagManage = () => {

    const [noteTags,setNoteTags] = useState([]);
    const [tagInput,setTagInput] = useState('');
    const dispatch = useDispatch();


    const addTag = async(e) => {
        e.preventDefault();
        const updateData = {
            data: {
                title: tagInput,
                is_enabled: 1,
                percent: 0,
                due_date: 0,
                code: tagInput,
            }
        };
        dispatch(changeLoadingState(true));
        try {
            await axios.post(`${baseUrl}/api/${apiPath}/admin/coupon`,updateData);
            getTags();
            setTagInput('');
            dispatch(pushMsg({
                text:'已新增標籤',
                status:'success',
            }));
        } catch (err) {
            const message = err.response.data;
            dispatch(pushMsg({
                text:message.join('、'),
                status:'failed',
            }));
        } finally{
            dispatch(changeLoadingState(false));
        };
    };
    const getTags = async() => {
        dispatch(changeLoadingState(true));
        try {
            const res = await axios.get(`${baseUrl}/api/${apiPath}/admin/coupons`);
            setNoteTags(res.data.coupons);
        } catch (err) {
            const message = err.response.data;
            dispatch(pushMsg({
                text:message.join('、'),
                status:'failed',
            }));
        } finally{
            dispatch(changeLoadingState(false));
        };
    };
    const deleteTags = async(id) => {
        dispatch(changeLoadingState(true));
        try {
            await axios.delete(`${baseUrl}/api/${apiPath}/admin/coupon/${id}`);
            getTags();
            dispatch(pushMsg({
                text:'已刪除標籤',
                status:'success',
            }));
        } catch (err) {
            const message = err.response.data;
            dispatch(pushMsg({
                text:message.join('、'),
                status:'failed',
            }));
        } finally{
            dispatch(changeLoadingState(false));
        };
    };

    useEffect(()=>{
        const getToken = document.cookie.replace(/(?:(?:^|.*;\s*)myToken\s*\=\s*([^;]*).*$)|^.*$/,"$1",);
        axios.defaults.headers.common['Authorization'] = getToken;
    },[]);
    useEffect(()=>{
        getTags();
    },[]);

    return(<>
        <div className="container w-50 py-10">
            <h1 className="h4 my-4">劇會標籤庫</h1>
            <form onSubmit={addTag}>
                <div className="input-group mb-6">
                    <div className="form-floating">
                        <input 
                        type="text" 
                        className="form-control" 
                        id="tagAdd" 
                        placeholder="標籤名稱"
                        onChange={e=>setTagInput(e.target.value)}
                        value={tagInput}
                        />
                        <label htmlFor="tagAdd" className="text-grey-400">輸入標籤名稱</label>
                    </div>
                    <button 
                    className="btn btn-brand-core text-white" 
                    onClick={addTag}
                    >新增</button>
                </div>
            </form>
            <div className="mb-10">
                {
                    noteTags?.map((tag)=>
                        <a 
                        role="button" 
                        className="my-1 mx-1 brandBtn-2-lg" 
                        key={tag.id}
                        onClick={()=>deleteTags(tag.id)}
                        >
                        {tag.title}
                        <i
                        className="bi bi-x-circle-fill ms-2"
                        style={{cursor:'pointer'}}
                        ></i>
                        </a>
                    )
                }
            </div>
        </div>
    </>)
};

export default TagManage;