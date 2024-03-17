import { Outlet, Link } from "react-router-dom";
import styled from "styled-components";

const StyledSideBar = styled.div`
    width: 140px;
`;

const StyledMessage = styled.p`
    width: 124px;
    font-family: Pretendard;
    font-size: 18px;
    font-weight: 700;
    line-height: 28px;
    letter-spacing: 0em;
    text-align: left;
    color: #333333;
    margin-bottom: 8px;
`;

const StyledCreateButton = styled.div`
    width: 140px;
    height: 32px;
    border-radius: 4px;
    padding: 13px 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #333333;
    margin-bottom: 32px;
`;

const StyledCreateImg = styled.img`
    width: 20px;
    height: 20px;
    margin-right: 10px;
`;

const StyledCreateSpan = styled.span`
    width: 37px;
    height: 17px;
    font-family: Pretendard;
    font-size: 14px;
    font-weight: 700;
    line-height: 17px;
    letter-spacing: 0em;
    text-align: left;
    color: #ffffff;
`;

const SideBar = () => {
    return (
        <>
            <StyledSideBar>
                <StyledMessage>다양한 패션글을 공유해보세요💬</StyledMessage>
                <StyledCreateButton>
                    <StyledCreateImg
                        src={process.env.PUBLIC_URL + "/images/create.png"}
                        alt="CreateButtonImg"
                    />
                    <StyledCreateSpan>글쓰기</StyledCreateSpan>
                </StyledCreateButton>
            </StyledSideBar>
            <Outlet />
        </>
    );
};

export default SideBar;
