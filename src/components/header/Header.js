import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 56px;
    background-color: silver;
`;

function Header() {
    const [userId, setUserId] = useState("");

    useEffect(() => {
        setUserId(localStorage.getItem("id"));
    }, []);

    return (
        <Container>
            <Link to={"/login"}>로그인</Link>
            <button>로그아웃</button>
            <Link to={`/members/update/${userId}`}>마이페이지</Link>
        </Container>
    );
}

export default Header;
