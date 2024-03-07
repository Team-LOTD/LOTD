import Axios from "axios";

const jwtToken = JSON.parse(localStorage.getItem("jwt"));

export const savePosts = async (submitData) => {
    try {
        const response = await Axios.post(
            "/api/posts",
            { ...submitData, member_id: jwtToken.id },
            {
                headers: {
                    Authorization: `Bearer ${jwtToken.accessToken}`,
                    "Authorization-refresh": `Bearer ${jwtToken.refreshToken}`,
                },
            }
        );
        return response;
    } catch (error) {
        console.log("Error savePosts");
        if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        }
    }
};

export const searchPosts = async (post_id) => {
    try {
        const response = await Axios.get("/api/posts", {
            params: {
                post_id: post_id,
            },
            headers: {
                Authorization: `Bearer ${jwtToken.accessToken}`,
                "Authorization-refresh": `Bearer ${jwtToken.refreshToken}`,
            },
        });
        return response.data;
    } catch (error) {
        console.log("Error searchPosts Data");
        if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        }
    }
};
