import { Link } from "react-router-dom";

import "../../css/Main.css";

function Main() {
    return (
        <div>
            <div className="test">asdfw</div>
            <Link to={"/posts"}>글쓰기</Link>
        </div>
    );
}

export default Main;
