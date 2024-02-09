import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";

function Mypage() {
    let { id } = useParams();

    useEffect(() => {
        Axios.get(`/members/${id}`).then((res) => {
            console.log(res.data);
        });
    }, [id]);

    console.log(id);
    return <div>asdf</div>;
}

export default Mypage;
