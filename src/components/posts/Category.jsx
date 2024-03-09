import Axios from "axios";
import { useEffect, useState } from "react";

const Category = () => {
    const [category, setCategory] = useState();
    useEffect(() => {
        async function loadCategoryData() {
            const response = await Axios.get("/api/categories");

            setCategory(response.data);
        }
    }, []);

    useEffect(() => {
        console.log(category);
    }, [category]);
    return null;
};

export default Category;
