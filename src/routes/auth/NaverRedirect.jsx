import Axios from "axios";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const NaverRedirect = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const queryParmas = new URLSearchParams(location.search);

    const code = queryParmas.get("code");
    // const state = queryParmas.get("state");

    useEffect(() => {
        async function SendNaverAuthCode() {
            try {
                const response = await Axios.get("/api/oauth/naver/login", {
                    params: {
                        code: code,
                    },
                });
                console.log(response.data);
            } catch (error) {
                console.log("Error sendNaverAuthCode response", error);
                throw error;
            }
        }
        SendNaverAuthCode();
    }, [code]);
};

export default NaverRedirect;
