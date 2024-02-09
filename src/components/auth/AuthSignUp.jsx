import { useForm, useWatch } from "react-hook-form";

import styled from "styled-components";

import { Wrapper as SignUpWrapper } from "../../styles/components/auth/Wrapper";
import { Form as SignUpForm } from "../../styles/components/auth/Form";
import { Title as SignUpTitle } from "../../styles/components/auth/Title";
import { Fieldset as SignUpFieldset } from "../../styles/components/auth/Fieldset";
import { Input as SignUpInput } from "../../styles/components/auth/Input";
import { Button as SignUpButton } from "../../styles/components/auth/Button";
import { ErrorMessage as SignUpErrorMessage } from "../../styles/components/auth/ErrorMessage";
import { Hint as SignUpHint } from "../../styles/components/auth/Hint";
import { P as SignUpP } from "../../styles/components/auth/P";
import { Border as SignUpBorder } from "../../styles/components/auth/Border";
import { WrapperSocial as SignUpWrapperSocial } from "../../styles/components/auth/WrapperSocial";
import { SocialBox as SignUpSocialBox } from "../../styles/components/auth/SocialBox";
import { SocialImg as SignUpSocialImg } from "../../styles/components/auth/SocialImg";
import { SocialText as SignUpSocialText } from "../../styles/components/auth/SocialText";

const PasswordInput = styled(SignUpInput)`
    width: 400px;
`;

const PasswordConfirmInput = styled(SignUpInput)`
    width: 400px;
`;

const AgeInput = styled(SignUpInput)`
    width: 400px;
    margin-bottom: 0px;
`;

const SubmitButton = styled(SignUpButton)`
    width: 400px;
    padding: 13px, 175px;
    margin: 0;
    text-align: center;
`;

const SignUpSpan = styled.span`
    font-family: Pretendard;
    font-size: 14px;
    font-weight: 700;
    line-height: 17px;
    letter-spacing: 0em;
    text-align: left;
    color: #cacaca;
`;

const PasswordErrorMessage = styled(SignUpErrorMessage)`
    margin-bottom: 8px;
`;

const PasswordConfirmErrorMessage = styled(SignUpErrorMessage)`
    margin-bottom: 8px;
`;

const AuthSignUp = () => {
    return (
        <>
            <SignUpWrapper>
                <SignUpForm>
                    <SignUpTitle>회원가입</SignUpTitle>
                    <SignUpFieldset>
                        <SignUpP>이메일</SignUpP>
                        <SignUpInput placeholder="이메일을 입력해주세요" />
                        <SignUpButton>중복 확인</SignUpButton>
                        <SignUpErrorMessage>
                            이미 가입된 이메일입니다.
                        </SignUpErrorMessage>
                    </SignUpFieldset>
                    <SignUpFieldset>
                        <SignUpP>비밀번호</SignUpP>
                        <PasswordInput placeholder="비밀번호를 입력해주세요" />
                        <PasswordErrorMessage>
                            올바르지 않은 비밀번호 형식입니다.
                        </PasswordErrorMessage>
                        <PasswordConfirmInput placeholder="비밀번호를 다시 입력해주세요" />
                        <PasswordConfirmErrorMessage>
                            비밀번호가 일치하지 않습니다.
                        </PasswordConfirmErrorMessage>
                        <SignUpHint>
                            영문 대소문자, 특수문자, 숫자 중 3가지 이상으로
                            조합하여 8~20자로 입력해주세요.
                        </SignUpHint>
                    </SignUpFieldset>
                    <SignUpFieldset>
                        <SignUpP>닉네임</SignUpP>
                        <SignUpInput placeholder="닉네임을 입력해주세요" />
                        <SignUpButton>중복 확인</SignUpButton>
                        <SignUpErrorMessage>
                            이미 사용중인 닉네임입니다.
                        </SignUpErrorMessage>
                    </SignUpFieldset>
                    <SignUpFieldset>
                        <SignUpP>
                            나이<SignUpSpan>&nbsp;(선택)</SignUpSpan>
                        </SignUpP>
                        <AgeInput placeholder="나이를 입력해주세요" />
                    </SignUpFieldset>
                    <SubmitButton>가입하기</SubmitButton>
                </SignUpForm>
                <SignUpBorder />
                <SignUpWrapperSocial>
                    <SignUpSocialBox>
                        <SignUpSocialImg
                            src={
                                process.env.PUBLIC_URL + "/images/kakaotalk.png"
                            }
                            alt="KakaotalkLogo"
                        />
                        <SignUpSocialText>카카오 회원가입</SignUpSocialText>
                    </SignUpSocialBox>
                    <SignUpSocialBox>
                        <SignUpSocialImg
                            src={process.env.PUBLIC_URL + "/images/naver.png"}
                            alt="NaverLogo"
                        />
                        <SignUpSocialText>네이버 회원가입</SignUpSocialText>
                    </SignUpSocialBox>
                    <SignUpSocialBox>
                        <SignUpSocialImg
                            src={process.env.PUBLIC_URL + "/images/google.png"}
                            alt="GoogleLogo"
                        />
                        <SignUpSocialText>구글 회원가입</SignUpSocialText>
                    </SignUpSocialBox>
                </SignUpWrapperSocial>
            </SignUpWrapper>
        </>
    );
};

export default AuthSignUp;
