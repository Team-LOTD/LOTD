import styled from "styled-components";
import { useForm, useWatch } from "react-hook-form";

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
    const { register, handleSubmit, control, getValues, setValue } = useForm();

    const handleLoginSubmit = (data) => {
        console.log(data);
    };

    return (
        <>
            <LoginForm onSubmit={handleSubmit(handleLoginSubmit)}>
                <LoginTitle>로그인</LoginTitle>
                <LoginFieldset>
                    <LoginP>아이디</LoginP>
                    <EmailInput
                        type="text"
                        name="memberId"
                        {...register("memberId", {
                            required: true,
                            minLength: {
                                value: 4,
                            },
                            maxLength: {
                                value: 15,
                            },
                        })}
                        placeholder="아이디를 입력해주세요"
                        authcomplete="on"
                    />
                </LoginFieldset>
                <LoginFieldset>
                    <LoginP>비밀번호</LoginP>
                    <PasswordInput
                        type="password"
                        placeholder="비밀번호를 입력해주세요"
                    />
                    <LoginErrorMessage>
                        올바르지 않은 비밀번호 형식입니다.
                    </LoginErrorMessage>
                </LoginFieldset>
                <LoginSubmit type="submit">로그인</LoginSubmit>
            </LoginForm>
        </>
    );
};

export default AuthLoginForm;
