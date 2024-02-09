import Axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const GoogleRedirect = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const queryParams = new URLSearchParams(location.search);

    const code = queryParams.get("code");
    const state = queryParams.get("state");

    console.log(code, state);

    return;
};

export default GoogleRedirect;
