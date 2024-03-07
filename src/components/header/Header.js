import { Link } from "react-router-dom";
import styled from "styled-components";
import { getJWTToken } from "../../utils/JWTToken";

import logoutUser from "../../services/header/logout";
import { useEffect } from "react";

const Container = styled.div`
    width: 100%;
    height: 56px;
    background-color: silver;
`;

function Header() {
    const jwt = getJWTToken();

    useEffect(() => {
        const date = new Date();

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
    }, []);

    return (
        <Container>
            <Link to={"/login"}>로그인</Link>
            {jwt !== null ? (
                <>
                    <button onClick={logoutUser}>로그아웃</button>
                    <Link to={`/members/${jwt.id}`}>마이페이지</Link>
                </>
            ) : null}
        </Container>
    );
}

export default Header;
