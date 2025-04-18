import { createSlice } from '@reduxjs/toolkit';

const city = [
  '臺北市',
  '新北市',
  '基隆市',
  '桃園市',
  '新竹縣',
  '新竹市',
  '苗栗縣',
  '台中市',
  '南投縣',
  '彰化縣',
  '雲林縣',
  '嘉義縣',
  '嘉義市',
  '台南市',
  '高雄市',
  '屏東縣',
  '宜蘭縣',
  '花蓮縣',
  '台東縣',
  '澎湖縣',
  '金門縣',
  '連江縣',
];

const defaultDataSlice = createSlice({
  name: 'defaultDataSlice',
  initialState: {
    city,
  },
});

export default defaultDataSlice.reducer;
