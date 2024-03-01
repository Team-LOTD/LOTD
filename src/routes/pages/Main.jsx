import Axios from "axios";
import { useEffect } from "react";
import "../../css/Main.css";

import { getJWTToken } from "../../utils/JWTToken";

function Main() {
    const date = new Date();

    useEffect(() => {
        async function RememberMe() {
            const jwt = await getJWTToken();
            if (jwt !== null) {
                if (date.getTime() > jwt.accessTokenExpiresIn) {
                    localStorage.removeItem("jwt");
                } else {
                    // 여기다가 service 폴더에서 구현한 자동로그인 로직 load
                    // const response = await Axios.get("/api/asdf", {
                    //     accessToken: jwt.accessToken,
                    //     refreshToken: jwt.refreshToken,
                    // });
                    // console.log(response);
                }
            }
        }
        RememberMe();
    }, [date]);
    return (
        <div>
            <div className="test">asdfw</div>
        </div>
    );
}

export default Main;
