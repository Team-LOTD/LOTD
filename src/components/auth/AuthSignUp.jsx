import { Wrapper as SignUpWrapper } from "../../styles/components/auth/Wrapper";
import { Title as SignUpTitle } from "../../styles/components/auth/Title";

import { Border as SignUpBorder } from "../../styles/components/auth/Border";
import { WrapperSocial as SignUpWrapperSocial } from "../../styles/components/auth/WrapperSocial";
import { SocialText as SignUpSocialText } from "../../styles/components/auth/SocialText";

import {
    SocialLoginKakao,
    SocialLoginNaver,
    SocialLoginGoogle,
} from "../../containers/auth/AuthSocial";

import AuthSignUpForm from "../../containers/auth/AuthSignUpForm";

const AuthSignUp = () => {
    return (
        <>
            <SignUpWrapper>
                <SignUpTitle>회원가입</SignUpTitle>
                <AuthSignUpForm />
                <SignUpBorder />
                <SignUpWrapperSocial>
                    <SocialLoginKakao>
                        <SignUpSocialText>카카오 회원가입</SignUpSocialText>
                    </SocialLoginKakao>
                    <SocialLoginNaver>
                        <SignUpSocialText>네이버 회원가입</SignUpSocialText>
                    </SocialLoginNaver>
                    <SocialLoginGoogle>
                        <SignUpSocialText>구글 회원가입</SignUpSocialText>
                    </SocialLoginGoogle>
                </SignUpWrapperSocial>
            </SignUpWrapper>
        </>
    );
};

export default AuthSignUp;
