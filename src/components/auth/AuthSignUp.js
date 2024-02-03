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

const EmailFieldset = styled(SignUpFieldset)`
    /* height: 95px; */
`;

const PasswordFieldset = styled(SignUpFieldset)`
    /* height: 151px; */
`;

const NickNameFieldset = styled(SignUpFieldset)`
    /* height: 73px; */
`;

const AgeFieldset = styled(SignUpFieldset)`
    height: 73px;
`;

const PasswordInput = styled(SignUpInput)`
    width: 400px;
`;

const PasswordConfirmInput = styled(SignUpInput)`
    width: 400px;
`;

const AgeInput = styled(SignUpInput)`
    width: 400px;
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
                    <EmailFieldset>
                        <SignUpP>이메일</SignUpP>
                        <SignUpInput placeholder="이메일을 입력해주세요" />
                        <SignUpButton>중복 확인</SignUpButton>
                        <SignUpErrorMessage>
                            이미 가입된 이메일입니다.
                        </SignUpErrorMessage>
                    </EmailFieldset>
                    <PasswordFieldset>
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
                    </PasswordFieldset>
                    <NickNameFieldset>
                        <SignUpP>닉네임</SignUpP>
                        <SignUpInput placeholder="닉네임을 입력해주세요" />
                        <SignUpButton>중복 확인</SignUpButton>
                        <SignUpErrorMessage>
                            이미 사용중인 닉네임입니다.
                        </SignUpErrorMessage>
                    </NickNameFieldset>
                    <AgeFieldset>
                        <SignUpP>
                            나이<SignUpSpan> (선택)</SignUpSpan>
                        </SignUpP>
                        <AgeInput placeholder="나이를 입력해주세요" />
                    </AgeFieldset>
                    <SubmitButton>가입하기</SubmitButton>
                </SignUpForm>
            </SignUpWrapper>
        </>
    );
};

export default AuthSignUp;
