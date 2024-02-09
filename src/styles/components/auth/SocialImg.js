import styled from "styled-components";

const StyledSocialImg = styled.img`
    width: 54px;
    height: 54px;
    margin: 0px 17px 12px 17px;
`;

export const SocialImg = (props) => {
    return (
        <StyledSocialImg
            className={props.className}
            src={props.src}
            alt={props.alt}
        />
    );
};
