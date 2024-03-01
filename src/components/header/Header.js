import { Link } from "react-router-dom";
import styled from "styled-components";
import { getJWTToken } from "../../utils/JWTToken";

const Container = styled.div`
    width: 100%;
    height: 56px;
    background-color: silver;
`;

function Header() {
    const jwt = getJWTToken();

    console.log(jwt);

    return (
        <Container>
            <Link to={"/login"}>로그인</Link>
            <button onClick={() => localStorage.removeItem("jwt")}>
                로그아웃
            </button>
            {jwt ? <Link to={`/members/${jwt.id}`}>마이페이지</Link> : null}
        </Container>
    );
}

export default Header;
