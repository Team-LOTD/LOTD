import Axios from "axios";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { setJWTToken } from "../../utils/setJWTToken";

const KakaoRedirect = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const queryParmas = new URLSearchParams(location.search);

    const code = queryParmas.get("code");

    useEffect(() => {
        async function SendKakaoAuthCode() {
            try {
                const response = await Axios.get("/api/oauth/kakao/login", {
                    params: {
                        code: code,
                    },
                });
                console.log(response.data);
                const sendUserInfo = {
                    kakaoMemberId: response.data.kakaoMemberId,
                    email: response.data.email,
                    nickName: "testKakao",
                };
                console.log(sendUserInfo);

                try {
                    const sendResponse = await Axios.post(
                        "/api/oauth/kakao/nickname",
                        sendUserInfo
                    );
                    console.log(sendResponse.data);
                    setJWTToken(sendResponse.data);
                } catch (error) {
                    console.log(
                        "Error sendReturnKakaoUserInfo response",
                        error
                    );
                    throw error;
                }
                return response.data;
            } catch (error) {
                console.log("Error sendKakaoAuthCode response", error);
                throw error;
            }
        }
        SendKakaoAuthCode();
    }, [code]);
};

export default KakaoRedirect;
