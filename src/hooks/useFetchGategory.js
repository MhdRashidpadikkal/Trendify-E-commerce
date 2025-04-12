import axios from "axios";
import { useEffect, useState } from "react";


export const useFeatchGategory = () => {
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