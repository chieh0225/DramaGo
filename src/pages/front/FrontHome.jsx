import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
//照片
import swiper1 from "../../assets/images/Frame 1000005334.png";
import swiper2 from "../../assets/images/Frame 1000005334-1.png";
import swiper3 from "../../assets/images/Frame 1000005334-2.png";
import swiper4 from "../../assets/images/Frame 1000005334-3.png";
import card1 from "../../assets/images/Frame 1000005356.png"
import cardUser from "../../assets/images/inner/Frame 1000005423.png"
import SwiperModalimg1 from "../../assets/images/Frame 1000005367.png"
import SwiperModalimg2 from "../../assets/images/Frame 1000005366.png"
import SwiperModalimg3 from "../../assets/images/Frame 1000005390.png"
import SwiperModalimg4 from "../../assets/images/Frame 1000005368.png"
import SwiperModalimg5 from "../../assets/images/Frame 1000005373.png"
import component1 from "../../assets/images/Component 3.svg"
import component2 from "../../assets/images/Component 4.svg"
import component3 from "../../assets/images/Component 2.svg"
import img1 from "../../assets/images/Frame 1000005407.svg"
import img2 from "../../assets/images/Frame 1000005408.svg"

//確認跑馬燈
//推薦聚會API
//保持登入
//尚未補上驗證碼過期code


const SwiperModalType = () => {

  const swiperRef = useRef(null)

  const next = () => {
    swiperRef.current.slideNext()
  }

  const prev = () => {
    swiperRef.current.slidePrev()
  }

  return (
    <>
      <Swiper
        className="mySwiper mb-lg-17"
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        loop={true}
        breakpoints={{
          992: {
            slidesPerView: 4,
            spaceBetween: 24
          }
        }}
        style={{ width: '100%', height: '100%' }}
      >
        <SwiperSlide>
          <img style={{ width: '100%', height: '100%' }} className='mb-4' src={swiper1} alt="" />
          <p className='fw-semibold fs-5 text-center'>當主揪自己開團</p>
        </SwiperSlide>
        <SwiperSlide >
          <img style={{ width: '100%', height: '100%' }} className='mb-4' src={swiper2} alt="" />
          <p className='fw-semibold fs-5 text-center'>參加電影劇會</p>
        </SwiperSlide>
        <SwiperSlide >
          <img style={{ width: '100%', height: '100%' }} className='mb-4' src={swiper3} alt="" />
          <p className='fw-semibold fs-5 text-center'>參加劇本殺</p>
        </SwiperSlide>
        <SwiperSlide >
          <img style={{ width: '100%', height: '100%' }} className='mb-4' src={swiper4} alt="" />
          <p className='fw-semibold fs-5 text-center'>參加逛劇展</p>
        </SwiperSlide>
      </Swiper>
      <div className='d-flex d-lg-none mt-6 mb-15'>
        <a onClick={prev} className='border border-brand-300 rounded-circle me-4'>
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="#ffa13c">
            <path d="M9.56054 12.1002L14.2417 6.83932C14.2749 6.80544 14.3066 6.79756 14.3275 6.79786C14.3493 6.79818 14.3829 6.80765 14.4172 6.84622C14.4534 6.88682 14.4823 6.95284 14.4832 7.0324C14.4841 7.11014 14.4581 7.17634 14.4237 7.21887L10.2057 11.9594L9.90996 12.2918L10.2057 12.6242L14.429 17.3708C14.4658 17.4122 14.4947 17.4791 14.4946 17.5598C14.4946 17.6405 14.4654 17.7081 14.4287 17.7494C14.3934 17.789 14.3593 17.7979 14.3382 17.7979C14.3169 17.7978 14.2826 17.7888 14.2474 17.7492L14.2473 17.749L9.56054 12.4819C9.56038 12.4817 9.56021 12.4815 9.56005 12.4813C9.52333 12.4394 9.49463 12.372 9.49463 12.2913C9.49463 12.2103 9.52356 12.1424 9.56008 12.1008C9.56023 12.1006 9.56039 12.1004 9.56054 12.1002Z" fill="#ffa13c" stroke="#ffa13c" />
          </svg>
        </a>
        <a onClick={next} className='border border-brand-300 rounded-circle'>
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="#ffa13c">
            <path d="M14.82 13.0555L15.1125 12.7244L14.82 12.3934L10.6062 7.62443C10.4985 7.50252 10.4985 7.37179 10.6062 7.24988C10.6516 7.19853 10.6808 7.18765 10.6895 7.18567C10.6982 7.18765 10.7275 7.19853 10.7728 7.24988L15.4446 12.5371C15.5523 12.6591 15.5523 12.7898 15.4446 12.9117L10.8144 18.1519C10.7379 18.1951 10.6506 18.1967 10.5733 18.1566C10.4999 18.0471 10.5108 17.9323 10.6062 17.8244L14.82 13.0555ZM10.6922 7.1853C10.6922 7.18537 10.6915 7.18551 10.6901 7.18554L10.6922 7.1853ZM10.6889 7.18554C10.6875 7.18551 10.6868 7.18537 10.6868 7.1853L10.6889 7.18554Z" fill="#ffa13c" stroke="#ffa13c" />
          </svg>
        </a>
      </div>
    </>
  )
}

const Card = () => {
  return (
    <>
      <div className='row w-100 mb-lg-23x mb-24x'>
        <div className="card flex-lg-row  shadow border-0 col-lg-6 p-4 mb-3 mb-lg-6">
          <img src={card1} className="card-img-top" alt="..." />
          <div className="card-body pb-0">
            <p className="text-gerey-950 fs-b1 fw-semibold mb-3">黑白大廚同樂會：戲裡戲外的美食人生|흑백요리사: 요리계급전쟁</p>
            <div className='d-flex mb-1'>
              <p className='text-grey-700 pe-4'>出團時間</p>
              <p className='text-grey-700 pe-4'>12/25 19:00</p>
            </div>
            <div className='d-flex  border-bottom border-brand-100 mb-2'>
              <p className='text-grey-700 pe-4'>參加人數</p>
              <p className='text-grey-700 pe-4 pb-6'>10</p>
            </div>
            <div className='d-flex justify-content-between align-items-center'>
              <div className='d-flex align-items-center'>
                <img className='img-l me-4' src={cardUser} alt="" />
                <p className='fw-semibold text-grey-950'>xiang</p>
              </div>
              {/* 點擊後觸發API修改為收藏並修改顏色brand/core */}
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="#FFFFFF">
                <path d="M7.86277 24.6096V24.5899L7.86137 24.5702C7.75272 23.0491 7.75234 20.7556 7.75234 17.1004C7.75234 12.5851 7.86239 9.72975 7.9714 8.20047C8.06485 7.19283 8.69305 6.31611 9.74692 6.04515C10.9404 5.82867 13.0002 5.50527 16.2554 5.50527C18.8468 5.50527 20.6715 5.70901 21.9372 5.85033C22.2542 5.88571 22.5361 5.91719 22.7862 5.94057C23.7952 6.21056 24.3333 7.05457 24.429 8.09001C24.538 9.61928 24.648 12.4747 24.648 16.9899C24.648 20.6363 24.6477 22.9276 24.5398 24.4487C24.4388 25.3428 24.162 25.8917 23.5177 26.2139L23.504 26.2207L23.4907 26.2283C22.9775 26.5216 22.2235 26.4113 21.5457 25.9271L21.5353 25.9198L21.5247 25.9129L17.7802 23.49C16.8187 22.8098 15.5759 22.811 14.6154 23.4934L10.8663 26.0295L10.8662 26.0294L10.8547 26.0376C10.2271 26.4859 9.43621 26.5605 8.85328 26.3106L8.84157 26.3056L8.82965 26.3012C8.22992 26.0763 7.86277 25.4559 7.86277 24.6096Z" fill="#FFFFFF" stroke="#989898" strokeWidth="1.10429" />
              </svg>
            </div>
          </div>
        </div>

        <div className="card flex-lg-row  shadow border-0 col-lg-6 p-4 mb-3 mb-lg-6">
          <img src={card1} className="card-img-top" alt="..." />
          <div className="card-body pb-0">
            <p className="text-gerey-950 fs-b1 fw-semibold mb-3">黑白大廚同樂會：戲裡戲外的美食人生|흑백요리사: 요리계급전쟁</p>
            <div className='d-flex mb-1'>
              <p className='text-grey-700 pe-4'>出團時間</p>
              <p className='text-grey-700 pe-4'>12/25 19:00</p>
            </div>
            <div className='d-flex  border-bottom border-brand-100 mb-2'>
              <p className='text-grey-700 pe-4'>參加人數</p>
              <p className='text-grey-700 pe-4 pb-6'>10</p>
            </div>
            <div className='d-flex justify-content-between align-items-center'>
              <div className='d-flex align-items-center'>
                <img className='img-l me-4' src={cardUser} alt="" />
                <p className='fw-semibold text-grey-950'>xiang</p>
              </div>
              {/* 點擊後觸發API修改為收藏並修改顏色brand/core */}
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="#FFFFFF">
                <path d="M7.86277 24.6096V24.5899L7.86137 24.5702C7.75272 23.0491 7.75234 20.7556 7.75234 17.1004C7.75234 12.5851 7.86239 9.72975 7.9714 8.20047C8.06485 7.19283 8.69305 6.31611 9.74692 6.04515C10.9404 5.82867 13.0002 5.50527 16.2554 5.50527C18.8468 5.50527 20.6715 5.70901 21.9372 5.85033C22.2542 5.88571 22.5361 5.91719 22.7862 5.94057C23.7952 6.21056 24.3333 7.05457 24.429 8.09001C24.538 9.61928 24.648 12.4747 24.648 16.9899C24.648 20.6363 24.6477 22.9276 24.5398 24.4487C24.4388 25.3428 24.162 25.8917 23.5177 26.2139L23.504 26.2207L23.4907 26.2283C22.9775 26.5216 22.2235 26.4113 21.5457 25.9271L21.5353 25.9198L21.5247 25.9129L17.7802 23.49C16.8187 22.8098 15.5759 22.811 14.6154 23.4934L10.8663 26.0295L10.8662 26.0294L10.8547 26.0376C10.2271 26.4859 9.43621 26.5605 8.85328 26.3106L8.84157 26.3056L8.82965 26.3012C8.22992 26.0763 7.86277 25.4559 7.86277 24.6096Z" fill="#FFFFFF" stroke="#989898" strokeWidth="1.10429" />
              </svg>
            </div>
          </div>
        </div>

        <div className="card flex-lg-row  shadow border-0 col-lg-6 p-4 mb-3 mb-lg-6">
          <img src={card1} className="card-img-top" alt="..." />
          <div className="card-body pb-0">
            <p className="text-gerey-950 fs-b1 fw-semibold mb-3">黑白大廚同樂會：戲裡戲外的美食人生|흑백요리사: 요리계급전쟁</p>
            <div className='d-flex mb-1'>
              <p className='text-grey-700 pe-4'>出團時間</p>
              <p className='text-grey-700 pe-4'>12/25 19:00</p>
            </div>
            <div className='d-flex  border-bottom border-brand-100 mb-2'>
              <p className='text-grey-700 pe-4'>參加人數</p>
              <p className='text-grey-700 pe-4 pb-6'>10</p>
            </div>
            <div className='d-flex justify-content-between align-items-center'>
              <div className='d-flex align-items-center'>
                <img className='img-l me-4' src={cardUser} alt="" />
                <p className='fw-semibold text-grey-950'>xiang</p>
              </div>
              {/* 點擊後觸發API修改為收藏並修改顏色brand/core */}
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="#FFFFFF">
                <path d="M7.86277 24.6096V24.5899L7.86137 24.5702C7.75272 23.0491 7.75234 20.7556 7.75234 17.1004C7.75234 12.5851 7.86239 9.72975 7.9714 8.20047C8.06485 7.19283 8.69305 6.31611 9.74692 6.04515C10.9404 5.82867 13.0002 5.50527 16.2554 5.50527C18.8468 5.50527 20.6715 5.70901 21.9372 5.85033C22.2542 5.88571 22.5361 5.91719 22.7862 5.94057C23.7952 6.21056 24.3333 7.05457 24.429 8.09001C24.538 9.61928 24.648 12.4747 24.648 16.9899C24.648 20.6363 24.6477 22.9276 24.5398 24.4487C24.4388 25.3428 24.162 25.8917 23.5177 26.2139L23.504 26.2207L23.4907 26.2283C22.9775 26.5216 22.2235 26.4113 21.5457 25.9271L21.5353 25.9198L21.5247 25.9129L17.7802 23.49C16.8187 22.8098 15.5759 22.811 14.6154 23.4934L10.8663 26.0295L10.8662 26.0294L10.8547 26.0376C10.2271 26.4859 9.43621 26.5605 8.85328 26.3106L8.84157 26.3056L8.82965 26.3012C8.22992 26.0763 7.86277 25.4559 7.86277 24.6096Z" fill="#FFFFFF" stroke="#989898" strokeWidth="1.10429" />
              </svg>
            </div>
          </div>
        </div>

        <div className="card flex-lg-row  shadow border-0 col-lg-6 p-4 mb-3 mb-lg-6">
          <img src={card1} className="card-img-top" alt="..." />
          <div className="card-body pb-0">
            <p className="text-gerey-950 fs-b1 fw-semibold mb-3">黑白大廚同樂會：戲裡戲外的美食人生|흑백요리사: 요리계급전쟁</p>
            <div className='d-flex mb-1'>
              <p className='text-grey-700 pe-4'>出團時間</p>
              <p className='text-grey-700 pe-4'>12/25 19:00</p>
            </div>
            <div className='d-flex  border-bottom border-brand-100 mb-2'>
              <p className='text-grey-700 pe-4'>參加人數</p>
              <p className='text-grey-700 pe-4 pb-6'>10</p>
            </div>
            <div className='d-flex justify-content-between align-items-center'>
              <div className='d-flex align-items-center'>
                <img className='img-l me-4' src={cardUser} alt="" />
                <p className='fw-semibold text-grey-950'>xiang</p>
              </div>
              {/* 點擊後觸發API修改為收藏並修改顏色brand/core */}
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="#FFFFFF">
                <path d="M7.86277 24.6096V24.5899L7.86137 24.5702C7.75272 23.0491 7.75234 20.7556 7.75234 17.1004C7.75234 12.5851 7.86239 9.72975 7.9714 8.20047C8.06485 7.19283 8.69305 6.31611 9.74692 6.04515C10.9404 5.82867 13.0002 5.50527 16.2554 5.50527C18.8468 5.50527 20.6715 5.70901 21.9372 5.85033C22.2542 5.88571 22.5361 5.91719 22.7862 5.94057C23.7952 6.21056 24.3333 7.05457 24.429 8.09001C24.538 9.61928 24.648 12.4747 24.648 16.9899C24.648 20.6363 24.6477 22.9276 24.5398 24.4487C24.4388 25.3428 24.162 25.8917 23.5177 26.2139L23.504 26.2207L23.4907 26.2283C22.9775 26.5216 22.2235 26.4113 21.5457 25.9271L21.5353 25.9198L21.5247 25.9129L17.7802 23.49C16.8187 22.8098 15.5759 22.811 14.6154 23.4934L10.8663 26.0295L10.8662 26.0294L10.8547 26.0376C10.2271 26.4859 9.43621 26.5605 8.85328 26.3106L8.84157 26.3056L8.82965 26.3012C8.22992 26.0763 7.86277 25.4559 7.86277 24.6096Z" fill="#FFFFFF" stroke="#989898" strokeWidth="1.10429" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

const SwiperModalimg = () => {

  const swiperRef = useRef(null)

  const next = () => {
    swiperRef.current.slideNext()
  }

  const prev = () => {
    swiperRef.current.slidePrev()
  }
  //抓取投影片位置調整pb/pt
  return (
    <>
      <Swiper
        className="mySwiper"
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        loop={true}
        modules={[Autoplay]}
        breakpoints={{
          992: {
            slidesPerView: 3,
            spaceBetween: 16
          }
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        style={{ width: '100%', height: '100%' }}
      >
        <SwiperSlide>
          <img style={{ width: '100%', height: '100%' }} className='pb-lg-4' src={SwiperModalimg1} alt="" />
        </SwiperSlide>
        <SwiperSlide >
          <img style={{ width: '100%', height: '100%' }} className='pt-lg-4' src={SwiperModalimg2} alt="" />
        </SwiperSlide>
        <SwiperSlide >
          <img style={{ width: '100%', height: '100%' }} className='pb-lg-4' src={SwiperModalimg3} alt="" />
        </SwiperSlide>
        <SwiperSlide >
          <img style={{ width: '100%', height: '100%' }} className='pt-lg-4' src={SwiperModalimg4} alt="" />
        </SwiperSlide>
        <SwiperSlide >
          <img style={{ width: '100%', height: '100%' }} className='pb-lg-4' src={SwiperModalimg5} alt="" />
        </SwiperSlide>
      </Swiper>
      <div className='d-flex mt-10 mt-lg-8 mb-6 mb-lg-0'>
        <a onClick={prev} className='border border-brand-300 rounded-circle me-4'>
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="#ffa13c">
            <path d="M9.56054 12.1002L14.2417 6.83932C14.2749 6.80544 14.3066 6.79756 14.3275 6.79786C14.3493 6.79818 14.3829 6.80765 14.4172 6.84622C14.4534 6.88682 14.4823 6.95284 14.4832 7.0324C14.4841 7.11014 14.4581 7.17634 14.4237 7.21887L10.2057 11.9594L9.90996 12.2918L10.2057 12.6242L14.429 17.3708C14.4658 17.4122 14.4947 17.4791 14.4946 17.5598C14.4946 17.6405 14.4654 17.7081 14.4287 17.7494C14.3934 17.789 14.3593 17.7979 14.3382 17.7979C14.3169 17.7978 14.2826 17.7888 14.2474 17.7492L14.2473 17.749L9.56054 12.4819C9.56038 12.4817 9.56021 12.4815 9.56005 12.4813C9.52333 12.4394 9.49463 12.372 9.49463 12.2913C9.49463 12.2103 9.52356 12.1424 9.56008 12.1008C9.56023 12.1006 9.56039 12.1004 9.56054 12.1002Z" fill="#ffa13c" stroke="#ffa13c" />
          </svg>
        </a>
        <a onClick={next} className='border border-brand-300 rounded-circle'>
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="#ffa13c">
            <path d="M14.82 13.0555L15.1125 12.7244L14.82 12.3934L10.6062 7.62443C10.4985 7.50252 10.4985 7.37179 10.6062 7.24988C10.6516 7.19853 10.6808 7.18765 10.6895 7.18567C10.6982 7.18765 10.7275 7.19853 10.7728 7.24988L15.4446 12.5371C15.5523 12.6591 15.5523 12.7898 15.4446 12.9117L10.8144 18.1519C10.7379 18.1951 10.6506 18.1967 10.5733 18.1566C10.4999 18.0471 10.5108 17.9323 10.6062 17.8244L14.82 13.0555ZM10.6922 7.1853C10.6922 7.18537 10.6915 7.18551 10.6901 7.18554L10.6922 7.1853ZM10.6889 7.18554C10.6875 7.18551 10.6868 7.18537 10.6868 7.1853L10.6889 7.18554Z" fill="#ffa13c" stroke="#ffa13c" />
          </svg>
        </a>
      </div>
    </>
  )
}

const FrontHome = () => {


  return (
    <>
      <main>
        <div className="bg-banner-img d-flex mx-auto align-items-center justify-content-center justify-content-lg-start ">
          <div className='d-flex flex-column align-items-center ms-lg-25x'>
            <h2 className=" fw-semibold text-center fs-1m text-brand-950 mb-3">相約美好<br className='d-lg-none' />聚會時光</h2>
            <p className="fw-semibold fs-4 text-brand-200 mb-10 text-center">Let's have<br className='d-lg-none' /> a great time together.</p>
          </div>
        </div>

        <div className="container">
          {/* 當我們劇在一起能做什麼 */}
          <section className="position-relative d-flex flex-column align-items-center justify-content-center pt-lg-18 pt-15 ">
            <h1 className=" fw-semibold text-center fs-2 text-brand-950 mb-3">當我們<span className="text-brand-300">劇</span>在一起<br className="d-lg-none" />能做什麼</h1>
            <p className="fw-semibold fs-5 text-grey-200 mb-6">What can you do</p>
            <div className="row mb-lg-17 ">
              <div className="mb-10 mb-lg-0 col-lg-4 d-flex flex-column justify-content-center">
                <img className="mb-6" src={component1} alt="" />
                <h3 className="fw-semibold text-center fs-5 mb-3">加入劇團</h3>
                <p className="text-center">參加其他人發起的劇會，你可以看到正在進行的劇會，並選擇感興趣的加入</p>
              </div>
              <div className="mb-10 mb-lg-0 col-lg-4  d-flex flex-column justify-content-center">
                <img className="mb-6" src={component2} alt="" />
                <h3 className="fw-semibold text-center fs-5 mb-3">當主揪自己開團</h3>
                <p className="text-center">沒有想參加的劇會? 你可以自己開團!自己選擇主題、地點、餐與人數與餐與條件，然後發起自己的劇會</p>
              </div>
              <div className="mb-15 mb-lg-0 col-lg-4  d-flex flex-column justify-content-center">
                <img className="mb-6" src={component3} alt="" />
                <h3 className="fw-semibold text-center fs-5 mb-3">參加線下劇會</h3>
                <p className="text-center">除了線上劇會，也可以選擇參加線下的劇會，<br />例如: 參加博覽會</p>
              </div>
            </div>
            <div style={{ marginTop: "118px", transform: "translate(-100%)" }} className='position-absolute top-0 start-0 d-none d-lg-block'>
              <img src={img1} alt="" />
            </div>
            <div style={{ marginTop: "49px", transform: "translate(75%)" }} className='position-absolute top-0 end-0 d-none d-lg-block'>
              <img src={img2} alt="" />
            </div>
          </section>
        </div>
        <div className='position-relative'>
          <div className="container">
            {/* 劇會類型 */}
            <section className="d-flex flex-column align-items-center justify-content-center pt-15 pt-lg-18">
              <h2 className=" fw-semibold text-center fs-2 text-brand-950 mb-3">熱門<span className="text-brand-300">劇</span>會類型</h2>
              <p className="fw-semibold fs-5 text-grey-200 mb-6">HOT</p>
              <SwiperModalType />
            </section>
            {/* 每日推薦 */}
            <section className="d-flex flex-column align-items-center justify-content-center pt-15">
              <h2 className=" fw-semibold text-center fs-2 text-brand-950 mb-3">每日推薦</h2>
              <p className="fw-semibold fs-5 text-brand-200 mb-10">Daily recommendations</p>
              <Card />
            </section>
          </div>
          <div className='bg-center1 position-absolute top-0' style={{marginTop:"306px"}} ></div>
        </div>

        <div className="container pt-lg-18">
          {/* 劇會照片 */}
          <section className="d-flex flex-column align-items-center justify-content-center">
            <h2 className=" fw-semibold text-center fs-2 text-brand-950 mb-3"><span className="text-brand-300">劇</span>會照片</h2>
            <p className="fw-semibold fs-5 text-grey-200 mb-6">Memoirs</p>
            <SwiperModalimg />
          </section>
        </div>

      </main>
      <div className='bg-decorate-img'></div>
    </>
  )
};



export default FrontHome;