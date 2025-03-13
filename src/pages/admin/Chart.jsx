import { useForm } from "react-hook-form";
import dayjs from "dayjs";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import c3 from "c3";
import "c3/c3.css";
import "../../assets/scss/pages/_chart.scss";

const Chart = () => {
  const [filteredData, setFilteredData] = useState([]);
  const [apiData, setApiData] = useState([]);
  const categoryTags = [
    "全部",
    "看電影",
    "看表演",
    "逛劇展",
    "買劇品",
    "上劇課",
    "劇本殺",
    "接劇龍",
    "聽劇透",
    "遊劇旅",
    "追影星",
  ];

  const { register, handleSubmit } = useForm();

  // 獲取 API 數據
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://ec-course-api.hexschool.io/v2/api/dramago/products"
        );
        setApiData(response.data.products);
        setFilteredData(response.data.products);
      } catch (error) {
        console.error("獲取數據失敗:", error);
      }
    };
    fetchData();
  }, []);

  // 生成圓餅圖
  const generatePieChart = (data) => {
    // 計算類別占比
    const categoryCount = data.reduce((acc, product) => {
      acc[product.category] = (acc[product.category] || 0) + 1;
      return acc;
    }, {});

    // 轉換為 c3 數據格式
    const chartData = Object.entries(categoryCount);

    // 生成圓餅圖
    c3.generate({
      bindto: "#pieChart",
      data: {
        columns: chartData,
        type: "pie",
      },
      pie: {
        label: {
          format: function (value) {
            return value + "個";
          },
        },
      },
    });
  };

  // 生成柱狀圖
  const generateBarChart = (data) => {
    // 按日期分組並統計不同狀態的數量
    const dateStats = data.reduce((acc, product) => {
      const date = dayjs(product.date.start).format("MM/DD");
      if (!acc[date]) {
        acc[date] = {
          pending: 0, // 待確認出團 (isFinish: 0, is_enabled: 1)
          completed: 0, // 已出團 (isFinish: 1 && is_enabled: 1)
          cancelled: 0, // 取消出團 (is_enabled: 0)
        };
      }

      if (product.isFinish === 1 && product.is_enabled) {
        acc[date].completed++;
      } else if (product.isFinish === 0 && product.is_enabled) {
        acc[date].pending++;
      } else if (!product.is_enabled) {
        acc[date].cancelled++;
      }

      return acc;
    }, {});

    // 準備圖表數據
    const dates = Object.keys(dateStats).sort();
    const chartData = {
      dates: ["x", ...dates],
      pending: ["待確認出團"],
      completed: ["已出團"],
      cancelled: ["取消出團"],
    };

    // 填充數據
    dates.forEach((date) => {
      chartData.pending.push(dateStats[date].pending);
      chartData.completed.push(dateStats[date].completed);
      chartData.cancelled.push(dateStats[date].cancelled);
    });

    // 生成圖表
    c3.generate({
      bindto: "#barChart",
      data: {
        x: "x",
        columns: [
          chartData.dates,
          chartData.pending,
          chartData.completed,
          chartData.cancelled,
        ],
        type: "bar",
        groups: [["待確認出團", "已出團", "取消出團"]],
        colors: {
          待確認出團: "#36A2EB", // 藍色
          已出團: "#4BC0C0", // 綠色
          取消出團: "#FF6384", // 紅色
        },
      },
      axis: {
        x: {
          type: "category",
          label: {
            text: "日期",
            position: "outer-center",
          },
        },
        y: {
          label: {
            text: "團數",
            position: "outer-middle",
          },
          padding: {
            bottom: 0,
          },
          tick: {
            values: [0, 3, 6, 9],
          },
        },
      },
      grid: {
        y: {
          show: true,
        },
      },
      legend: {
        position: "right",
      },
    });
  };

  // 生成折線圖
  const generateLineChart = (data) => {
    // 按日期和類別分組統計數量
    const dateStats = data.reduce((acc, product) => {
      const date = dayjs(product.date.start).format("YYYY-MM-DD");
      if (!acc[date]) {
        acc[date] = {};
        categoryTags.forEach((tag) => {
          if (tag !== "全部") {
            acc[date][tag] = 0;
          }
        });
      }

      if (product.category) {
        acc[date][product.category]++;
      }

      return acc;
    }, {});

    // 準備圖表數據
    const dates = Object.keys(dateStats).sort();
    const chartData = {
      dates: ["x", ...dates],
    };

    // 為每個類別創建數據數組
    categoryTags.forEach((tag) => {
      if (tag !== "全部") {
        chartData[tag] = [tag];
        dates.forEach((date) => {
          chartData[tag].push(dateStats[date][tag]);
        });
      }
    });

    // 轉換為c3所需的數據格式
    const columns = [chartData.dates];
    categoryTags.forEach((tag) => {
      if (tag !== "全部") {
        columns.push(chartData[tag]);
      }
    });

    // 生成圖表
    c3.generate({
      bindto: "#lineChart",
      data: {
        x: "x",
        columns: columns,
        type: "line",
      },
      axis: {
        x: {
          type: "timeseries",
          tick: {
            format: "%Y-%m-%d",
            count: 7,
          },
          label: {
            text: "日期",
            position: "outer-center",
          },
        },
        y: {
          label: {
            text: "活動數量",
            position: "outer-middle",
          },
          padding: {
            bottom: 0,
          },
          tick: {
            values: [0, 2, 4, 6, 8, 10],
          },
        },
      },
      grid: {
        y: {
          show: true,
        },
      },
      point: {
        show: true,
        r: 4,
      },
      legend: {
        position: "right",
      },
      tooltip: {
        format: {
          title: function (d) {
            return dayjs(d).format("YYYY-MM-DD");
          },
        },
      },
    });
  };

  const onSubmit = async (data) => {
    const { startDate, endDate, category, status } = data;
    const start = dayjs(startDate).format("YYYY-MM-DDT00:00");
    const end = dayjs(endDate).format("YYYY-MM-DDT23:59");

    // 篩選日期範圍內的數據
    let filtered = apiData.filter((product) => {
      const eventDate = dayjs(product.date.start);
      const eventDateStr = eventDate.format("YYYY-MM-DDT00:00");
      return eventDateStr >= start && eventDateStr <= end;
    });

    // 根據類別篩選
    if (category !== "0") {
      // "0" 代表 "全部"
      filtered = filtered.filter(
        (product) => product.category === categoryTags[Number(category)]
      );
    }

    // 根據出團狀況篩選
    if (status) {
      filtered = filtered.filter((product) => {
        switch (status) {
          case "已出團":
            return product.isFinish === 1 && product.is_enabled;
          case "待確認出團":
            return product.isFinish === 0 && product.is_enabled;
          case "取消出團":
            return !product.is_enabled;
          default:
            return true;
        }
      });
    }

    setFilteredData(filtered);
    generatePieChart(filtered);
    generateBarChart(filtered);
    generateLineChart(filtered);
  };

  // 初始化時生成圖表
  useEffect(() => {
    if (filteredData.length > 0) {
      generatePieChart(filteredData);
      generateBarChart(filteredData);
      generateLineChart(filteredData);
    }
  }, [filteredData]);

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="row align-items-center mb-4"
      >
        <div className="col-12 col-md-6 mb-3">
          <div className="input-group align-items-center">
            <span className="me-4 fs-b1 fw-semibold">日期</span>
            <input
              {...register("startDate", { required: true })}
              type="date"
              className="form-control rounded-end rounded-pill"
              placeholder="開始時間"
            />
            <span className="input-group-text">~</span>
            <input
              {...register("endDate", { required: true })}
              type="date"
              className="form-control rounded-start rounded-pill"
              placeholder="結束時間"
            />
          </div>
        </div>

        <div className="col-12 col-md-3 mb-3">
          <div className="d-flex flex-nowrap">
            <span
              style={{ whiteSpace: `nowrap` }}
              className="me-4 fs-b1 fw-semibold"
            >
              類別
            </span>
            <select {...register("category")} className="form-select w-100">
              {categoryTags.map((tag, index) => (
                <option key={index} value={index}>
                  {tag}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="col-12 col-md-3 mb-3">
          <div className="d-flex flex-nowrap">
            <span
              style={{ whiteSpace: `nowrap` }}
              className="me-4 fs-b1 fw-semibold"
            >
              出團情況
            </span>
            <select {...register("status")} className="form-select w-100">
              <option value="">全部</option>
              <option value="已出團">已出團</option>
              <option value="待確認出團">待確認出團</option>
              <option value="取消出團">取消出團</option>
            </select>
          </div>
        </div>

        <div className="col-12 text-end">
          <button type="submit" className="btn btn-primary">
            查詢
          </button>
        </div>
      </form>
      <div className="chart-container">
        <div className="row">
          <div className="col-12 col-md-6 mb-4">
            <div className="chart-wrapper">
              <h3 className="text-center mb-4">活動狀態分布</h3>
              <div id="pieChart"></div>
            </div>
          </div>
          <div className="col-12 col-md-6 mb-4">
            <div className="chart-wrapper">
              <h3 className="text-center mb-4">活動狀態趨勢</h3>
              <div id="barChart"></div>
            </div>
          </div>
          <div className="col-12">
            <div className="chart-wrapper">
              <h3 className="text-center mb-4">活動類別趨勢</h3>
              <div id="lineChart"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chart;
