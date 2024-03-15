import { ProductType } from "./filterTypes";

export type ColumnChartProps = {
    allProductsOfCategory: ProductType[];
  }

  export type ProductChartOfSelectedCategory = {
    allProductsOfCategory: ProductType[],
    toRenderPieChart: boolean,
    categories: string[]
}

export type PieChartProps = {
    allCategories: string[]
}

export type PieChartInfoType = {
    name: string,
    y: number
}