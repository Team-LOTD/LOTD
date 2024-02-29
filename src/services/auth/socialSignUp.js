import Axios from "axios";

import { setJWTToken } from "../../utils/JWTToken";

export const sendGoogleAuthCode = async (code) => {
    try {
        const response = await Axios.get("/api/oauth/google/login", {
            params: {
                code: code,
            },
        });
        return response.data;
    } catch (error) {
        console.log("Error sendGoogleAuthCode response");
        if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        }
        window.location.replace("/login");
    }
};

export const sendNaverAuthCode = async (code) => {
    try {
        const response = await Axios.get("/api/oauth/naver/login", {
            params: {
                code: code,
            },
        });
        return response.data;
    } catch (error) {
        console.log("Error sendNaverAuthCode response");
        if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        }
        window.location.replace("/login");
    }
};

export const sendKakaoAuthCode = async (code) => {
    try {
        const response = await Axios.get("/api/oauth/kakao/login", {
            params: {
                code: code,
            },
        });
        return response.data;
    } catch (error) {
        console.log("Error sendKakaoAuthCode response");
        if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        }
        window.location.replace("/login");
    }
};

export const signUpSocialUser = async (userInfo) => {
    try {
        const response = Axios.post("/api/oauth/google/nickname", userInfo);
        setJWTToken(response.data);
        window.location.replace("/");
    } catch (error) {
        console.log("Error sendReturnGoogleUserInfo response");
        if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        }
        window.location.replace("/login");
    }
};
