import styled from "styled-components";

const StyledSocialBox = styled.div`
    width: 88px;
    height: 83px;
    display: flex;
    flex-direction: column;
    cursor: pointer;
`;

export const SocialBox = (props) => {
    return (
        <StyledSocialBox className={props.className}>
            {props.children}
        </StyledSocialBox>
    );
};
