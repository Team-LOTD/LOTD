import { useForm, useWatch } from "react-hook-form";
import { Link } from "react-router-dom";

import styled from "styled-components";

import { Wrapper as LoginWrapper } from "../../styles/components/auth/Wrapper";
import { Border as LoginBorder } from "../../styles/components/auth/Border";
import { WrapperSocial as LoginWrapperSocial } from "../../styles/components/auth/WrapperSocial";
import { SocialText as LoginSocialText } from "../../styles/components/auth/SocialText";
import { MemberManagement as LoginMemberManagement } from "../../styles/components/auth/MemberManagement";
import { ManagementText as LoginMemberManagementText } from "../../styles/components/auth/ManagementText";

import AuthLoginForm from "../../containers/auth/AuthLoginForm";

import {
    SocialLoginGoogle,
    SocialLoginKakao,
    SocialLoginNaver,
} from "../../containers/auth/AuthSocial";

const BorderLine = styled.hr`
    width: 10px;
    height: 2px;
    transform: rotate(90deg);
`;

const AuthLogin = () => {
    return (
        <>
            <LoginWrapper>
                <AuthLoginForm />
                <LoginMemberManagement>
                    <LoginMemberManagementText>
                        이메일 찾기
                    </LoginMemberManagementText>
                    <BorderLine />
                    <LoginMemberManagementText>
                        비밀번호 찾기
                    </LoginMemberManagementText>
                    <BorderLine />
                    <LoginMemberManagementText>
                        <Link to={"/signup"} style={{ color: "#797979" }}>
                            회원가입
                        </Link>
                    </LoginMemberManagementText>
                </LoginMemberManagement>
                <LoginBorder />
                <LoginWrapperSocial>
                    <SocialLoginKakao>
                        <LoginSocialText>카카오 로그인</LoginSocialText>
                    </SocialLoginKakao>
                    <SocialLoginNaver>
                        <LoginSocialText>네이버 로그인</LoginSocialText>
                    </SocialLoginNaver>
                    <SocialLoginGoogle>
                        <LoginSocialText>구글 로그인</LoginSocialText>
                    </SocialLoginGoogle>
                </LoginWrapperSocial>
            </LoginWrapper>
        </>
    );
};

export default AuthLogin;
