import Axios from "axios";
import { useEffect } from "react";
import "../../css/Main.css";

import { getJWTToken } from "../../utils/setJWTToken";

function Main() {
    const date = new Date();

    useEffect(() => {
        async function RememberMe() {
            const jwt = await getJWTToken();
            if (jwt !== null) {
                if (date.getTime() > jwt.accessTokenExpiresIn) {
                    // localStorage.removeItem("jwt");
                } else {
                    const response = await Axios.get("/api/asdf", {
                        accessToken: jwt.accessToken,
                        refreshToken: jwt.refreshToken,
                    });
                    console.log(response);
                }
            }
        }
        RememberMe();
    }, []);
    return (
        <div>
            <div className="test">asdfw</div>
        </div>
    );
}

export default Main;
