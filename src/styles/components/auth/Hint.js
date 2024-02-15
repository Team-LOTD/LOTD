import styled from "styled-components";

const StyledHint = styled.p`
    width: 394px;
    height: 14px;
    font-family: Pretendard;
    font-size: 12px;
    font-weight: 500;
    line-height: 14px;
    letter-spacing: 0em;
    text-align: left;
    color: #797979;
    margin-top: 8px;
`;

export const Hint = (props) => {
    return (
        <StyledHint className={props.className}>{props.children}</StyledHint>
    );
};
