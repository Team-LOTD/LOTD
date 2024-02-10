import styled from "styled-components";

import { Form as LoginForm } from "../../styles/components/auth/Form";
import { Title as LoginTitle } from "../../styles/components/auth/Title";
import { Fieldset as LoginFieldset } from "../../styles/components/auth/Fieldset";
import { P as LoginP } from "../../styles/components/auth/P";
import { Input as LoginInput } from "../../styles/components/auth/Input";
import { Button as LoginButton } from "../../styles/components/auth/Button";
import { ErrorMessage as LoginErrorMessage } from "../../styles/components/auth/ErrorMessage";

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

const AuthLoginForm = () => {
    return (
        <>
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
        </>
    );
};

export default AuthLoginForm;
