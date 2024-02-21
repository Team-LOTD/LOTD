import Axios from "axios";

export const submitLogin = async (submitData) => {
    console.log(submitData);
    try {
        const response = await Axios.post("/api/login", submitData);
        // 여기에 response 토큰 값 로컬 저장 코드 추가
        localStorage.setItem(
            "jwt",
            JSON.stringify([
                {
                    id: response.data.id,
                    accessToken: response.data.accessToken,
                    refreshToken: response.data.refreshToken,
                    accessTokenExpiresIn: response.data.accessTokenExpiresIn,
                    refreshTokenExpiresIn: response.data.refreshTokenExpiresIn,
                    socialType: response.data.socialType,
                },
            ])
        );
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
