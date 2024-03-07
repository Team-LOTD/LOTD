import Axios from "axios";

const jwtToken = JSON.parse(localStorage.getItem("jwt"));

const logoutUser = async () => {
    if (!jwtToken) {
        alert("잘못된 접근입니다. 로그인 후 이용해주세요");
        window.location.href = "/login";
    }
    try {
        await Axios.get("/api/logout", {
            headers: {
                Authorization: `Bearer ${jwtToken.accessToken}`,
                "Authorization-refresh": `Bearer ${jwtToken.refreshToken}`,
            },
        });
        localStorage.removeItem("jwt");
        window.location.replace("/");
    } catch (error) {
        console.log("Error logoutUser");
        if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        }
    }
};

export default logoutUser;
