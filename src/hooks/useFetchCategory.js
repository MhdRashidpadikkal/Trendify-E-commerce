import axios from "axios";
import { useEffect, useState } from "react";


export const useFetchCategory = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const fetchCategory = async () => {
            try {
                const response = await axios('https://dummyjson.com/products/category-list')
                setCategories(response.data);
            }
            catch (err) {
                console.error("Error fetching categories:", err);
            }
            finally {
                setLoading(false);
            }
        };

        fetchCategory()
    }, [])

    return {categories, loading}
}   


export const handleFilterState = (e, filterState) => {
    const { value, checked } = e.target;

    if (checked) {
        filterState((prev) => [...prev, value]);
    } else {
        filterState((prev) => prev.filter((cat) => cat !== value));
    }
}
