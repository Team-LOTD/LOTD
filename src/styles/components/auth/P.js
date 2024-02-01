import styled from "styled-components";

const StyledP = styled.p`
    width: 100px;
    height: 17px;
    font-family: Pretendard;
    font-size: 14px;
    font-weight: 700;
    line-height: 17px;
    letter-spacing: 0em;
    text-align: left;
    color: #797979;
    margin-bottom: 8px;
`;

export const P = (props) => {
    return <StyledP className={props.className}>{props.children}</StyledP>;
};
