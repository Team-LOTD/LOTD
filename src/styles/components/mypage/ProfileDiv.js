import styled from "styled-components";

const StyledProfileDiv = styled.div`
    height: 19px;
    display: flex;
    align-items: center;
    cursor: pointer;
`;

export const ProfileDiv = (props) => {
    return (
        <StyledProfileDiv
            className={props.className}
            style={props.style}
            onClick={props.onClick}
        >
            {props.children}
        </StyledProfileDiv>
    );
};
