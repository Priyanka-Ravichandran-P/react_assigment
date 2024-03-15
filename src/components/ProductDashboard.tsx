import React, { useState } from "react";
import Filters from "./Filters";
import Chart from "./Chart";
import { ProductType } from "../types/filterTypes";
import { CircularProgress } from "@mui/material";

const ProductDashboard: React.FC = () => {
  const [renderPieChart, setRenderPieChart] = useState<boolean>(true);
  const [isLoaderSet, setLoader] = useState<boolean>(false);
  const [allCategories, setAllCategories] = useState<string[]>([]);
  const [allproductsOfSelectedCategory, setAllProductsOfSelectedCategory] = useState<ProductType[]>([]);

  return (
    <div className="container">
      <div className="first-half ">
        <Filters setCategories={(categories: string[]) => { setAllCategories(categories) }}
          setPieChart={(flag: boolean) => setRenderPieChart(flag)}
          setProductsOfSelectedCategory={(products: ProductType[]) => { setAllProductsOfSelectedCategory(products) }}
          setSpinner={(flag: boolean) => {
            setLoader(flag);
            if (flag) {
              setTimeout(() => {
                setLoader(false); // Set loading to false after 3 seconds
              }, 3000);
            }
          }} />
      </div>
      <div className="second-half">
        {
          isLoaderSet ? (
            <div className="loader"><CircularProgress /></div>
          ) :
            <Chart toRenderPieChart={renderPieChart}
              categories={allCategories} allProductsOfCategory={allproductsOfSelectedCategory} />

        }
      </div>


    </div>
  )
}

export default ProductDashboard;