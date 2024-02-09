import styled from "styled-components";

const StyledSubSpan = styled.span`
    font-family: Pretendard;
    font-size: 14px;
    font-weight: 700;
    line-height: 17px;
    letter-spacing: 0em;
    text-align: left;
    color: #cacaca;
`;

export const SubSpan = (props) => {
    return (
        <StyledSubSpan className={props.className}>
            {props.children}
        </StyledSubSpan>
    );
};
