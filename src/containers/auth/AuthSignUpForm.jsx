import styled from "styled-components";
import { useForm, useWatch } from "react-hook-form";

import { Form as SignUpForm } from "../../styles/components/auth/Form";
import { Fieldset as SignUpFieldset } from "../../styles/components/auth/Fieldset";
import { Input as SignUpInput } from "../../styles/components/auth/Input";
import { Button as SignUpButton } from "../../styles/components/auth/Button";
import { ErrorMessage as SignUpErrorMessage } from "../../styles/components/auth/ErrorMessage";
import { Hint as SignUpHint } from "../../styles/components/auth/Hint";
import { P as SignUpP } from "../../styles/components/auth/P";
import { SubSpan as SignUpSubSpan } from "../../styles/components/auth/SubSpan";

import {
    submitSignUp,
    checkMemberId,
    checkNickname,
} from "../../services/auth/signUp";
import { useEffect, useState } from "react";

import validationPatterns from "../../utils/validationPatterns";

const PasswordInput = styled(SignUpInput)`
    width: 400px;
`;

const PasswordConfirmInput = styled(SignUpInput)`
    margin-top: 8px;
    width: 400px;
`;

const AgeInput = styled(SignUpInput)`
    width: 400px;
    margin-bottom: 0px;
`;

const EmailInput = styled(SignUpInput)`
    width: 400px;
`;

const SubmitButton = styled(SignUpButton)`
    width: 400px;
    padding: 13px, 175px;
    margin: 0;
    text-align: center;
`;

const AuthSignUpForm = () => {
    const { register, handleSubmit, watch, control, getValues, setValue } =
        useForm();

    const [duplicateNickname, setDuplicateNickname] = useState(false);
    const [duplicateMemberId, setDuplicateMemberId] = useState(false);
    const [checkData, setCheckData] = useState("");
    const [onFocusInput, setOnFocusInput] = useState("");
    const [regexPassword, setRegexPassword] = useState(false);
    const [regexPasswordConfirm, setRegexPasswordConfirm] = useState(false);
    const [inputValue, setInputValue] = useState("");

    const handleSignUpSubmit = async (data) => {
        const submitData = {
            memberId: data.memberId,
            email: data.email,
            // memberIdChecked: true,
            memberIdChecked: duplicateMemberId,
            password: data.password,
            confirmPassword: data.passwordConfirm,
            nickName: data.nickname,
            // nickNameChecked: true,
            nickNameChecked: duplicateNickname,
            age: parseInt(data.age),
        };
        const result = await submitSignUp(submitData);
        console.log(result);
    };

    const handleSignUpCheckMemberId = async () => {
        setCheckData("memberId");
        const result = await checkMemberId(getValues("memberId"));

        setDuplicateMemberId(result);
    };

    const handleSignUpCheckNickname = async () => {
        setCheckData("nickname");
        const result = await checkNickname(getValues("nickname"));

        setDuplicateNickname(result);
    };

    const inputData = useWatch({
        control,
        name: onFocusInput,
    });

    useEffect(() => {
        console.log(inputData);
        switch (onFocusInput) {
            case "password":
                validationPatterns.passwordRegex.test(inputData)
                    ? setRegexPassword(true)
                    : setRegexPassword(false);
                break;
            case "passwordConfirm":
                getValues("password") === watch("passwordConfirm")
                    ? setRegexPasswordConfirm(true)
                    : setRegexPasswordConfirm(false);
                break;
            default:
                return;
        }
    }, [inputData, onFocusInput]);

    return (
        <>
            <SignUpForm onSubmit={handleSubmit(handleSignUpSubmit)}>
                <SignUpFieldset>
                    <SignUpP>아이디</SignUpP>
                    <SignUpInput
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
                        invalid={duplicateMemberId ? false : true}
                    />
                    <SignUpButton
                        type="button"
                        onClick={handleSignUpCheckMemberId}
                    >
                        중복 확인
                    </SignUpButton>
                    <input
                        type="hidden"
                        {...register("memberIdAvailable")}
                        value={duplicateMemberId}
                    />
                    {checkData !== "memberId" ? null : duplicateMemberId ? (
                        <SignUpErrorMessage invalid={duplicateMemberId}>
                            사용 가능한 아이디입니다.
                        </SignUpErrorMessage>
                    ) : (
                        <SignUpErrorMessage invalid={duplicateMemberId}>
                            이미 가입된 아이디입니다.
                        </SignUpErrorMessage>
                    )}
                </SignUpFieldset>
                <SignUpFieldset>
                    <SignUpP>비밀번호</SignUpP>
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
                        invalid={!regexPassword}
                    />
                    {onFocusInput !==
                    "password" ? null : regexPassword ? null : (
                        <SignUpErrorMessage invalid={regexPassword}>
                            올바르지 않은 비밀번호 형식입니다.
                        </SignUpErrorMessage>
                    )}

                    <PasswordConfirmInput
                        type="password"
                        {...register("passwordConfirm", {
                            required: true,
                            minLength: 8,
                            maxLength: 20,
                        })}
                        placeholder="비밀번호를 다시 입력해주세요"
                        onFocus={(item) => setOnFocusInput(item.target.name)}
                        invalid={!regexPasswordConfirm}
                    />
                    {onFocusInput !==
                    "passwordConfirm" ? null : regexPasswordConfirm ? null : (
                        <SignUpErrorMessage invalid={regexPasswordConfirm}>
                            비밀번호가 일치하지 않습니다.
                        </SignUpErrorMessage>
                    )}

                    <SignUpHint>
                        영문 대소문자, 특수문자, 숫자 중 3가지 이상으로 조합하여
                        8~20자로 입력해주세요.
                    </SignUpHint>
                </SignUpFieldset>
                <SignUpFieldset>
                    <SignUpP>닉네임</SignUpP>
                    <SignUpInput
                        type="text"
                        {...register("nickname", {
                            required: true,
                            minLength: 2,
                            maxLength: 16,
                            pattern: {
                                value: validationPatterns.nicknameRegex,
                            },
                        })}
                        placeholder="닉네임을 입력해주세요"
                        invalid={duplicateNickname}
                    />
                    <SignUpButton
                        type="button"
                        onClick={handleSignUpCheckNickname}
                    >
                        중복 확인
                    </SignUpButton>
                    <input
                        type="hidden"
                        {...register("nicknameAvailable")}
                        value={duplicateNickname}
                    />
                    {checkData !== "nickname" ? null : duplicateNickname ? (
                        <SignUpErrorMessage invalid={duplicateNickname}>
                            사용 가능한 닉네임입니다.
                        </SignUpErrorMessage>
                    ) : (
                        <SignUpErrorMessage invalid={duplicateNickname}>
                            이미 사용중인 닉네임입니다.
                        </SignUpErrorMessage>
                    )}

                    <SignUpHint>
                        한글, 영문(대소문자), 숫자를 조합하여 2~16자로
                        입력해주세요.
                    </SignUpHint>
                </SignUpFieldset>
                <SignUpFieldset>
                    <SignUpP>
                        이메일<SignUpSubSpan>&nbsp;(선택)</SignUpSubSpan>
                    </SignUpP>
                    <EmailInput
                        type="email"
                        {...register("email", { minLength: 6, maxLength: 35 })}
                        placeholder="이메일을 입력해주세요"
                    />
                </SignUpFieldset>
                <SignUpFieldset>
                    <SignUpP>
                        나이<SignUpSubSpan>&nbsp;(선택)</SignUpSubSpan>
                    </SignUpP>
                    <AgeInput
                        type="number"
                        {...register("age", {
                            minLength: 1,
                            pattern: { value: validationPatterns.ageRegex },
                        })}
                        placeholder="나이를 입력해주세요"
                    />
                </SignUpFieldset>
                <SubmitButton type="submit">가입하기</SubmitButton>
            </SignUpForm>
        </>
    );
};

export default AuthSignUpForm;
