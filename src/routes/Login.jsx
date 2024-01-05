import { Link } from "react-router-dom";

function Login() {
    return (
        <div>
            <form>
                <label>ID :</label>
                <input type="text" />
                <label>PW :</label>
                <input type="password" />
                <button type="submit">로그인</button>
            </form>
            <Link to={"/signup"}>회원가입</Link>
        </div>
    );
}

export default Login;
