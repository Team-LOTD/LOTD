import { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { ProfileBox as UpdateProfileBox } from "../../styles/components/mypage/ProfileBox";
import { ProfileImg as UpdateProfileImg } from "../../styles/components/mypage/ProfileImg";
import { ProfileEditBtn as UpdateProfileEditBtn } from "../../styles/components/mypage/ProfileEditBtn";
import { ProfileUpdateBox as UpdateUserBox } from "../../styles/components/mypage/ProfileUpdateBox";
import { ProfileSpan as UpdateUserSpan } from "../../styles/components/mypage/ProfileSpan";
import { ProfileDiv as UpdateUserDiv } from "../../styles/components/mypage/ProfileDiv";
import { ProfileHr as UpdateUserHr } from "../../styles/components/mypage/ProfileHr";
import { ProfileBlur as UpdateProfileBlur } from "../../styles/components/mypage/Blur";
import { PopUpBox } from "../../styles/components/mypage/PopUpBox";

import { searchUser } from "../../services/mypage/update";
import { PopUpTitle } from "../../styles/components/mypage/PopUpTitle";
import { PopUpSubTitle } from "../../styles/components/mypage/PopUpSubTitle";

const UpdateProfileEditImg = styled.img`
    width: 17.25px;
    height: 18px;
    padding: 2.25px, 2.16px, 2.25px, 2.16px;
`;

const ArrorwRight = styled.img`
    width: 18px;
    height: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 8px;
`;

const PopUpItem = ({ item }) => {
    console.log(item);
    const PopUp = {
        email: (
            <>
                <PopUpTitle>이메일 변경</PopUpTitle>
                <PopUpSubTitle>이메일</PopUpSubTitle>
            </>
        ),
        password: <ArrorwRight></ArrorwRight>,
        nickname: <ArrorwRight></ArrorwRight>,
        delete: <ArrorwRight></ArrorwRight>,
    };
    console.log(PopUp.email);
    console.log(PopUp.item);
    return PopUp.item;
};

const UpdateUser = () => {
    const [blur, setBlur] = useState("none");
    const [clickItem, setClickItem] = useState("");

    const navigate = useNavigate();

    const handleUpdateUserClick = (item) => {
        setBlur("block");
        setClickItem(item);
    };

    const handleClickBlur = () => {
        setBlur("none");
    };

    useEffect(() => {
        console.log(clickItem);
    }, [clickItem]);

    useEffect(() => {
        // const checkJWTLocalstorage = JSON.parse(localStorage.getItem("jwt"));
        // if (checkJWTLocalstorage === null) {
        //     navigate("/login");
        // } else {
        //     async function searchUser() {
        //         const result = await searchUser(checkJWTLocalstorage);
        //         setUserInfo(result);
        //     }
        //     searchUser(checkJWTLocalstorage);
        // }
    }, [navigate]);

    return (
        <>
            <UpdateProfileBlur
                style={{ display: blur }}
                onClick={handleClickBlur}
            />
            <PopUpBox style={{ display: blur }}>
                <PopUpItem item={clickItem}></PopUpItem>
            </PopUpBox>
            <UpdateProfileBox>
                <UpdateProfileImg
                    src={process.env.PUBLIC_URL + "/images/profile-sample.jpg"}
                    alt="ProfileImg"
                />
                <UpdateProfileEditBtn>
                    <UpdateProfileEditImg
                        src={
                            process.env.PUBLIC_URL +
                            "/images/profile-edit-img.png"
                        }
                        alt="profile-edit-img"
                    />
                </UpdateProfileEditBtn>
            </UpdateProfileBox>
            <UpdateUserBox>
                <UpdateUserSpan>아이디</UpdateUserSpan>
                <UpdateUserSpan>abc123</UpdateUserSpan>
            </UpdateUserBox>
            <UpdateUserHr />
            <UpdateUserBox>
                <UpdateUserSpan>이메일</UpdateUserSpan>
                <UpdateUserDiv onClick={() => handleUpdateUserClick("email")}>
                    <UpdateUserSpan>abc123@gmail.com</UpdateUserSpan>
                    <ArrorwRight
                        src={process.env.PUBLIC_URL + "/images/arrow-right.png"}
                        alt="userInfoEditBtn"
                    />
                </UpdateUserDiv>
            </UpdateUserBox>
            <UpdateUserHr />
            <UpdateUserBox>
                <UpdateUserSpan>비밀번호</UpdateUserSpan>
                <UpdateUserDiv
                    onClick={() => handleUpdateUserClick("password")}
                >
                    <UpdateUserSpan>*********</UpdateUserSpan>
                    <ArrorwRight
                        src={process.env.PUBLIC_URL + "/images/arrow-right.png"}
                        alt="userInfoEditBtn"
                    />
                </UpdateUserDiv>
            </UpdateUserBox>
            <UpdateUserHr />
            <UpdateUserBox>
                <UpdateUserSpan>닉네임</UpdateUserSpan>
                <UpdateUserDiv
                    onClick={() => handleUpdateUserClick("nickname")}
                >
                    <UpdateUserSpan>abc123</UpdateUserSpan>
                    <ArrorwRight
                        src={process.env.PUBLIC_URL + "/images/arrow-right.png"}
                        alt="userInfoEditBtn"
                    />
                </UpdateUserDiv>
            </UpdateUserBox>
            <UpdateUserHr />
            <UpdateUserBox>
                <UpdateUserSpan>회원 탈퇴</UpdateUserSpan>
                <UpdateUserDiv
                    style={{ width: "80px", justifyContent: "right" }}
                    onClick={() => handleUpdateUserClick("delete")}
                >
                    <ArrorwRight
                        src={process.env.PUBLIC_URL + "/images/arrow-right.png"}
                        alt="userInfoEditBtn"
                    />
                </UpdateUserDiv>
            </UpdateUserBox>
        </>
    );
};

export default UpdateUser;
