import styled from "styled-components";

const StyledProfileImg = styled.img`
    width: 120px;
    height: 120px;
    border-radius: 50%;
`;

export const ProfileImg = (props) => {
    return (
        <StyledProfileImg
            className={props.className}
            src={props.src}
            alt={props.alt}
        >
            {props.children}
        </StyledProfileImg>
    );
};
