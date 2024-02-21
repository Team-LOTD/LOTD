import Axios from "axios";

const jwtToken = JSON.parse(localStorage.getItem("jwt"));

export const searchUser = async () => {
    try {
        const response = await Axios.get("/api/members", {
            headers: {
                Authorization: `Bearer ${jwtToken.accessToken}`,
                "Authorization-refresh": `${jwtToken.refreshToken}`,
            },
            params: {
                id: jwtToken.id,
            },
        });
        console.log(response);
        return response.data;
    } catch (error) {
        console.log("Error searchUser data", error);
        throw error;
    }
};

export const updateUserInfo = async (updateDetail) => {
    try {
        const response = await Axios.put(
            `/api/members/${updateDetail}/update`,
            {
                data: {
                    email: "asdf@naver.com",
                },
                headers: {
                    Authorization: `Bearer ${jwtToken.accessToken}`,
                    "Authorization-refresh": `${jwtToken.refreshToken}`,
                },
                params: {
                    id: jwtToken.id,
                },
            }
        );
    } catch (error) {
        console.log("Error updateUser data", error);
        throw error;
    }
};

// export const changeNickname = (nickname) => {
//     try {
//         const response = Axios.put("/api/")
//     }
// }
