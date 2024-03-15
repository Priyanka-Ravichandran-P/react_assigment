import { useEffect, useState } from "react";
import axios from "axios";

const _GET_CATEGORIES = 'https://dummyjson.com/products/categories';

export const useCategory = (defaultValue: string[]) => {
    const [categoryMenuItem, setCategoryMenuItem] = useState(defaultValue);
    useEffect(()=>{fetchCategory()},[])
    const fetchCategory = () => {
        axios.get(_GET_CATEGORIES)
            .then(response => {
                setCategoryMenuItem(response.data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }    
    return [categoryMenuItem];
}