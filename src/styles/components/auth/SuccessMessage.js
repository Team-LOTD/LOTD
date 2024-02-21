import styled from "styled-components";

const StyledSuccessMessage = styled.p`
    height: 14px;
    font-family: Pretendard;
    font-size: 12px;
    font-weight: 500;
    line-height: 14px;
    letter-spacing: 0em;
    text-align: left;
    color: #538eff;
    margin-top: 8px;
`;

export const SuccessMessage = (props) => {
    return (
        <StyledSuccessMessage className={props.className}>
            {props.children}
        </StyledSuccessMessage>
    );
};
