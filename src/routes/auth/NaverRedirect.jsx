import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { sendNaverAuthCode } from "../../services/auth/socialSignUp";

const NaverRedirect = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const queryParmas = new URLSearchParams(location.search);

    const code = queryParmas.get("code");

    useEffect(() => {
        async function SendNaverAuthCode() {
            const userInfo = await sendNaverAuthCode(code);
            const sendUserInfo = {
                memberId: userInfo.naverMemberId,
                email: userInfo.email,
                socialType: userInfo.socialType,
            };
            navigate("/member/addinfo", { addInfo: sendUserInfo });
        }
        SendNaverAuthCode();
    }, [code]);
};

export default NaverRedirect;
