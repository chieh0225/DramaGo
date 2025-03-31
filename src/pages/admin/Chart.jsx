import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import axios from 'axios';
import c3 from 'c3';
import 'c3/c3.css';
import '../../assets/scss/pages/_chart.scss';

const Chart = () => {
  const [filteredData, setFilteredData] = useState([]);

  // 獲取 API 數據
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://ec-course-api.hexschool.io/v2/api/dramago/products');
        setFilteredData(response.data.products);
      } catch (error) {
        console.error('獲取數據失敗:', error);
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
      bindto: '#pieChart',
      data: {
        columns: chartData,
        type: 'pie',
      },
      pie: {
        label: {
          format: function (value) {
            return value + '個';
          },
        },
      },
    });
  };

  // 生成柱狀圖
  const generateBarChart = (data) => {
    // 按日期分組並統計不同狀態的數量
    const dateStats = data.reduce((acc, product) => {
      const date = dayjs(product.date.start).format('MM/DD');
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
      dates: ['x', ...dates],
      pending: ['待確認出團'],
      completed: ['已出團'],
      cancelled: ['取消出團'],
    };

    // 生成柱狀圖
    c3.generate({
      bindto: '#barChart',
      data: {
        x: 'x',
        columns: [chartData.dates, chartData.pending, chartData.completed, chartData.cancelled],
        type: 'bar',
      },
      axis: {
        x: {
          type: 'category',
        },
      },
    });
  };

  // 生成折線圖
  const generateLineChart = (data) => {
    // 按日期分組並統計不同狀態的數量
    const dateStats = data.reduce((acc, product) => {
      const date = dayjs(product.date.start).format('MM/DD');
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
      dates: ['x', ...dates],
      pending: ['待確認出團'],
      completed: ['已出團'],
      cancelled: ['取消出團'],
    };

    // 生成折線圖
    c3.generate({
      bindto: '#lineChart',
      data: {
        x: 'x',
        columns: [chartData.dates, chartData.pending, chartData.completed, chartData.cancelled],
        type: 'line',
      },
      axis: {
        x: {
          type: 'category',
        },
      },
    });
  };

  useEffect(() => {
    generatePieChart(filteredData);
    generateBarChart(filteredData);
    generateLineChart(filteredData);
  }, [filteredData]);

  return (
    <div>
      <div id="pieChart"></div>
      <div id="barChart"></div>
      <div id="lineChart"></div>
    </div>
  );
};

export default Chart;
