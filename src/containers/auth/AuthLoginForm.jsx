import styled from "styled-components";
import { useForm, useWatch } from "react-hook-form";

import { Form as LoginForm } from "../../styles/components/auth/Form";
import { Title as LoginTitle } from "../../styles/components/auth/Title";
import { Fieldset as LoginFieldset } from "../../styles/components/auth/Fieldset";
import { P as LoginP } from "../../styles/components/auth/P";
import { Input as LoginInput } from "../../styles/components/auth/Input";
import { Button as LoginButton } from "../../styles/components/auth/Button";
import { ErrorMessage as LoginErrorMessage } from "../../styles/components/auth/ErrorMessage";
import validationPatterns from "../../utils/validationPatterns";

import { submitLogin } from "../../services/auth/login";
import { useEffect, useState } from "react";

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
    const { register, handleSubmit, control } = useForm();

    const [onFocusInput, setOnFocusInput] = useState("");
    const [regexPassword, setRegexPassword] = useState(false);

    const handleLoginSubmit = async (data) => {
        const submitData = {
            memberId: data.memberId,
            password: data.password,
        };
        const result = await submitLogin(submitData);
        console.log(result);
    };

    const inputData = useWatch({
        control,
        name: onFocusInput,
    });

    useEffect(() => {
        if (onFocusInput === "password") {
            validationPatterns.passwordRegex.test(inputData)
                ? setRegexPassword(true)
                : setRegexPassword(false);
        }
    }, [inputData, onFocusInput]);

    return (
        <>
            <LoginForm onSubmit={handleSubmit(handleLoginSubmit)}>
                <LoginTitle>로그인</LoginTitle>
                <LoginFieldset>
                    <LoginP>아이디</LoginP>
                    <EmailInput
                        type="text"
                        {...register("memberId", {
                            required: true,
                            minLength: 4,
                            maxLength: 15,
                            pattern: {
                                value: validationPatterns.memberIdRegex,
                            },
                        })}
                        placeholder="아이디를 입력해주세요"
                        onFocus={(item) => setOnFocusInput(item.target.name)}
                        authcomplete="on"
                    />
                </LoginFieldset>
                <LoginFieldset>
                    <LoginP>비밀번호</LoginP>
                    <PasswordInput
                        type="password"
                        {...register("password", {
                            required: true,
                            minLength: 8,
                            maxLength: 20,
                            pattern: {
                                value: validationPatterns.passwordRegex,
                            },
                        })}
                        placeholder="비밀번호를 입력해주세요"
                        onFocus={(item) => setOnFocusInput(item.target.name)}
                        autocomplete="on"
                        style={{
                            borderColor:
                                onFocusInput === "password"
                                    ? regexPassword
                                        ? "#d9d9d9"
                                        : "#ff5a5a"
                                    : "#d9d9d9",
                        }}
                    />
                    {onFocusInput !==
                    "password" ? null : regexPassword ? null : (
                        <LoginErrorMessage>
                            올바르지 않은 비밀번호 형식입니다.
                        </LoginErrorMessage>
                    )}
                </LoginFieldset>
                <LoginSubmit type="submit">로그인</LoginSubmit>
            </LoginForm>
        </>
    );
};

export default AuthLoginForm;
