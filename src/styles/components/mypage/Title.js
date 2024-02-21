import styled from "styled-components";

const StyledTitle = styled.p`
    width: 570px;
    height: 29px;
    font-family: Pretendard;
    font-size: 24px;
    font-weight: 700;
    line-height: 29px;
    letter-spacing: 0em;
    text-align: left;
    color: #222222;
    margin-bottom: 48px;
`;

export const Title = (props) => {
    return (
        <StyledTitle className={props.className}>{props.children}</StyledTitle>
    );
};
