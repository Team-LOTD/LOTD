import Axios from "axios";

import { setJWTToken } from "../../utils/JWTToken";

export const submitLogin = async (submitData) => {
    try {
        const response = await Axios.post("/api/login", submitData);
        setJWTToken(response.data);
        window.location.replace("/");
    } catch (error) {
        if (error.response) {
            console.log("Error data", error.response.data.message);
            if (error.response.status === 400) {
                return error.response.data.message;
            }
        } else if (error.request) {
            console.error("Request error: ", error.request);
        } else {
            console.error("Error: ", error.message);
        }
        throw error;
    }
};
