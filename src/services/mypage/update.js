import Axios from "axios";

const jwtToken = JSON.parse(localStorage.getItem("jwt"));

export const searchUser = async () => {
    if (!jwtToken) {
        alert("잘못된 접근입니다. 로그인 후 이용해주세요");
        window.location.href = "/login";
    }
    try {
        const response = await Axios.get("/api/members", {
            headers: {
                Authorization: `Bearer ${jwtToken.accessToken}`,
                "Authorization-refresh": `Bearer ${jwtToken.refreshToken}`,
            },
            params: {
                id: jwtToken.id,
            },
        });
        return response.data.data;
    } catch (error) {
        console.log("Error searchUser data");
        if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        }
        // window.location.replace("/login");
        throw error;
    }
};

export const updateEmail = async (email) => {
    console.log(email);
    try {
        await Axios.put(
            "/api/members/email/update",
            { email: email },
            {
                headers: {
                    Authorization: `Bearer ${jwtToken.accessToken}`,
                    "Authorization-refresh": `Bearer ${jwtToken.refreshToken}`,
                },
                params: {
                    id: jwtToken.id,
                },
            }
        );
        window.location.replace(`/members/${jwtToken.id}`);
    } catch (error) {
        console.log("Error updateEmail");
        if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        }
    }
};

export const updateNickname = async (nickname) => {
    try {
        await Axios.put(
            "/api/members/nickname/update",
            { nickName: nickname },
            {
                headers: {
                    Authorization: `Bearer ${jwtToken.accessToken}`,
                    "Authorization-refresh": `Bearer ${jwtToken.refreshToken}`,
                },
                params: {
                    id: jwtToken.id,
                },
            }
        );
        window.location.replace(`/members/${jwtToken.id}`);
    } catch (error) {
        console.log("Error updateNickname");
        if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        }
    }
};

export const updatePassword = async (password) => {
    try {
        console.log(password);
        await Axios.put(
            "/api/members/password/change",
            {
                asIsPassword: password.asIsPassword,
                toBePassword: password.toBePassword,
                confirmToBePassword: password.confirmToBePassword,
            },
            {
                headers: {
                    Authorization: `Bearer ${jwtToken.accessToken}`,
                    "Authorization-refresh": `Bearer ${jwtToken.refreshToken}`,
                },
                params: {
                    id: jwtToken.id,
                },
            }
        );
        window.location.replace(`/members/${jwtToken.id}`);
    } catch (error) {
        console.log("Error updatePassword");
        if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        }
    }
};

export const deleteUser = async (password) => {
    try {
        await Axios.delete("/api/members/delete", {
            headers: {
                Authorization: `Bearer ${jwtToken.accessToken}`,
                "Authorization-refresh": `Bearer ${jwtToken.refreshToken}`,
            },
            params: {
                id: jwtToken.id,
            },
            data: {
                password: password,
            },
        });
        localStorage.removeItem("jwt");
        window.location.replace("/");
    } catch (error) {
        console.log("Error DeletePassword");
        if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        }
    }
};

export const deleteSocialUser = async () => {
    try {
        await Axios.delete("/api/members/social", {
            headers: {
                Authorization: `Bearer ${jwtToken.accessToken}`,
                "Authorization-refresh": `Bearer ${jwtToken.refreshToken}`,
            },
            params: {
                id: jwtToken.id,
            },
        });
        localStorage.removeItem("jwt");
        window.location.replace("/");
    } catch (error) {
        console.log("Error DeletePassword");
        if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        }
    }
};
