import Axios from "axios";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const KakaoRedirect = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const queryParmas = new URLSearchParams(location.search);

    const code = queryParmas.get("code");
    //    const state = queryParmas.get("state");

    useEffect(() => {
        async function AA() {
            console.log("aa");
            try {
                const response = await Axios.get("/api/oauth/kakao/login", {
                    params: {
                        code: code,
                    },
                });
                console.log(response.data);
                return response.data;
            } catch (error) {
                console.log("Error sendKakaoAuthData response", error);
                throw error;
            }
        }
        AA();
    }, []);
};

export default KakaoRedirect;
