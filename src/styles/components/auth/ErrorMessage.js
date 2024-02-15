import styled from "styled-components";

const StyledErrorMessage = styled.p`
    height: 14px;
    font-family: Pretendard;
    font-size: 12px;
    font-weight: 500;
    line-height: 14px;
    letter-spacing: 0em;
    text-align: left;
    color: ${(props) => (props.invalid ? "blue" : "#FF5A5A")};
    margin-top: 8px;
`;

export const ErrorMessage = (props) => {
    return (
        <StyledErrorMessage className={props.className} invalid={props.invalid}>
            {props.children}
        </StyledErrorMessage>
    );
};
