import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = ({ path, element }) => {
    const jwtToken = JSON.parse(localStorage.getItem("jwt"));
    const isAuthenticated = !!jwtToken;

    if (isAuthenticated === false) {
        alert("로그인 후 이용해주세요");
    }

    return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
