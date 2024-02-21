import Axios from "axios";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const GoogleRedirect = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const queryParams = new URLSearchParams(location.search);

    const code = queryParams.get("code");
    // const state = queryParams.get("state");

    useEffect(() => {
        async function SendGoogleAuthCode() {
            console.log("aa");
            try {
                const response = await Axios.get("/api/oauth/google/login", {
                    params: {
                        code: code,
                    },
                });
                console.log(response.data);
                return response.data;
            } catch (error) {
                console.log("Error sendGoogleAuthCode response", error);
                throw error;
            }
        }
        SendGoogleAuthCode();
    }, [code]);
};

export default GoogleRedirect;
