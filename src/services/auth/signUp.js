import Axios from "axios";

export const submitSignUp = async (submitData) => {
    console.log(submitData);
    try {
        await Axios.post("/api/signup", submitData);
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

export const checkMemberId = async (memberId) => {
    try {
        const response = await Axios.get("/api/memberid/check", {
            params: {
                memberId: memberId,
            },
        });
        return response.data.status;
    } catch (error) {
        if (error.response) {
            console.log("Error data", error.response.data.message);
            if (error.response.status === 400) {
                return error.response.data.status;
            }
        } else if (error.request) {
            console.error("Request error: ", error.request);
        } else {
            console.error("Error: ", error.message);
        }
        throw error;
    }
};

export const checkNickname = async (nickname) => {
    try {
        const response = await Axios.get("/api/nicknames/check", {
            params: {
                nickname: nickname,
            },
        });
        return response.data.status;
    } catch (error) {
        console.log("Error checkNickname");
        if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
            if (error.response.status === 400) {
                return error.response.data.status;
            }
        }
        throw error;
    }
};
