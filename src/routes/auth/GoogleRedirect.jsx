import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { sendGoogleAuthCode } from "../../services/auth/socialSignUp";

const GoogleRedirect = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const queryParams = new URLSearchParams(location.search);

    const code = queryParams.get("code");

    useEffect(() => {
        async function SendGoogleAuthCode() {
            const userInfo = await sendGoogleAuthCode(code);

            if (userInfo === "onExists") {
                window.location.replace("/");
            } else {
                const sendUserInfo = {
                    memberId: userInfo.googleMemberId,
                    email: userInfo.email,
                    socialType: userInfo.socialType,
                };
                navigate("/members/addinfo", {
                    state: {
                        addInfo: sendUserInfo,
                        social: "google",
                    },
                });
            }
        }
        SendGoogleAuthCode();
    }, [code, navigate]);
};

export default GoogleRedirect;
