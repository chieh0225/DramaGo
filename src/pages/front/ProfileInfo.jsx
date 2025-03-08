import axios from "axios";
import Cookies from "js-cookie";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import Toast from "../../components/Toasts";

import { useDispatch } from "react-redux";
import { changeLoadingState } from "../../redux/slice/loadingSlice";
import Loading from "../../components/Loading";

const baseUrl = import.meta.env.VITE_APP_BASE_URL;
const apiPath = import.meta.env.VITE_APP_API_PATH;

const fiId = "-OKjOyDTSJ1ATYkUxSmj";

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

const loginMethod = ["Facebook", "Instagram"];

const ProfileInfo = () => {
  const dispatch = useDispatch();
  const [info, setInfo] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields, isDirty },
    reset,
  } = useForm({
    mode: "onTouched",
  });

  const getInfo = async () => {
    dispatch(changeLoadingState(true));
    const token = Cookies.get("token");
    axios.defaults.headers.common["Authorization"] = token;
    console.log("發送 API 請求中...");
    try {
      const res = await axios.get(
        `${baseUrl}/api/${apiPath}/admin/article/${fiId}`
      );

      console.log("API 回應成功：", res);

      setInfo(res.data.article);

      // 使用 reset 設置表單的預設值
      reset({
        title: res.data.article.title,
        author: res.data.article.author,
        birthday: res.data.article.birthday,
        gender: res.data.article.gender,
        email: res.data.article.email,
        phone: res.data.article.phone,
        area: res.data.article.area,
        description: res.data.article.description,
      });
    } catch (error) {
      console.error("取得個人資料失敗：", err);
      alert("取得個人資料失敗");
    } finally {
      dispatch(changeLoadingState(false));
    }
  };

  useEffect(() => {
    getInfo();
  }, [reset]);

  const onSubmit = handleSubmit((data) => {
    updateInfo(data);
  });

  const updateInfo = async (info) => {
    const data = {
      title: info.title || "預設暱稱",
      description: info.description || "這是預設簡介",
      image: "test.testtest",
      tag: ["tag1"],
      create_at: 1712238900,
      author: info.author || "預設姓名",
      isPublic: true,
      content: "這是內容",
      ...info,
    };
    try {
      await axios.put(`${baseUrl}/api/${apiPath}/admin/article/${fiId}`, {
        data,
      });
      await getInfo();
      Toast.fire({
        icon: "success",
        title: "更新個人資料成功！",
      });
    } catch (error) {
      alert("更新個人資料失敗");
      console.error(error);
      console.log(data);
    }
  };

  const handleUpdateInfo = () => {
    updateInfo();
  };

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
                必填項目，填寫完整資訊開始參加劇會
              </p>
            </div>

            <form onSubmit={onSubmit}>
              <div className="row align-items-center mb-5">
                <label
                  htmlFor="title"
                  className="col-md-3 col-form-label text-nowrap fs-md-5 fs-6"
                >
                  會員暱稱
                  <span className="fs-5 text-danger">*</span>
                </label>

                <div className="col-auto position-relative">
                  <input
                    type="text"
                    id="title"
                    className={`form-control ${
                      touchedFields.title
                        ? errors.title
                          ? "is-invalid"
                          : "is-valid"
                        : ""
                    }`}
                    placeholder="暱稱字數上限 16 個字"
                    maxLength="16"
                    {...register("title", {
                      required: "暱稱欄位必填",
                    })}
                  />
                  {errors.title && (
                    <div className="col-auto invalid-feedback">
                      {errors.title.message}
                    </div>
                  )}
                </div>
              </div>

              <div className="row align-items-center mb-5">
                <label
                  htmlFor="author"
                  className="col-md-3 col-form-label text-nowrap fs-md-5 fs-6"
                >
                  真實姓名<span className="fs-5 text-danger">*</span>
                </label>

                <div className="col-auto position-relative">
                  <input
                    type="text"
                    id="author"
                    className={`form-control ${
                      touchedFields.author
                        ? errors.author
                          ? "is-invalid"
                          : "is-valid"
                        : ""
                    }`}
                    placeholder="請填寫你的真實姓名"
                    {...register("author", {
                      required: "姓名欄位必填",
                    })}
                  />
                  {errors.author && (
                    <div className="col-auto invalid-feedback">
                      {errors.author.message}
                    </div>
                  )}
                </div>
              </div>

              <div className="row align-items-center mb-5">
                <label
                  htmlFor="birthday"
                  className="col-md-3 col-form-label text-nowrap fs-md-5 fs-6"
                >
                  出生日期<span className="fs-5 text-danger">*</span>
                </label>

                <div className="col-auto position-relative">
                  <input
                    type="date"
                    id="birthday"
                    className={`form-control ${
                      touchedFields.birthday
                        ? errors.birthday
                          ? "is-invalid"
                          : "is-valid"
                        : ""
                    }`}
                    {...register("birthday", {
                      required: "生日欄位必填",
                    })}
                  />
                  {errors.birthday && (
                    <div className="col-auto invalid-feedback">
                      {errors.birthday.message}
                    </div>
                  )}
                </div>
              </div>

              <div className="row align-items-center mb-5">
                <label
                  htmlFor="gender"
                  className="col-md-3 col-form-label text-nowrap fs-md-5 fs-6"
                >
                  性別<span className="fs-5 text-danger">*</span>
                </label>
                {errors.gender && (
                  <div className="col-auto invalid-feedback">
                    {errors.gender.message}
                  </div>
                )}

                <div className="col-auto position-relative">
                  <div className="form-check form-check-inline">
                    <input
                      className={`form-check-input ${
                        touchedFields.gender
                          ? errors.gender
                            ? "is-invalid"
                            : "is-valid"
                          : ""
                      }`}
                      type="radio"
                      name="gender"
                      id="inlineRadio1"
                      value="男生"
                      {...register("gender", { required: "性別必選" })}
                    />
                    <label className="form-check-label" htmlFor="inlineRadio1">
                      男生
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className={`form-check-input ${
                        touchedFields.gender
                          ? errors.gender
                            ? "is-invalid"
                            : "is-valid"
                          : ""
                      }`}
                      type="radio"
                      name="gender"
                      id="inlineRadio2"
                      value="女生"
                      {...register("gender", { required: "性別必選" })}
                    />
                    <label className="form-check-label" htmlFor="inlineRadio2">
                      女生
                    </label>
                  </div>
                </div>
              </div>

              <div className="row align-items-center mb-5">
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
                    {...register("email")}
                    readOnly
                    title="若需要修改請聯絡我們"
                  />
                </div>
              </div>

              <div className="row align-items-center mb-5">
                <label
                  htmlFor="phone"
                  className="col-md-3 col-form-label text-nowrap fs-md-5 fs-6"
                >
                  手機號碼<span className="fs-5 text-danger">*</span>
                </label>

                <div className="col-auto position-relative">
                  <input
                    type="tel"
                    id="phone"
                    className={`form-control ${
                      touchedFields.phone
                        ? errors.phone
                          ? "is-invalid"
                          : "is-valid"
                        : ""
                    }`}
                    placeholder="請填寫你的手機號碼"
                    {...register("phone", {
                      required: "電話欄位必填",
                      pattern: {
                        value: /^(0[2-8]\d{7}|09\d{8})$/,
                        message: "電話格式錯誤",
                      },
                    })}
                  />
                  {errors.phone && (
                    <div className="col-auto invalid-feedback">
                      {errors.phone.message}
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
                  <select
                    className="form-select"
                    defaultValue="僅限台灣"
                    title="目前僅限台灣地區"
                    disabled
                  >
                    <option>僅限台灣</option>
                  </select>
                </div>
                <div className="col-auto position-relative">
                  <select
                    id="area"
                    className="form-select"
                    {...register("area", {
                      required: "地區欄位必填",
                    })}
                  >
                    <option value="" disabled>
                      選擇地區
                    </option>
                    {area.map((city, index) => (
                      <option key={index} value={city}>
                        {city}
                      </option>
                    ))}
                  </select>
                  {errors.area && (
                    <div className="col-auto invalid-feedback">
                      {errors.area.message}
                    </div>
                  )}
                </div>
              </div>

              <div className="row mb-5">
                <label
                  htmlFor="description"
                  className="col-md-3 form-label text-nowrap fs-md-5 fs-6"
                >
                  個人簡介
                </label>

                <div className="d-md-flex d-flex-column align-items-md-end gap-md-5">
                  <textarea
                    id="description"
                    className="form-control mb-md-0 mb-8"
                    cols="5"
                    rows="5"
                    maxLength="100"
                    placeholder="請輸入你的個人簡介，字數上限 100 字"
                    style={{ resize: "none" }}
                    {...register("description")}
                  ></textarea>
                  <div
                    className="text-end"
                    title={!isDirty ? "表單未被修改時不能按唷~" : ""}
                  >
                    <button
                      type="submit"
                      className="btn btn-brand text-white w-100 text-nowrap"
                      disabled={!isDirty} // 當表單未被修改時禁用按鈕
                      onClick={handleUpdateInfo}
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
            {loginMethod.map((method, index) => (
              <div
                key={index}
                className="row justify-content-between align-items-center py-3"
              >
                <p className="col-sm-4 col-8 fs-md-5 fs-6 text-nowrap">
                  {method} 登入
                </p>
                <p className="col-sm-3 fs-6 text-muted text-nowrap d-sm-block d-none">
                  尚未綁定
                </p>
                <div className="col-sm-3 col-4">
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
                    type="text"
                    className="form-control"
                    id="inputPassword"
                    placeholder="密碼 (限 8-24 碼英文數字符號) "
                    name="password"
                  />
                </div>
              </div>

              <div className="mb-3 row">
                <label
                  htmlFor="newPasswor"
                  className="col-md-3 col-form-label text-nowrap fs-md-5 fs-6"
                >
                  新密碼
                </label>
                <div className="col-md-auto">
                  <input
                    type="text"
                    className="form-control"
                    id="newPasswor"
                    placeholder="密碼 (限 8-24 碼英文數字符號) "
                    name="newPasswor"
                  />
                </div>
              </div>

              <div className="mb-md-0 mb-8 row">
                <label
                  htmlFor="newPasswordCheck"
                  className="col-md-3 col-form-label text-nowrap fs-md-5 fs-6"
                >
                  確認新密碼
                </label>
                <div className="col-md-auto">
                  <input
                    type="text"
                    className="form-control"
                    id="newPasswordCheck"
                    placeholder="再次輸入密碼"
                    name="newPasswordCheck"
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
      <Loading />
    </>
  );
};

export default ProfileInfo;
