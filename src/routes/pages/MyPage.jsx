import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
import { searchUser } from "../../services/mypage/update";

function Mypage() {
    // const { id } = useParams();

    // useEffect(() => {
    //     Axios.get("/api/members", {
    //         params: {
    //             id: id,
    //         },
    //         headers: {
    //             Authorization:
    //                 "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJBQ0NFU1MiLCJpYXQiOjE3MDgwODI5NjMsImV4cCI6MTcwODA4NjU2MywibWVtYmVySWQiOiJhZHNmdyJ9.pmNJNa4FPshcnNeCg1rs7Wzgw1tEJSmT0FS_x7gYvGQ6RMl_drD-QuBs19S-DfJPCyapl7eZNGt_KuEo2rFPNw",
    //             "Authorization-refresh":
    //                 "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJSRUZSRVNIIiwiaWF0IjoxNzA0OTcyMDMwLCJleHAiOjE3MDYxODE2MzAsImVtYWlsIjoiamF5am95MDUxQG5hdmVyLmNvbSJ9.-E1PR3zxzGI2zQbURC-hAblgr-",
    //         },
    //     }).then((res) => {
    //         console.log(res.data);
    //     });
    // }, [id]);

    // console.log(id);

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

    const handleSearchUser = () => {
        searchUser(1);
    };

    const handleLogout = () => {
        Axios.get("/api/logout", {
            headers: {
                Authorization:
                    "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJBQ0NFU1MiLCJpYXQiOjE3MDgwODI5NjMsImV4cCI6MTcwODA4NjU2MywibWVtYmVySWQiOiJhZHNmdyJ9.pmNJNa4FPshcnNeCg1rs7Wzgw1tEJSmT0FS_x7gYvGQ6RMl_drD-QuBs19S-DfJPCyapl7eZNGt_KuEo2rFPNw",
                "Authorization-refresh":
                    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJSRUZSRVNIIiwiaWF0IjoxNzA0OTcyMDMwLCJleHAiOjE3MDYxODE2MzAsImVtYWlsIjoiamF5am95MDUxQG5hdmVyLmNvbSJ9.-E1PR3zxzGI2zQbURC-hAblgr-",
            },
        }).then((response) => console.log(response));
    };

    return (
        <div>
            <button onClick={handleSearchUser}>마이페이지</button>
            <button onClick={handleChangeEmail}>이메일</button>
            <button>비밀번호</button>
            <button>닉네임</button>
            <button>나이</button>
            <button>회원탈퇴</button>
            <button onClick={handleLogout}>로그아웃</button>
        </div>
    );
}

export default Mypage;
