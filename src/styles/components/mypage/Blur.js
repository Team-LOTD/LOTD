import styled from "styled-components";

const StyledProfileBlur = styled.div`
    position: absolute;
    z-index: 2;
    width: 100vw;
    height: calc(100vh - 56px);
    top: 56px;
    left: 0px;
    background-color: #0000004d;
`;

export const ProfileBlur = (props) => {
    return (
        <StyledProfileBlur
            className={props.className}
            style={props.style}
            onClick={props.onClick}
        >
            {props.children}
        </StyledProfileBlur>
    );
};
