import { useEffect, useRef, useState } from "react";
import { Link, Outlet } from "react-router-dom";

import { getJWTToken } from "../../utils/JWTToken";
import logoutUser from "../../services/header/logout";
import useDetechClose from "../../hooks/useDetechClose";

import Container from "../../styles/components/Header/Container";
import NavBox from "../../styles/components/Header/NavBox";
import Logo from "../../styles/components/Header/Logo";
import IconBox from "../../styles/components/Header/IconBox";
import Icon from "../../styles/components/Header/Icon";
import LoginButton from "../../styles/components/Header/LoginButton";
import Menu from "../../styles/components/Header/Menu";
import MenuItem from "../../styles/components/Header/MenuItem";

function Header() {
    const dropDownRef = useRef(null);

    const [memberId, setMemberId] = useState("");
    const [isOpen, setIsOpen] = useDetechClose(dropDownRef, false);

    useEffect(() => {
        const date = new Date();

        async function RememberMe() {
            const jwtToken = await getJWTToken();
            if (!!jwtToken) {
                if (date.getTime() > jwtToken.accessTokenExpiresIn) {
                    localStorage.removeItem("jwt");
                } else {
                    setMemberId(jwtToken.memberId);
                    // 여기다가 service 폴더에서 구현한 자동로그인 로직 load
                    // const response = await Axios.get("/api/asdf", {
                    //     accessToken: jwt.accessToken,
                    //     refreshToken: jwt.refreshToken,
                    // });
                    // console.log(response);
                }
            }
        }
        RememberMe();
    }, []);

    return (
        <>
            <Container>
                <NavBox>
                    <Link to={"/"}>
                        <Logo
                            src={process.env.PUBLIC_URL + "/images/logo.png"}
                            alt="Logo"
                        />
                    </Link>
                    <IconBox>
                        <Icon
                            src={
                                process.env.PUBLIC_URL + "images/magnifier.png"
                            }
                            alt="SearchBtn"
                        />
                        {memberId !== "" ? (
                            <>
                                <Icon
                                    src={
                                        process.env.PUBLIC_URL +
                                        "images/profile.png"
                                    }
                                    alt="ProfileImg"
                                    onClick={() => setIsOpen(!isOpen)}
                                />
                                <Menu
                                    ref={dropDownRef}
                                    className={isOpen ? "active" : ""}
                                >
                                    <MenuItem>내 활동</MenuItem>
                                    <Link to={`/members/${memberId}`}>
                                        <MenuItem>계정 설정</MenuItem>
                                    </Link>
                                    <MenuItem onClick={logoutUser}>
                                        로그아웃
                                    </MenuItem>
                                </Menu>
                            </>
                        ) : (
                            <Link to={"/login"}>
                                <LoginButton>로그인</LoginButton>
                            </Link>
                        )}
                    </IconBox>
                </NavBox>
            </Container>
            <Outlet />
        </>
    );
}

export default Header;
