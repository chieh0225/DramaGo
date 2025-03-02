

const SearchBar = () => {

    return(<>

        <div className="mb-3 position-relative w-100">
            <label htmlFor="searchBar" className="form-label position-absolute top-50 end-0 translate-middle-y pe-4"><i className="bi bi-search text-brand-core d-block"></i></label>
            <input type="email" className="form-control rounded-pill" id="searchBar" placeholder="搜尋劇會"/>
        </div>
    </>)
};

export default SearchBar;