import styled from "styled-components";
import { useForm } from "react-hook-form";
import Axios from "axios";

import { Form as SignUpForm } from "../../styles/components/auth/Form";
import { Fieldset as SignUpFieldset } from "../../styles/components/auth/Fieldset";
import { Input as SignUpInput } from "../../styles/components/auth/Input";
import { Button as SignUpButton } from "../../styles/components/auth/Button";
import { ErrorMessage as SignUpErrorMessage } from "../../styles/components/auth/ErrorMessage";
import { Hint as SignUpHint } from "../../styles/components/auth/Hint";
import { P as SignUpP } from "../../styles/components/auth/P";
import { SubSpan as SignUpSubSpan } from "../../styles/components/auth/SubSpan";

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

const EmailInput = styled(SignUpInput)`
    width: 400px;
`;

const SubmitButton = styled(SignUpButton)`
    width: 400px;
    padding: 13px, 175px;
    margin: 0;
    text-align: center;
`;

const PasswordErrorMessage = styled(SignUpErrorMessage)`
    margin-bottom: 8px;
`;

const PasswordConfirmErrorMessage = styled(SignUpErrorMessage)`
    margin-bottom: 8px;
`;

const AuthSignUpForm = () => {
    const { register, handleSubmit, control, getValues, setValue } = useForm();

    const handleSignUpSubmit = (data) => {
        Axios.post(`/api/signup`, {
            memberId: data.memberId,
            email: data.email,
            emailChecked: data.emailAvailable,
            password: data.password,
            confirmPassword: data.passwordConfirm,
            nickName: data.nickname,
            nickNameChecked: data.nicknameAvailable,
            age: data.age,
        }).then((response) => console.log(response.data));
    };

    // const handleSignUpCheckEmail = (data) => {
    //     Axios.get(``)
    // }

    // const handleSignUpCheckNickname = (data) => {
    //     Axios.get(``)
    // }

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
                        })}
                        placeholder="아이디를 입력해주세요"
                    />
                    <SignUpButton>중복 확인</SignUpButton>
                    <input
                        type="hidden"
                        {...register("emailAvailable")}
                        value={true}
                    />
                    <SignUpErrorMessage>
                        이미 가입된 아이디입니다.
                    </SignUpErrorMessage>
                </SignUpFieldset>
                <SignUpFieldset>
                    <SignUpP>비밀번호</SignUpP>
                    <PasswordInput
                        type="password"
                        {...register("password", {
                            required: true,
                            minLength: 8,
                            maxLength: 20,
                        })}
                        placeholder="비밀번호를 입력해주세요"
                    />
                    <PasswordErrorMessage>
                        올바르지 않은 비밀번호 형식입니다.
                    </PasswordErrorMessage>
                    <PasswordConfirmInput
                        type="password"
                        {...register("passwordConfirm", {
                            required: true,
                            minLength: 8,
                            maxLength: 20,
                        })}
                        placeholder="비밀번호를 다시 입력해주세요"
                    />
                    <PasswordConfirmErrorMessage>
                        비밀번호가 일치하지 않습니다.
                    </PasswordConfirmErrorMessage>
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
                        })}
                        placeholder="닉네임을 입력해주세요"
                    />
                    <SignUpButton>중복 확인</SignUpButton>
                    <input
                        type="hidden"
                        {...register("nicknameAvailable")}
                        value={true}
                    />
                    <SignUpErrorMessage>
                        이미 사용중인 닉네임입니다.
                    </SignUpErrorMessage>
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
                        {...register("age", { minLength: 2 })}
                        placeholder="나이를 입력해주세요"
                    />
                </SignUpFieldset>
                <SubmitButton type="submit">가입하기</SubmitButton>
            </SignUpForm>
        </>
    );
};

export default AuthSignUpForm;
