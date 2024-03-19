import React, { useEffect } from 'react';
import Highcharts from 'highcharts';
import { ProductType } from '../types/filterTypes';
import { ColumnChartProps } from '../types/ChartTypes';

const ColumnChart: React.FC<ColumnChartProps> = ({ allProductsOfCategory }) => {

    const categories = allProductsOfCategory.map((product : ProductType) => product.title);
    const prices = allProductsOfCategory.map((product : ProductType) => product.price);
    const YAxisTitle = allProductsOfCategory[0]?.category || 'Category';
const options: Highcharts.Options = {
      chart: {
        type: 'column',
      },
      title: {
        text: 'Products in selected Category',
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

  useEffect(() => {
    // Create the column bar chart
    Highcharts.chart('columnChartContainer', options);
  }, [categories, prices]);

  return <div id="columnChartContainer" style={{ width: '100%', height: '400px' }}></div>;
};

export default ColumnChart;
