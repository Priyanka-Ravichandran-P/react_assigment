import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import SingleSelectDropDown from "./SingleSelectDropdown";
import CustomizedButton from "./Button";
import { ProductDashboardAllProduct, ProductType } from "../types/filterTypes";
import MultiSelectDropDown from "./MultiSelectDropdown";
import { useCategory } from "../hooks/useData";
import axios from "axios";

const Filters: React.FC<ProductDashboardAllProduct> = (props) => {
    const { setProductsOfSelectedCategory, setCategories, setPieChart, setSpinner } = props;
    const [category, setCategory] = useState<string>('');
    const [products, setProducts] = useState<string[]>([]);
    const [isBtnDisable, setBtnDisable] = useState<boolean>(true);
    const [categoryMenuItem] = useCategory([]);
    const [productMenuItem, setProductMenuItem] = useState<string[]>([]);
    const [currentSelectedCategoryProducts, setcurrentSelectedCategoryProducts] = useState<ProductType[]>([]);

    useEffect(() => {
        setCategories(categoryMenuItem as string[]);
    }, [categoryMenuItem]);

    const fetchProduct = (category: string) => {
        const _GET_PRODUCTS = 'https://dummyjson.com/products/category/';
        axios.get(`${_GET_PRODUCTS}${category}`)
            .then(response => {
                setcurrentSelectedCategoryProducts(response.data.products);
                let products = response.data.products.map((product: ProductType) => product.title);
                setProductMenuItem(products);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }
    const reset = () => {
        setCategory('');
        setProducts([]);
        setBtnDisable(true);
        setProductMenuItem([]);
        setProductsOfSelectedCategory([]);
        setPieChart(true);
    }

    const onChangeOfCategory = (value: string) => {
        setCategory(value);
        setProducts([]);
        fetchProduct(value)
        setBtnDisable(false)
    }

    const renderChart = () => {
        if (category && products.length === 0) {
            setProductsOfSelectedCategory(currentSelectedCategoryProducts);
        }
        if (products.length > 0) {
            let filteredProductArray = currentSelectedCategoryProducts.filter(product => products.includes(product.title));
            setProductsOfSelectedCategory(filteredProductArray);
        }
        setPieChart(false);
    }

    return (
        <div className="filter-container">
            <div>
                <div className="filter-header">
                    <Typography variant="h5">
                        Filters
                    </Typography>
                    <CustomizedButton btnClassName="" btnLabel="Clear" isDisabled={false} onBtnClick={() => reset()} />
                </div>
                <SingleSelectDropDown isDisabled={false} elementId="Category" inputLabel="Select Category"
                    value={category} label={category} menuItems={categoryMenuItem as string[]}
                    setValue={(value: string) => { onChangeOfCategory(value) }} />

                <MultiSelectDropDown isDisabled={category.length <= 0} elementId="Product" inputLabel="Select Product"
                    selectedValues={products} label="Product" menuItems={productMenuItem}
                    setSelectedValues={(value: string[]) => { setProducts(value) }} />
            </div>

            <CustomizedButton btnClassName="bottom-button" btnLabel="Run Report" isDisabled={isBtnDisable}
                onBtnClick={() => {
                    setSpinner(true);
                    renderChart();
                }} />
        </div>
    )
}

export default Filters;