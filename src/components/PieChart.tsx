// Import necessary libraries
import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { PieChartProps, PieChartInfoType } from '../types/ChartTypes';

const PieChart: React.FC<PieChartProps> = (props) => {
  const { allCategories } = props;
  const categories: PieChartInfoType[] = allCategories.map(category => { return { name: category, y: 1 } });

  const options = {
    chart: {
      type: 'pie',
    },
    title: {
      text: 'Category Pie Chart',
    },
    series: [{
      name: 'Categories',
      data: categories,
    }],
  };

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default PieChart;
