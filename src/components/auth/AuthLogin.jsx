import { useForm, useWatch } from "react-hook-form";
import { Link } from "react-router-dom";

import styled from "styled-components";

import { Wrapper as LoginWrapper } from "../../styles/components/auth/Wrapper";
import { Form as LoginForm } from "../../styles/components/auth/Form";
import { Title as LoginTitle } from "../../styles/components/auth/Title";
import { Fieldset as LoginFieldset } from "../../styles/components/auth/Fieldset";
import { P as LoginP } from "../../styles/components/auth/P";
import { Input as LoginInput } from "../../styles/components/auth/Input";
import { ErrorMessage as LoginErrorMessage } from "../../styles/components/auth/ErrorMessage";
import { Button as LoginButton } from "../../styles/components/auth/Button";
import { Border as LoginBorder } from "../../styles/components/auth/Border";
import { WrapperSocial as LoginWrapperSocial } from "../../styles/components/auth/WrapperSocial";
import { SocialBox as LoginSocialBox } from "../../styles/components/auth/SocialBox";
import { SocialImg as LoginSocialImg } from "../../styles/components/auth/SocialImg";
import { SocialText as LoginSocialText } from "../../styles/components/auth/SocialText";
import { MemberManagement as LoginMemberManagement } from "../../styles/components/auth/MemberManagement";
import { ManagementText as LoginMemberManagementText } from "../../styles/components/auth/ManagementText";

import {
    KakaoLogin,
    NaverLogin,
    GoogleLogin,
} from "../../containers/authSocial";

const EmailInput = styled(LoginInput)`
    width: 400px;
`;

const PasswordInput = styled(LoginInput)`
    width: 400px;
`;

const LoginSubmit = styled(LoginButton)`
    width: 400px;
    padding: 13px, 175px;
    margin: 0;
    text-align: center;
`;

const BorderLine = styled.hr`
    width: 10px;
    height: 2px;
    transform: rotate(90deg);
`;

const AuthLogin = () => {
    return (
        <>
            <LoginWrapper>
                <LoginForm>
                    <LoginTitle>로그인</LoginTitle>
                    <LoginFieldset>
                        <LoginP>아이디</LoginP>
                        <EmailInput type="text" />
                    </LoginFieldset>
                    <LoginFieldset>
                        <LoginP>비밀번호</LoginP>
                        <PasswordInput type="password" />
                        <LoginErrorMessage>
                            올바르지 않은 비밀번호 형식입니다.
                        </LoginErrorMessage>
                    </LoginFieldset>
                    <LoginSubmit>로그인</LoginSubmit>
                </LoginForm>
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
                    <LoginSocialBox onClick={KakaoLogin}>
                        <LoginSocialImg
                            src={
                                process.env.PUBLIC_URL + "/images/kakaotalk.png"
                            }
                            alt="KakaotalkLogo"
                        />
                        <LoginSocialText>카카오 로그인</LoginSocialText>
                    </LoginSocialBox>
                    <LoginSocialBox onClick={NaverLogin}>
                        <LoginSocialImg
                            src={process.env.PUBLIC_URL + "/images/naver.png"}
                            alt="NaverLogo"
                        />
                        <LoginSocialText>네이버 로그인</LoginSocialText>
                    </LoginSocialBox>
                    <LoginSocialBox onClick={GoogleLogin}>
                        <LoginSocialImg
                            src={process.env.PUBLIC_URL + "/images/google.png"}
                            alt="GoogleLogo"
                        />
                        <LoginSocialText>구글 로그인</LoginSocialText>
                    </LoginSocialBox>
                </LoginWrapperSocial>
            </LoginWrapper>
        </>
    );
};

export default AuthLogin;
