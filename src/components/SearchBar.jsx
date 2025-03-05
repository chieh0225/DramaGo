import { useEffect, useState } from "react";


const SearchBar = ({filterDramas,setDramas,closeSearchOffcanvas}) => {
    const [keyword,setKeyword] = useState('');
    const [isFirstRender,setIsFirstRender] = useState(true);

    const handleSearchSubmit = (e)=>{
        e.preventDefault();
        const newArr = filterDramas.filter(drama => drama.title.includes(keyword));
        setDramas(newArr);
        closeSearchOffcanvas();
    };

    useEffect(()=>{
        if (isFirstRender) {
            setIsFirstRender(false);
            return;
        };
        if (setDramas&&!keyword) {
            setDramas(filterDramas);
        };
    },[keyword]);

    return(<>
        <div className="mb-3 position-relative w-100">
            <form>
                <label 
                htmlFor="searchBar" 
                className="form-label position-absolute top-50 end-0 translate-middle-y pe-4">
                    <button 
                    type="submit"
                    className="btn"
                    style={{ "--bs-btn-border-color": "none" }}
                    onClick={handleSearchSubmit}
                    >
                        <i className="bi bi-search text-brand-core d-block"></i>
                    </button>
                </label>
                <input 
                type="text" 
                className="form-control rounded-pill" 
                id="searchBar" 
                placeholder="搜尋劇會"
                onChange={e=>setKeyword(e.target.value)}
                value={keyword}
                />
            </form>
        </div>
    </>)
};

export default SearchBar;