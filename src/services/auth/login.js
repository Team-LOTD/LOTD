import Axios from "axios";

export const submitLogin = async (submitData) => {
    console.log(submitData);
    try {
        const response = await Axios.post("/api/login", submitData);
        return response.data;
    } catch (error) {
        console.log("Error submitLogin data", error);
        throw error;
    }
};
