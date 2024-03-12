import { useEffect, useState } from "react";
import axios from "axios";

export const useCategory  = (defaultValue : string[]) => {
    const [categoryMenuItem, setCategoryMenuItem] = useState(defaultValue);
    const fetchCategory = () => {
        axios.get('https://dummyjson.com/products/categories')
            .then(response => {
                setCategoryMenuItem(response.data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }
    useEffect(() => {
        fetchCategory();
    }, []);

    return [categoryMenuItem];
}