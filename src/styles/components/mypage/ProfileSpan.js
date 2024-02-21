import styled from "styled-components";

const StyledProfileSpan = styled.span`
    height: 19px;
    font-family: Pretendard;
    font-size: 16px;
    font-weight: 500;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: left;
    color: #333333;
`;

export const ProfileSpan = (props) => {
    return (
        <StyledProfileSpan className={props.className}>
            {props.children}
        </StyledProfileSpan>
    );
};
