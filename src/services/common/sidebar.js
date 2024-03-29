import Axios from "axios";

const jwtToken = JSON.parse(localStorage.getItem("jwt"));

export const searchCategories = async () => {
    try {
        const response = await Axios.get("/api/categories");
        return response.data.categoryList;
    } catch (error) {
        console.log("Error getCategories");
        if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        }
    }
};
