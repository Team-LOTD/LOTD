import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { sendKakaoAuthCode } from "../../services/auth/socialSignUp";

const KakaoRedirect = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const queryParmas = new URLSearchParams(location.search);

    const code = queryParmas.get("code");

    useEffect(() => {
        async function SendKakaoAuthCode() {
            const userInfo = await sendKakaoAuthCode(code);
            const sendUserInfo = {
                memberId: userInfo.kakaoMemberId,
                email: userInfo.email,
                socialType: userInfo.socialType,
            };
            navigate("/member/addinfo", { addInfo: sendUserInfo });
        }
        SendKakaoAuthCode();
    }, [code, navigate]);
};

export default KakaoRedirect;
