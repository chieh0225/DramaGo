import { useForm } from "react-hook-form";

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
          <h2 className="fs-md-1m fs-5 mb-8">個人資訊</h2>
          <section className="my-info-section">
            <div className="d-flex align-items-baseline gap-5">
              <h3 className="fs-md-2 fs-6 mb-5">會員資訊</h3>
              <p className="text-danger">
                <span className="fs-5">*</span>
                必填項目，填寫完整資訊開始參加聚會
              </p>
            </div>

            <form onSubmit={onSubmit}>
              <div class="row g-5 align-items-center mb-5">
                <div className="col-auto">
                  <label
                    htmlFor="nike-name"
                    className="col-form-label fs-md-5 fs-6"
                  >
                    會員暱稱<span className="fs-5 text-danger">*</span>
                  </label>
                </div>
                <div className="col-auto">
                  <input
                    type="text"
                    id="nike-name"
                    className="form-control"
                    aria-describedby="passwordHelpInline"
                  />
                </div>
                <div className="col-auto">
                  <span id="passwordHelpInline" className="form-text">
                    Must be 8-20 characters long.
                  </span>
                </div>
              </div>

              <div class="row g-5 align-items-center mb-5">
                <div className="col-auto">
                  <label
                    htmlFor="real-name"
                    className="col-form-label fs-md-5 fs-6"
                  >
                    真實姓名<span className="fs-5 text-danger">*</span>
                  </label>
                </div>
                <div className="col-auto">
                  <input type="text" id="real-name" className="form-control" />
                </div>
              </div>

              <div class="row g-5 align-items-center mb-5">
                <div className="col-auto">
                  <label
                    htmlFor="birthday"
                    className="col-form-label fs-md-5 fs-6"
                  >
                    出生日期<span className="fs-5 text-danger">*</span>
                  </label>
                </div>
                <div className="col-auto">
                  <input type="text" id="birthday" className="form-control" />
                </div>
              </div>

              <div class="row g-5 align-items-center mb-5">
                <div className="col-auto">
                  <label
                    htmlFor="gender"
                    className="col-form-label fs-md-5 fs-6"
                  >
                    性別<span className="fs-5 text-danger">*</span>
                  </label>
                </div>
                <div className="col-auto">
                  <div class="form-check form-check-inline">
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

              <div class="row g-5 align-items-center mb-5">
                <div className="col-auto">
                  <label
                    htmlFor="email"
                    className="col-form-label fs-md-5 fs-6"
                  >
                    會員信箱&ensp;
                  </label>
                </div>
                <div className="col-auto">
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    disabled
                  />
                </div>
              </div>

              <div class="row g-5 align-items-center mb-5">
                <div className="col-auto">
                  <label htmlFor="tel" className="col-form-label fs-md-5 fs-6">
                    手機號碼<span className="fs-5 text-danger">*</span>
                  </label>
                </div>
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

              <div className="mb-5">
                <label htmlFor="message" className="form-label fs-md-5 fs-6">
                  個人簡介
                </label>
                <div className="d-md-flex d-flex-column align-items-md-end gap-md-5">
                  <textarea
                    id="message"
                    className="form-control mb-md-0 mb-5"
                    cols="5"
                    rows="5"
                    maxlength="100"
                    placeholder="請輸入你的個人簡介，字數限制 100 字"
                    style={{ resize: "none" }}
                    {...register("message")}
                  ></textarea>
                  <div className="text-end">
                    <button
                      type="submit"
                      className="btn btn-danger w-100 text-nowrap"
                    >
                      確認修改
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </section>
        </div>
      </div>
    </>
  );
};

export default ProfileInfo;
