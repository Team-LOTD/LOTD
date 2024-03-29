import Axios from "axios";

const jwtToken = JSON.parse(localStorage.getItem("jwt"));

export const increaseHearts = async (data) => {
    try {
        await Axios.post("/api/hearts", null, {
            params: {
                memberId: data.memberId,
                postId: data.postId,
            },
            headers: {
                Authorization: `Bearer ${jwtToken.accessToken}`,
                "Authorization-refresh": `Bearer ${jwtToken.refreshToken}`,
            },
        });
        return true;
    } catch (error) {
        console.log("Error increaseHearts");
        if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        }
        return false;
    }
};

export const decreaseHearts = async (data) => {
    try {
        await Axios.delete("/api/hearts", {
            params: {
                memberId: data.memberId,
                postId: data.postId,
            },
            headers: {
                Authorization: `Bearer ${jwtToken.accessToken}`,
                "Authorization-refresh": `Bearer ${jwtToken.refreshToken}`,
            },
        });
        return true;
    } catch (error) {
        console.log("Error decreaseHearts");
        if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        }
        return false;
    }
};
