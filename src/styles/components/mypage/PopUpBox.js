import styled from "styled-components";

const StyledPopUpBox = styled.div`
    position: absolute;
    z-index: 3;
    width: 448px;
    border-radius: 10px;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #ffffff;
`;

export const PopUpBox = (props) => {
    return (
        <StyledPopUpBox className={props.className} style={props.style}>
            {props.children}
        </StyledPopUpBox>
    );
};
