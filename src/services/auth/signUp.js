import Axios from "axios";

export const submitSignUp = async (submitData) => {
    console.log(submitData);
    try {
        const response = await Axios.post("/api/signUp", submitData);
        return response.data;
    } catch (error) {
        console.log("Error submitSignUp data", error);
        throw error;
    }
};

export const checkMemberId = async (memberId) => {
    try {
        const response = await Axios.get("/api/memberId/check", {
            params: {
                memberId: memberId,
            },
        });
        console.log(response.data);
        return true;
    } catch (error) {
        console.log("Error checkMemberId data", error);
        return false;
    }
};

export const checkNickname = async (nickname) => {
    try {
        const response = await Axios.get("/api/nickname/check", {
            params: {
                nickName: nickname,
            },
        });
        console.log(response.data);
        return true;
    } catch (error) {
        console.log("Error checkNickname data", error);
        return false;
    }
};
