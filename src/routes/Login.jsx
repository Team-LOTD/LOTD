import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Axios from "axios";

import AuthLogin from "../components/auth/AuthLogin";

function Login() {
    // const {
    //     register,
    //     handleSubmit,
    //     formState: { errors },
    // } = useForm();

    // const navigate = useNavigate();

    // const onSubmit = (data) => {
    //     console.log(data);

    //     Axios.post(`${process.env.REACT_APP_SERVER_URL}/login`, {
    //         email: data.email,
    //         password: data.password,
    //     })
    //         .then((res) => {
    //             // if (res.status === 200) {
    //             //     let userId = res.data.id;
    //             //     let accessToken = res.headers["authorization"];
    //             //     let refreshToken = res.headers["authorization-refresh"];
    //             //     console.log(userId);
    //             //     console.log("access token :", accessToken);
    //             //     console.log("refresh token : ", refreshToken);
    //             //     localStorage.setItem("id", userId);
    //             //     localStorage.setItem("access", accessToken);
    //             //     localStorage.setItem("refresh", refreshToken);
    //             // }
    //             console.log(res);
    //         })
    //         .then(() => {
    //             navigate("/");
    //         });
    // };

    return (
        <>
            <AuthLogin></AuthLogin>
        </>
        // <div>
        //     <form onSubmit={handleSubmit(onSubmit)}>
        //         <input
        //             type="email"
        //             {...register("email", {
        //                 required: {
        //                     value: true,
        //                     message: "아이디를 입력해주세요.",
        //                 },
        //             })}
        //             placeholder="email"
        //             autoComplete="email"
        //         />
        //         <p>{errors.email?.message}</p>
        //         <input
        //             type="password"
        //             {...register("password", {
        //                 required: {
        //                     value: true,
        //                     message: "비밀번호를 입력해주세요.",
        //                 },
        //             })}
        //             placeholder="password"
        //             autoComplete="password"
        //         />
        //         <p>{errors.password?.message}</p>
        //         <input type="submit" value="로그인" />
        //     </form>
        //     <Link to={"/signup"}>회원가입</Link>
        // </div>
    );
}

export default Login;
