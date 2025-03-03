import axios from "axios";
import { useEffect, useState,useRef } from "react";
import { Modal } from "bootstrap";
import DramaFormModal from "../../components/modal/DramaFormModal";

const baseUrl = import.meta.env.VITE_APP_BASE_URL;
const apiPath = import.meta.env.VITE_APP_API_PATH;


const DramaManage = () => {

    const [dramas,setDramas] = useState([]);
    const dramaFormRef = useRef(null);
    const dramaFormInstance = useRef(null);
    const openButtonRef = useRef(null);
    const [modalMode,setModalMode] = useState('');
    const [unitDrama,setUnitDrama] = useState({});
    
    const openDramaForm = ()=>{
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

    const getDramas = async() => {
        try {
            const res = await axios.get(`${baseUrl}/api/${apiPath}/admin/products`);    
            setDramas(res.data.products);
        } catch (err) {
            console.log(err.response?.data?.message);
        }
    };
    const editDrama = async(data,e) => {
        const {value} = e.target
        const updateData = {
            data:{
                ...data,
                is_enabled:Number(value),
                isHot:Number(value),
                isFinish:Number(value),
            }
        }
        
        try {
            await axios.put(`${baseUrl}/api/${apiPath}/admin/product/${data.id}`,updateData);
            alert('修改成功');    
            getDramas();
            closeDramaForm();
        } catch (err) {
            console.log(err.response?.data?.message);
        }
    };
    const deleteDrama = async(id) => {
        try {
            const res = await axios.delete(`${baseUrl}/api/${apiPath}/admin/product/${id}`);    
            console.log(res);
            alert('刪除成功');
            getDramas();
            closeDramaForm();
        } catch (err) {
            console.log(err.response?.data?.message);
        }
    };

    useEffect(()=>{
        const getToken = document.cookie.replace(/(?:(?:^|.*;\s*)myToken\s*\=\s*([^;]*).*$)|^.*$/,"$1",);
        axios.defaults.headers.common['Authorization'] = getToken;
        getDramas();
    },[]);

    return(<>
    <div className="container">
        <h1 className="h4 my-4">劇會管理</h1>
        <table className="table table-hover table-brand-400 table-sm align-middle">
            <thead>
                <tr>
                    <th>主圖</th>
                    <th>名稱</th>
                    <th>發佈</th>
                    <th>熱門</th>
                    <th>狀態</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    dramas.map(drama=>
                    <tr key={drama.id}>
                        <td style={{width:'150px',height:'100px'}}>
                            <img src={drama.imageUrl} alt={drama.title} className="object-fit"/>
                        </td>
                        <td>{drama.title}</td>
                        <td>
                            <select className="form-select" defaultValue={drama.is_enabled?'1':'0'} onChange={(e)=>editDrama(drama,e)}>
                                <option value="1">顯示</option>
                                <option value="0">隱藏</option>
                            </select>
                        </td>
                        <td>
                            <select className="form-select" defaultValue={drama.isHot?'1':'0'} onChange={(e)=>editDrama(drama,e)}>
                                <option value="1">是</option>
                                <option value="0">否</option>
                            </select>
                        </td>
                        <td>
                            <select className="form-select" defaultValue={drama.isFinish?'1':'0'} onChange={(e)=>editDrama(drama,e)}>
                                <option value="1">已出團</option>
                                <option value="0">未出團</option>
                            </select>
                        </td>
                        <td>
                            <button type="button" className="btn btn-brand-800 text-white mx-1"
                            onClick={()=>{
                                setUnitDrama(drama);
                                setModalMode('edit');
                                openDramaForm();
                            }}
                            >編輯</button>
                            <button type="button" className="btn btn-outline-grey-600 text-grey-600 mx-1"
                            onClick={()=>{
                                setUnitDrama(drama);
                                setModalMode('delete');
                                openDramaForm();
                            }}
                            >刪除</button>
                        </td>
                    </tr>
                    )
                }
            </tbody>
        </table>
        {/* Modal */}
        <DramaFormModal
            dramaFormRef={dramaFormRef}
            closeDramaForm={closeDramaForm}
            deleteDrama={deleteDrama}
            modalMode={modalMode}
            unitDrama={unitDrama}
            getDramas={getDramas}
        />

    </div>
    </>)
};


export default DramaManage;