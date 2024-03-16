import styled from "styled-components";

const StyledNavBox = styled.div`
    width: 1080px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const NavBox = (props) => {
    return (
        <StyledNavBox className={props.className}>
            {props.children}
        </StyledNavBox>
    );
};

export default NavBox;
