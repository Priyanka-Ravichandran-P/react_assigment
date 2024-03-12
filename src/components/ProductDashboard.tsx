import React, { useState } from "react";
import Filters from "./Filters";
import Chart from "./Chart";
import { ProductType } from "../types/filterTypes";

const ProductDashboard: React.FC = () => {
  const [allCategories, setAllCategories] = useState<string[]>([]);
  const [allproductsOfSelectedCategory, setAllProductsOfSelectedCategory] = useState<ProductType[]>([]);
  const [renderPieChart, setRenderPieChart] = useState<boolean>(true);

  return (
    <div className="container">
      <div className="first-half ">
        <Filters setCategories={(categories: string[]) => { setAllCategories(categories) }} setPieChart={(flag: boolean) => setRenderPieChart(flag)}
          setProductsOfSelectedCategory={(products: ProductType[]) => { setAllProductsOfSelectedCategory(products) }} />
      </div>
      <div className="second-half">
        <Chart toRenderPieChart={renderPieChart} categories={allCategories} allProductsOfCategory={allproductsOfSelectedCategory} />
      </div>
    </div>
  )
}

export default ProductDashboard;