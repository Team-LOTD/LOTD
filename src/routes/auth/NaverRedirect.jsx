import Axios from "axios";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { setJWTToken } from "../../utils/setJWTToken";

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

                const sendUserInfo = {
                    kakaoMemberId: response.data.naverMemberId,
                    email: response.data.email,
                    nickName: "testNaver",
                };
                console.log(sendUserInfo);

                try {
                    const sendResponse = await Axios.post(
                        "/api/oauth/naver/nickname",
                        sendUserInfo
                    );
                    console.log(sendResponse.data);
                    setJWTToken(sendResponse.data);
                } catch (error) {
                    console.log(
                        "Error sendReturnNaverUserInfo response",
                        error
                    );
                    throw error;
                }

                // return response.data;
            } catch (error) {
                console.log("Error sendNaverAuthCode response", error);
                throw error;
            }
        }
        SendNaverAuthCode();
    }, [code]);
};

export default NaverRedirect;
