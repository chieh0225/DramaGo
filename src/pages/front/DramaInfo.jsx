import "../../styles/pages/dramaInfo.scss";
import avatarImage from "../../assets/images/Frame 1000005391.png";
import mainImage from "../../assets/images/Frame 1000005356.png";
import photo from "../../assets/images/Frame 1000005390.png";

const DramaInfo = () => {
  return (
    <>
      <div className="bg-brand-50">
        <div className="container custom-container">
          <div className="row">
            <div
              style={{ borderBottom: "1px solid #FFA13C" }}
              className="mb-md-10 mb-6 "
            >
              <p className="d-none d-md-block mb-6 ">
                <span className="text-grey-400">首頁</span> &gt;
                <span className="text-grey-400">聚會總覽</span> &gt;
                <span className="text-brand-300 fw-semibold">
                  黑白大廚同樂會：戲裡戲外的美食人生|흑백요리사: 요리계급전쟁
                </span>
              </p>
              <p className="text-grey-950 fs-md-2 fs-5 fw-semibold mb-6">
                黑白大廚同樂會：戲裡戲外的美食人生|흑백요리사: 요리계급전쟁
              </p>
              <p className="mb-4">
                <img
                  src={avatarImage}
                  alt="發起者"
                  width="40"
                  height="40"
                  className="me-4"
                />
                <span className="fw-semibold poppins-font">樂樂</span>
              </p>
            </div>
            <div className="col-md-8 col-12">
              <img
                src={mainImage}
                alt="主圖"
                className="w-100 mb-md-12 mb-8"
                style={{ borderRadius: "20px" }}
              />
              <p className="mb-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                exercitationem eaque accusantium. Sint molestiae nostrum rerum
                ea iure, corrupti porro error eum. Nesciunt dolorum quod soluta
                possimus, molestias eius tenetur quo repellat, sunt architecto
                quidem non eos. Optio earum vero facere libero vel atque vitae
                officia minus dolores nostrum fugiat neque suscipit temporibus
                magni a eligendi ea doloribus, eaque exercitationem consectetur
                eos rerum facilis! Veniam consequatur ullam soluta libero
                commodi, vero fugit optio minus? Obcaecati, distinctio repellat
                recusandae, aut minima dolorem incidunt ab unde deserunt,
                molestiae architecto ipsam vitae iste repellendus quis eos sequi
                dicta at! Vero laboriosam tempore doloribus.
              </p>
              <div className="d-inline-flex gap-2 mb-md-12 mb-8">
                <button type="button" className="btn tag">
                  #台北
                </button>
                <button type="button" className="btn tag">
                  ＃韓劇
                </button>
                <button type="button" className="btn tag">
                  ＃Netflix
                </button>
              </div>

              <div
                className="attendent  pb-8"
                style={{ borderBottom: "1px solid #FFCA88" }}
              >
                <div className="justify-content-between d-flex mb-8">
                  <p className="fw-semibold">與會者(9)</p>
                  <p className="text-brand-core">查看全部</p>
                </div>
                <div className="d-flex gap-2">
                  <div className="attendent-card ">
                    <div className="decorative-label">Host</div>
                    <img src={avatarImage} alt="頭像" className="card-img" />
                    <p className="card-text text-grey-950 fw-semibold">Aaron</p>
                    <p className="card-text fs-12 text-brand-500">揪團主</p>
                  </div>
                  <div className="attendent-card ">
                    <img src={avatarImage} alt="頭像" className="card-img" />
                    <p className="card-text text-grey-950 fw-semibold">Kayne</p>
                    <p className="card-text fs-12 text-brand-500">參加者</p>
                  </div>
                </div>
              </div>

              <div
                className="photos pb-8 mt-12"
                style={{ borderBottom: "1px solid #FFCA88" }}
              >
                <div className="justify-content-between d-flex mb-4">
                  <p className="fw-semibold ">照片(3)</p>
                  <p className="text-brand-core">查看全部</p>
                </div>
                <div className="d-flex gap-2">
                  <img src={photo} alt="聚會照片" />
                  <img src={photo} alt="聚會照片" />
                </div>
              </div>

              <div className="comment  mt-12">
                <div className="justify-content-between d-flex mb-4">
                  <p className="fw-semibold ">留言(8)</p>
                  <p className="text-brand-core">查看全部</p>
                </div>
                <div className="comment-board p-8">
                  <div className="commment-content ">
                    <div className="message d-flex">
                      <div className="message-header">
                        <img
                          src={avatarImage}
                          alt="留言人"
                          width="40"
                          height="40"
                        />
                        <p>Willson</p>
                      </div>
                      <div className="message-content">
                        想問各位餐點有素食的嗎??
                      </div>
                    </div>

                    <div className="reply">
                      <div className="message-header">Kim</div>
                      <div className="message-content">
                        有兩道餐點是素的唷！
                      </div>
                    </div>

                    <div className="reply">
                      <div className="message-header">Resa</div>
                      <div
                        className="message-content d-flex justify-content-between
                      "
                      >
                        推薦他的素菜拼盤很不錯
                        <div className="d-flex">
                          2025/01/03<p>回覆</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="commment-textarea">
                    <div className="form-floating">
                      <textarea
                        className="form-control"
                        placeholder="Leave a comment here"
                        id="floatingTextarea2"
                        style={{ height: "100px" }}
                      ></textarea>
                      <div className="text-end mt-2">0/1000</div>
                      <label htmlFor="floatingTextarea2">請輸入內容</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-12">這是右邊</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DramaInfo;
