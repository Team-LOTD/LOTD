import styled from "styled-components";

const StyledSocialText = styled.p`
    width: 88px;
    height: 17px;
    font-family: Pretendard;
    font-size: 14px;
    font-weight: 700;
    line-height: 17px;
    letter-spacing: 0em;
    text-align: center;
    color: #797979;
`;

export const SocialText = (props) => {
    return (
        <StyledSocialText className={props.className}>
            {props.children}
        </StyledSocialText>
    );
};
