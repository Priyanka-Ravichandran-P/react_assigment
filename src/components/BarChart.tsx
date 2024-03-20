import React from 'react';
import Highcharts from 'highcharts';
import { ProductType } from '../types/filterTypes';
import { ColumnChartProps } from '../types/ChartTypes';
import HighchartsReact from 'highcharts-react-official';

const ColumnChart: React.FC<ColumnChartProps> = ({ allProductsOfCategory }) => {

  const categories = allProductsOfCategory.map((product: ProductType) => product.title);
  const prices = allProductsOfCategory.map((product: ProductType) => product.price);
  const YAxisTitle = allProductsOfCategory[0]?.category || 'Category';
  const options: Highcharts.Options = {
    chart: {
      type: 'column',
    },
    title: {
      text: 'Products in selected category',
    },
    xAxis: {
      categories: categories,
    },
    yAxis: {
      title: {
        text: YAxisTitle,
      },
    },
    series: [
      {
        name: 'Data set (price)',
        data: prices,
      },
    ] as Highcharts.SeriesOptionsType[],
  };
  
  return (<div>
    <HighchartsReact highcharts={Highcharts} options={options} />
  </div>)
};

export default ColumnChart;
