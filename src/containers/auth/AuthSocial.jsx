import { SocialBox } from "../../styles/components/auth/SocialBox";
import { SocialImg } from "../../styles/components/auth/SocialImg";

import {
    GoogleLogin,
    KakaoLogin,
    NaverLogin,
} from "../../services/auth/social";

export const SocialLoginKakao = (props) => {
    return (
        <>
            <SocialBox onClick={KakaoLogin}>
                <SocialImg
                    src={process.env.PUBLIC_URL + "/images/kakaotalk.png"}
                    alt="KakaotalkLogo"
                />
                {props.children}
            </SocialBox>
        </>
    );
};

export const SocialLoginNaver = (props) => {
    return (
        <>
            <SocialBox onClick={NaverLogin}>
                <SocialImg
                    src={process.env.PUBLIC_URL + "/images/naver.png"}
                    alt="NaverLogo"
                />
                {props.children}
            </SocialBox>
        </>
    );
};

export const SocialLoginGoogle = (props) => {
    return (
        <>
            <SocialBox onClick={GoogleLogin}>
                <SocialImg
                    src={process.env.PUBLIC_URL + "/images/google.png"}
                    alt="GoogleLogo"
                />
                {props.children}
            </SocialBox>
        </>
    );
};
