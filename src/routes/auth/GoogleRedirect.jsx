import Axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const GoogleRedirect = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const queryParams = new URLSearchParams(location.search);

    const code = queryParams.get("code");
    const state = queryParams.get("state");

    Axios.post("/api/oauth/kakao/login", {
        code: code,
        state: state,
    }).then((res) => console.log(res));

    return;
};

export default GoogleRedirect;
