import styled from "styled-components";

const StyledTitle = styled.p`
    width: 97px;
    height: 33px;
    font-family: Pretendard;
    font-size: 28px;
    font-weight: 700;
    line-height: 33px;
    letter-spacing: 0em;
    text-align: left;
    color: #222222;
    margin-bottom: 40px;
`;

export const Title = (props) => {
    return (
        <StyledTitle className={props.className}>{props.children}</StyledTitle>
    );
};
