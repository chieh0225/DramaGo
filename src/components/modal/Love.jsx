import axios from 'axios';
import { useEffect, useState, useCallback } from 'react';

const baseUrl = import.meta.env.VITE_APP_BASE_URL;
const apiPath = import.meta.env.VITE_APP_API_PATH;

const Love = ({ id, state, mymodal }) => {
  const [loveState, setloveState] = useState(false);

  //新增&刪除
  const add_del = useCallback(() => {
    if (state === true) {
      (async () => {
        try {
          const resdata = await axios.get(`${baseUrl}/api/${apiPath}/cart`);
          let delId = 'null';
          const product = resdata.data.data.carts;

          product.forEach((e) => {
            if (id === e.product_id) delId = e.id;
          });

          if (delId === 'null') {
            await axios.post(`${baseUrl}/api/${apiPath}/cart`, {
              data: {
                product_id: id,
                qty: 1,
              },
            });
            setloveState(true);
          } else {
            await axios.delete(`${baseUrl}/api/${apiPath}/cart/${delId}`);
            setloveState(false);
          }
        } catch (err) {
          alert(`新增/刪除有錯誤`, err);
        }
      })();
    } else {
      mymodal.current.show();
    }
  }, [id, state, mymodal]);

  //最愛
  useEffect(() => {
    if (state === true) {
      (async () => {
        try {
          let delId = 'null';
          const res = await axios.get(`${baseUrl}/api/${apiPath}/cart`);
          const product = res.data.data.carts;
          product.forEach((e) => {
            if (id === e.product_id) delId = e.id;
          });
          if (delId === 'null') {
            setloveState(false);
          } else {
            setloveState(true);
          }
        } catch {
          alert('載入最愛的清單時發生錯誤，請稍後再試！');
        }
      })();
    } else {
      setloveState(false);
    }
  }, [id, state]);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      onClick={add_del}
      viewBox="0 0 32 32"
      fill={loveState === true ? '#ff8a20' : '#FFFFFF'}
    >
      <path
        d="M7.86277 24.6096V24.5899L7.86137 24.5702C7.75272 23.0491 7.75234 20.7556 7.75234 17.1004C7.75234 12.5851 7.86239 9.72975 7.9714 8.20047C8.06485 7.19283 8.69305 6.31611 9.74692 6.04515C10.9404 5.82867 13.0002 5.50527 16.2554 5.50527C18.8468 5.50527 20.6715 5.70901 21.9372 5.85033C22.2542 5.88571 22.5361 5.91719 22.7862 5.94057C23.7952 6.21056 24.3333 7.05457 24.429 8.09001C24.538 9.61928 24.648 12.4747 24.648 16.9899C24.648 20.6363 24.6477 22.9276 24.5398 24.4487C24.4388 25.3428 24.162 25.8917 23.5177 26.2139L23.504 26.2207L23.4907 26.2283C22.9775 26.5216 22.2235 26.4113 21.5457 25.9271L21.5353 25.9198L21.5247 25.9129L17.7802 23.49C16.8187 22.8098 15.5759 22.811 14.6154 23.4934L10.8663 26.0295L10.8662 26.0294L10.8547 26.0376C10.2271 26.4859 9.43621 26.5605 8.85328 26.3106L8.84157 26.3056L8.82965 26.3012C8.22992 26.0763 7.86277 25.4559 7.86277 24.6096Z"
        fill={loveState === true ? '#ff8a20' : '#FFFFFF'}
        stroke="#989898"
        strokeWidth="1.10429"
      />
    </svg>
  );
};

export default Love;
