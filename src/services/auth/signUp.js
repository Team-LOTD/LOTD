import Axios from "axios";

export const submitSignUp = async (submitData) => {
    console.log(submitData);
    try {
        const response = await Axios.post("/api/signup", submitData);
        // 여기에 response 토큰 값 로컬 저장 코드 추가
        return response.data.status;
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
        const response = await Axios.get("/api/nickname/check", {
            params: {
                nickName: nickname,
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
