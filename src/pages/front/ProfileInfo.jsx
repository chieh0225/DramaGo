import { useForm } from "react-hook-form";

const area = [
  "臺北市",
  "新北市",
  "基隆市",
  "桃園市",
  "新竹縣",
  "新竹市",
  "苗栗縣",
  "台中市",
  "南投縣",
  "彰化縣",
  "雲林縣",
  "嘉義縣",
  "嘉義市",
  "台南市",
  "高雄市",
  "屏東縣",
  "宜蘭縣",
  "花蓮縣",
  "台東縣",
  "澎湖縣",
  "金門縣",
  "連江縣",
];

const loginMethod = ["Apple", "Google", "Facebook"];

const ProfileInfo = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
    reset,
  } = useForm({ mode: "onTouched" });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    // const { message, ...user } = data;

    // const userInfo = {
    //   data: { user, message },
    // };

    // checkout(userInfo);
  });

  return (
    <>
      <div className="col-lg-8">
        <div className="my-info">
          <h2 className="fs-md-1m fs-4 mb-8">個人資訊</h2>
          <section className="my-info-section">
            <div className="d-md-flex flex-md-row flex-column align-items-baseline gap-5 mb-md-0 mb-5">
              <h3 className="fs-md-2 fs-5 mb-md-5">會員資訊</h3>
              <p className="text-danger">
                <span className="fs-5">*</span>
                必填項目，填寫完整資訊開始參加聚會
              </p>
            </div>

            <form onSubmit={onSubmit}>
              <div classNameName="row align-items-center mb-5">
                <label
                  htmlFor="nickname"
                  className="col-md-3 col-form-label text-nowrap fs-md-5 fs-6"
                >
                  會員暱稱
                  <span className="fs-5 text-danger">*</span>
                </label>

                <div className="col-auto">
                  <input
                    type="text"
                    id="nickname"
                    className="form-control"
                    placeholder="暱稱字數上限 16 個字"
                    maxlength="16"
                  />
                </div>
              </div>

              <div classNameName="row align-items-center mb-5">
                <label
                  htmlFor="real-name"
                  className="col-md-3 col-form-label text-nowrap fs-md-5 fs-6"
                >
                  真實姓名<span className="fs-5 text-danger">*</span>
                </label>

                <div className="col-auto">
                  <input
                    type="text"
                    id="real-name"
                    className="form-control"
                    placeholder="請填寫你的真實姓名"
                  />
                </div>
              </div>

              <div classNameName="row align-items-center mb-5">
                <label
                  htmlFor="birthday"
                  className="col-md-3 col-form-label text-nowrap fs-md-5 fs-6"
                >
                  出生日期<span className="fs-5 text-danger">*</span>
                </label>

                <div className="col-auto">
                  <input type="date" id="birthday" className="form-control" />
                </div>
              </div>

              <div classNameName="row align-items-center mb-5">
                <label
                  htmlFor="gender"
                  className="col-md-3 col-form-label text-nowrap fs-md-5 fs-6"
                >
                  性別<span className="fs-5 text-danger">*</span>
                </label>

                <div className="col-auto">
                  <div classNameName="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio1"
                      value="option1"
                    />
                    <label className="form-check-label" for="inlineRadio1">
                      男生
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio2"
                      value="option2"
                    />
                    <label className="form-check-label" for="inlineRadio2">
                      女生
                    </label>
                  </div>
                </div>
              </div>

              <div classNameName="row align-items-center mb-5">
                <label
                  htmlFor="email"
                  className="col-md-3 col-form-label text-nowrap fs-md-5 fs-6"
                >
                  會員信箱&ensp;
                </label>

                <div className="col-auto">
                  <input
                    type="email"
                    id="email"
                    className="form-control-plaintext"
                    value="email@example.com"
                    readonly
                  />
                </div>
              </div>

              <div classNameName="row align-items-center mb-5">
                <label
                  htmlFor="tel"
                  className="col-md-3 col-form-label text-nowrap fs-md-5 fs-6"
                >
                  手機號碼<span className="fs-5 text-danger">*</span>
                </label>

                <div className="col-auto position-relative">
                  <input
                    type="tel"
                    id="tel"
                    className={`form-control ${
                      touchedFields.tel
                        ? errors.tel
                          ? "is-invalid"
                          : "is-valid"
                        : ""
                    }`}
                    placeholder="請填寫你的手機號碼"
                    {...register("tel", {
                      required: "電話欄位必填",
                      pattern: {
                        value: /^(0[2-8]\d{7}|09\d{8})$/,
                        message: "電話格式錯誤",
                      },
                    })}
                  />
                  {errors.tel && (
                    <div className="col-auto invalid-feedback">
                      {errors.tel.message}
                    </div>
                  )}
                </div>
              </div>

              <div className="row align-items-center mb-5">
                <label
                  htmlFor="area"
                  className="col-md-3 col-form-label text-nowrap fs-md-5 fs-6"
                >
                  居住地區<span className="fs-5 text-danger">*</span>
                </label>

                <div className="col-auto">
                  <select id="area" className="form-select" disabled>
                    <option selected>限台灣地區</option>
                  </select>
                </div>
                <div className="col-auto">
                  <select id="area" className="form-select">
                    {area.map((city, index) => (
                      <option key={index} value={city}>
                        {city}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="row mb-5">
                <label
                  htmlFor="message"
                  className="col-md-3 form-label text-nowrap fs-md-5 fs-6"
                >
                  個人簡介
                </label>

                <div className="d-md-flex d-flex-column align-items-md-end gap-md-5">
                  <textarea
                    id="message"
                    className="form-control mb-md-0 mb-8"
                    cols="5"
                    rows="5"
                    maxlength="100"
                    placeholder="請輸入你的個人簡介，字數上限 100 字"
                    style={{ resize: "none" }}
                    {...register("message")}
                  ></textarea>
                  <div className="text-end">
                    <button
                      type="submit"
                      className="btn btn-brand text-white w-100 text-nowrap"
                    >
                      確認修改
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </section>
        </div>

        <div className="login-method">
          <h2 className="fs-md-1m fs-4 mb-8">登入方式</h2>
          <section className="login-method-section">
            {["Apple", "Google", "Facebook"].map((method, index) => (
              <div
                key={index}
                className="row justify-content-between align-items-center py-3"
              >
                <p className="col-sm-4 col-3 fs-md-5 fs-6">{method} 登入</p>
                <p className="col-3 fs-6 text-muted text-nowrap">
                  尚未綁定帳號
                </p>
                <div className="col-3">
                  <button className="btn btn-secondary text-nowrap">
                    進行綁定
                  </button>
                </div>
              </div>
            ))}
            <div className="mt-4">
              <button className="btn btn-danger text-nowrap">刪除帳號</button>
            </div>
          </section>
        </div>

        <div className="reset-password">
          <h2 className="fs-md-1m fs-4 mb-8">重設密碼</h2>
          <section className="reset-password-section d-md-flex flex-md-row flex-column align-items-end">
            <div className="w-100">
              <div className="mb-3 row">
                <label
                  htmlFor="inputPassword"
                  className="col-md-3 col-form-label text-nowrap fs-md-5 fs-6"
                >
                  舊密碼
                </label>
                <div className="col-md-auto">
                  <input
                    type="password"
                    className="form-control"
                    id="inputPassword"
                    placeholder="密碼 (限 8-24 碼英文數字符號) "
                    name="password"
                  />
                </div>
              </div>

              <div className="mb-3 row">
                <label
                  htmlFor="inputPassword"
                  className="col-md-3 col-form-label text-nowrap fs-md-5 fs-6"
                >
                  新密碼
                </label>
                <div className="col-md-auto col-6">
                  <input
                    type="password"
                    className="form-control"
                    id="inputPassword"
                    placeholder="密碼 (限 8-24 碼英文數字符號) "
                    name="password"
                  />
                </div>
              </div>

              <div className="mb-md-0 mb-8 row">
                <label
                  htmlFor="inputPassword"
                  className="col-md-3 col-form-label text-nowrap fs-md-5 fs-6"
                >
                  確認新密碼
                </label>
                <div className="col-md-auto">
                  <input
                    type="password"
                    className="form-control"
                    id="inputPassword"
                    placeholder="再次輸入密碼"
                    name="password"
                  />
                </div>
              </div>
            </div>

            <div className="">
              <button className="btn btn-brand text-white w-100 text-nowrap">
                確認修改
              </button>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default ProfileInfo;
