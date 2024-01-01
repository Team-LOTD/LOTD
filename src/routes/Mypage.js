import { useParams } from "react-router-dom";

function Mypage() {
    let { id } = useParams();

    console.log(id);
    return <div>asdf</div>;
}

export default Mypage;
