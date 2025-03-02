
const Breadcrumb = () => {

    return(<>
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="#">首頁</a></li>
                <li className="breadcrumb-item active" aria-current="page">劇會總覽</li>
            </ol>
        </nav>
    </>)
};

export default Breadcrumb;