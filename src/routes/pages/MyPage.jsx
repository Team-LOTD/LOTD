import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";

function Mypage() {
    const { id } = useParams();

    useEffect(() => {
        Axios.get("/api/members/update").then((res) => {
            console.log(res.data);
        });
    }, [id]);

    console.log(id);

    const handleChangeEmail = () => {
        Axios.put("/api/members/update/email", {
            id: 1,
            email: "awwww@naver.com",
        }).then((response) => console.log(response.data));
    };

    const handleChangeNickname = () => {
        Axios.put("/api/members/update/nickname", {
            id: 1,
            nickname: "ggwww",
        }).then((response) => console.log(response.data));
    };

    const handleChangeAge = () => {
        Axios.put("/api/members/update/age", {
            id: 1,
            age: 24,
        }).then((response) => console.log(response.data));
    };

    const handleChangePassword = () => {
        Axios.put("/api/members/update/password", {
            id: 1,
            currentPassword: "asdfwdfw1!",
            newPassword: "awwwwww1!",
            newPasswordConfirm: "awwwwww1!",
        }).then((response) => console.log(response.data));
    };

    return (
        <div>
            <button onClick={handleChangeEmail}>이메일</button>
            <button>비밀번호</button>
            <button>닉네임</button>
            <button>나이</button>
            <button>회원탈퇴</button>
        </div>
    );
}

export default Mypage;
