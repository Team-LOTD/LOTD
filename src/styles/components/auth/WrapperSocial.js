import styled from "styled-components";

const StyledWrapperSocial = styled.div`
    width: 360px;
    height: 83px;
    display: flex;
    justify-content: space-between;
`;

export const WrapperSocial = (props) => {
    return (
        <StyledWrapperSocial className={props.className}>
            {props.children}
        </StyledWrapperSocial>
    );
};
