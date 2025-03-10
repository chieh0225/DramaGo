import { useForm } from "react-hook-form";

import React, { useEffect } from 'react';
import * as c3 from 'c3';
import 'c3/c3.css';
import "../../assets/scss/xiang/c3.scss"


const BarChartComponent = () => {
    useEffect(() => {
        c3.generate({
            bindto: '#chart', // 綁定圖表容器
            data: {
                x: 'x', // 指定 X 軸資料欄位
                columns: [
                    ['x', '2023-12-05', '2023-12-06', '2023-12-07', '2023-12-08', '2023-12-09'], // X 軸資料 (日期)
                    ['待出圈', 1, 2, 1, 4, 3],    // 第一組數據
                    ['已出圈', 3, 5, 6, 7, 8],    // 第二組數據
                    ['取消出圈', 2, 3, 4, 2, 1]  // 第三組數據
                ],
                type: 'bar', // 設置為條形圖
                groups: [['待出圈', '已出圈']] // 將「待出圈」與「已出圈」分組堆疊
            },
            bar: {
                width: {
                    ratio: 0.5 // 調整條形寬度比例，增加間距
                }
            },
            axis: {
                x: {
                    type: 'timeseries', // 使用時間型 X 軸
                    tick: {
                        format: '%m/%d' // 顯示為月/日格式 (例如 12/05)
                    }
                },
                y: {
                    max: 15, // 設置 Y 軸最大值
                    padding: { top: 0, bottom: 0 } // 去除上下多餘間距
                }
            },
            legend: {
                position: 'right' // 將圖例放置於右側
            },
            grid: {
                y: {
                    lines: [
                        { value: 3, text: '3' }, // 輔助線標示值
                        { value: 6, text: '6' },
                        { value: 9, text: '9' },
                        { value: 12, text: '12' },
                        { value: 15, text: '15' }
                    ]
                }
            }
        });
        
    },  []);

    return <div className="mt-12" id="chart"></div>;
};




const Chart = () => {

    const categoryTags = ['全部', '看電影', '看表演', '逛劇展', '買劇品', '上劇課', '劇本殺', '接劇龍', '聽劇透', '遊劇旅', '追影星'];

    const { register, handleSubmit } = useForm();


    return (<>
        <form onSubmit={handleSubmit(onsubmit)} className="row align-items-center">
            <div className="col-4 " action="">
                <div className="input-group align-items-center">
                    <span className="me-4 fs-b1 fw-semibold">日期</span>
                    <input
                        {...register('startDate', {
                            required: true,
                        })}
                        type="date"
                        className=" form-control rounded-end rounded-pill"
                        placeholder="開始時間" />
                    <span className="input-group-text">~</span>
                    <input
                        {...register('endDate', {
                            required: true,
                        })}
                        type="date"
                        className=" form-control rounded-start rounded-pill"
                        placeholder="結束時間" />
                </div>
            </div>

            <div className="col-4 d-flex flex-nowrap">
                <span style={{ whiteSpace: `nowrap` }} className="me-4  fs-b1 fw-semibold">標籤</span>
                <select name="tag" className="w-100" id="" >
                    {
                        categoryTags.map((tag, index) =>
                            <option key={index} value={index}>{tag}</option>
                        )
                    }
                </select>
            </div>

            <div className="col-4 d-flex flex-nowrap">
                <span style={{ whiteSpace: `nowrap` }} className="me-4  fs-b1 fw-semibold">出團情況</span>
                <select name="tag" className="w-100" id="" >
                    <option value="出團">出團</option>
                    <option value="未出團">未出團</option>
                    <option value="取消出團">取消出團</option>
                </select>
            </div>
        </form >
        <BarChartComponent />
    </>)
};

export default Chart;