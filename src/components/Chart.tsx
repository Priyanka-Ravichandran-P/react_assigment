import React from 'react';
import PieChart from './PieChart';
import ColumnChart from './BarChart';
import { ProductChartOfSelectedCategory } from '../types/ChartTypes';

const Chart: React.FC<ProductChartOfSelectedCategory> = (props) => {
    const { allProductsOfCategory, toRenderPieChart, categories } = props;

    return (
        <div>
            {toRenderPieChart ? <PieChart allCategories = {categories}/> : <ColumnChart allProductsOfCategory={allProductsOfCategory} />}
        </div>
    );
}

export default Chart;