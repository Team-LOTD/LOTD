import { useState } from "react";
import { useForm, useWatch } from "react-hook-form";

import "../css/SignUp.css";

function Check({ control, name }) {
    const asdf = useWatch({
        control,
        name: name,
    });

    const checkEmail = asdf.length >= 8 && asdf.length <= 20;

    const checkPassword =
        /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~\\/-])[a-zA-Z\d!@#$%^&*()_+{}[\]:;<>,.?~\\/-]{8,20}$/;

    switch (name) {
        case "email":
            if (asdf === "") {
                return <div>필수입력사항은 모두 입력해주세요.</div>;
            } else {
                return (
                    <div>
                        {name}, watch: {asdf}
                    </div>
                );
            }
        case "password":
            if (asdf === "") {
                return <div>필수입력사항은 모두 입력해주세요.</div>;
            } else {
                return (
                    <div>
                        {checkEmail ? (
                            <div>길이 통과</div>
                        ) : (
                            <div>길이 미통과</div>
                        )}
                        {checkPassword.test(asdf) ? (
                            <div>정규표현식 통과</div>
                        ) : (
                            <div>정규표현식 미통과</div>
                        )}
                    </div>
                );
            }
        case "nickname":
            if (asdf === "") {
                return <div>필수입력사항은 모두 입력해주세요.</div>;
            } else {
                return (
                    <div>
                        {name}, watch: {asdf}
                    </div>
                );
            }
        case "realname":
            if (asdf === "") {
                return <div>필수입력사항은 모두 입력해주세요.</div>;
            } else {
                return (
                    <div>
                        {name}, watch: {asdf}
                    </div>
                );
            }
        case "age":
            return (
                <div>
                    {name}, watch: {asdf}
                </div>
            );
        default:
            return null;
    }
}

function SignUp() {
    const [onFocusInput, setOnFocusInput] = useState("");

    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    // register pattern 정규표현식 이용해서 submit 컨트롤

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    type="email"
                    {...register("email", { required: true })}
                    placeholder="email"
                    autoComplete="email"
                    onFocus={(item) => setOnFocusInput(item.target.name)}
                />
                {onFocusInput && onFocusInput === "email" ? (
                    <Check control={control} name={onFocusInput} />
                ) : null}
                <input
                    type="password"
                    {...register("password", {
                        required: true,
                        pattern: {
                            value: /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~\\/-])[a-zA-Z\d!@#$%^&*()_+{}[\]:;<>,.?~\\/-]{8,20}$/,
                        },
                    })}
                    placeholder="password"
                    autoComplete="current-password"
                    onFocus={(item) => setOnFocusInput(item.target.name)}
                />
                {onFocusInput && onFocusInput === "password" ? (
                    <Check control={control} name={onFocusInput} />
                ) : null}
                {errors.password && <div>{errors.password.message}</div>}
                <input
                    type="text"
                    {...register("nickname", {
                        required: true,
                        minLength: {
                            value: 2,
                        },
                        maxLength: {
                            value: 12,
                        },
                    })}
                    placeholder="nickname"
                    autoComplete="nickname"
                    onFocus={(item) => setOnFocusInput(item.target.name)}
                />
                {onFocusInput && onFocusInput === "nickname" ? (
                    <Check control={control} name={onFocusInput} />
                ) : null}
                <input
                    type="text"
                    {...register("realname", {
                        required: true,
                        minLength: {
                            value: 2,
                        },
                    })}
                    placeholder="realname"
                    autoComplete="realname"
                    onFocus={(item) => setOnFocusInput(item.target.name)}
                />
                {onFocusInput && onFocusInput === "realname" ? (
                    <Check control={control} name={onFocusInput} />
                ) : null}
                <input
                    type="number"
                    {...register("age")}
                    placeholder="age"
                    autoComplete="age"
                    onFocus={(item) => setOnFocusInput(item.target.name)}
                    className="www"
                />
                {onFocusInput && onFocusInput === "age" ? (
                    <Check control={control} name={onFocusInput} />
                ) : null}
                <input type="submit" />
            </form>
        </div>
    );
}

export default SignUp;
