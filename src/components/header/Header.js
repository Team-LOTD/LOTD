import { Link } from "react-router-dom";

function Header() {
    return (
        <div>
            <Link to={"/login"}>로그인</Link>
            <button>로그아웃</button>
            <Link to={"/members/12"}>마이페이지</Link>
        </div>
    );
}

export default Header;
