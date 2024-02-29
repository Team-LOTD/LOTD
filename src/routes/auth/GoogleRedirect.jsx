import Axios from "axios";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { setJWTToken } from "../../utils/setJWTToken";

const GoogleRedirect = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const queryParams = new URLSearchParams(location.search);

    const code = queryParams.get("code");
    // const state = queryParams.get("state");

    useEffect(() => {
        async function SendGoogleAuthCode() {
            try {
                const response = await Axios.get("/api/oauth/google/login", {
                    params: {
                        code: code,
                    },
                });
                console.log(response.data);
                const sendUserInfo = {
                    googleMemberId: response.data.googleMemberId,
                    email: response.data.email,
                    nickName: "testGoogle",
                };
                console.log(sendUserInfo);

                try {
                    const sendResponse = await Axios.post(
                        "/api/oauth/google/nickname",
                        sendUserInfo
                    );
                    console.log(sendResponse.data);
                    setJWTToken(sendResponse.data);
                } catch (error) {
                    console.log(
                        "Error sendReturnGoogleUserInfo response",
                        error
                    );
                    throw error;
                }
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
