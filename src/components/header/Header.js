import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Header() {
    const [userId, setUserId] = useState("");

    useEffect(() => {
        setUserId(localStorage.getItem("id"));
    }, []);

    return (
        <div>
            <Link to={"/login"}>로그인</Link>
            <button>로그아웃</button>
            <Link to={`/members/${userId}`}>마이페이지</Link>
        </div>
    );
}

export default Header;
