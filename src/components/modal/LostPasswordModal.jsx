import { useState } from "react";

//驗證是否有帳密，正常是由後端提供的API來確認，並同時發送驗證碼，需要模擬這段來撰寫code 還是只要是mail 就提供驗證碼?
//更改密碼直接跳轉登入畫面?

const LostPasswordModal = () => {
    const [state , setState] = useState(true)

    return (
        <>
            {/* <!-- Modal --> */}
            <div className="modal fade" id="Lost" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="Lost" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content bg-brand-50">
                        <div className="row">
                            <div className="col-lg-6 d-none d-lg-flex align-items-center justify-content-center">
                                <img src="../DramaGo/src/assets/images/Forgot-password-cuate.png" alt="" />
                            </div>
                            <div className="col-lg-6 py-8 px-6 ps-lg-3">
                                <div className="d-flex justify-content-between">
                                    <div>
                                        <h5 className="modal-title fs-1 mb-3">忘記密碼</h5>
                                    </div>
                                    <button type="button" className="btn-close me-3" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>

                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="請輸入會員信箱" />
                                    </div>
                                        <p className="mb-3">驗證碼 : </p>
                                        <div className="mb-3">
                                        <label htmlFor="exampleInputEmail1" className="form-label">請輸入驗證碼</label>
                                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="請輸入會員信箱" />
                                    </div>
                                    <button type="submit" data-bs-toggle="modal" data-bs-target="#Change" className="btn w-100 rounded-pill btn-brand-400 mb-4">確認</button>
                                </form>
                                <button className="btn w-100 rounded-pill btn-brand-400 mb-4" data-bs-toggle="modal" data-bs-target="#Login">返回登入</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}


export default LostPasswordModal ;