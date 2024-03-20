import { useEffect, useState } from "react";
import axios from "axios";

const _GET_CATEGORIES = 'https://dummyjson.com/products/categories';

export const useCategory = (defaultValue: string[], setCategories: (categories: string[]) => void) => {
    const [categoryMenuItem, setCategoryMenuItem] = useState(defaultValue);
    const fetchCategory = () => {
        axios.get(_GET_CATEGORIES)
            .then(response => {
                setCategoryMenuItem(response.data);
                setCategories(response.data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }
    useEffect(() => { fetchCategory() }, []);
    return [categoryMenuItem];
}