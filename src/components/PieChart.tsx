// Import necessary libraries
import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { PieChartProps, PieChartInfoType } from '../types/filterTypes';

const PieChart: React.FC<PieChartProps> = (props) => {
  const { allCategories } = props;
  const [pieChartData, setPieChartData] = useState<PieChartInfoType[]>([{ name: "", y: 1 }]);


  useEffect(() => {
    const categories: PieChartInfoType[] = allCategories.map(category => { return { name: category, y: 1 } });
    setPieChartData(categories);
  }, [allCategories]);

  const options = {
    chart: {
      type: 'pie',
    },
    title: {
      text: 'Category Pie Chart',
    },
    series: [{
      name: 'Categories',
      data: pieChartData,
    }],
  };

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default PieChart;
