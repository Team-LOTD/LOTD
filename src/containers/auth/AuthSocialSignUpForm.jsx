import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { useForm } from "react-hook-form";

import { Form as SocialSignUpForm } from "../../styles/components/auth/Form";
import { Fieldset as SocialSignUpFieldset } from "../../styles/components/auth/Fieldset";
import { P as SocialSignUpP } from "../../styles/components/auth/P";
import { Input as SocialSignUpInput } from "../../styles/components/auth/Input";
import { Button as SocialSignUpButton } from "../../styles/components/auth/Button";
import { ErrorMessage as SocialSignUpErrorMessage } from "../../styles/components/auth/ErrorMessage";
import { SuccessMessage as SocialSignUpSuccessMessage } from "../../styles/components/auth/SuccessMessage";
import { Hint as SocialSignUpHint } from "../../styles/components/auth/Hint";
import { checkNickname } from "../../services/auth/signUp";
import { useState } from "react";
import { signUpSocialUser } from "../../services/auth/socialSignUp";

import validationPatterns from "../../utils/validationPatterns";

const SubmitButton = styled(SocialSignUpButton)`
    width: 400px;
    padding: 13px, 175px;
    margin: 0;
    text-align: center;
`;

const AuthSocialSignUpForm = () => {
    const { addInfo, social } = useLocation().state;
    const { register, handleSubmit, getValues } = useForm();

    const [duplicateNickname, setDuplicateNickname] = useState("");
    const handleSignUpSubmit = async (data) => {
        if (duplicateNickname === "SUCCESS") {
            const socialMemberId = `${social}MemberId`;
            const submitData = {
                [socialMemberId]: addInfo.memberId,
                email: addInfo.email,
                nickName: data.nickname,
            };
            console.log(submitData);
            await signUpSocialUser(submitData, social);
        } else {
            alert("닉네임 중복 확인");
        }
    };

    const handleSignUpCheckNickname = async () => {
        const response = await checkNickname(getValues("nickname"));
        setDuplicateNickname(response);
    };

    return (
        <>
            <SocialSignUpForm onSubmit={handleSubmit(handleSignUpSubmit)}>
                <SocialSignUpFieldset>
                    <SocialSignUpP>닉네임</SocialSignUpP>
                    <SocialSignUpInput
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
                        style={{
                            borderColor:
                                duplicateNickname === "FAIL"
                                    ? "#ff5a5a"
                                    : "#d9d9d9",
                        }}
                    />
                    <SocialSignUpButton
                        type="button"
                        onClick={handleSignUpCheckNickname}
                    >
                        중복 확인
                    </SocialSignUpButton>
                    {duplicateNickname === "FAIL" ? (
                        <SocialSignUpErrorMessage>
                            이미 가입된 닉네임입니다.
                        </SocialSignUpErrorMessage>
                    ) : duplicateNickname === "SUCCESS" ? (
                        <SocialSignUpSuccessMessage>
                            사용 가능한 닉네임입니다.
                        </SocialSignUpSuccessMessage>
                    ) : null}
                    <SocialSignUpHint>
                        한글, 영문(대소문자), 숫자를 조합하여 2~16자로
                        입력해주세요.
                    </SocialSignUpHint>
                </SocialSignUpFieldset>
                <SubmitButton type="submit">가입하기</SubmitButton>
            </SocialSignUpForm>
        </>
    );
};

export default AuthSocialSignUpForm;
