import styled from "styled-components";

const StyledContainer = styled.div`
    width: 100%;
    height: 56px;
    background-color: #222222;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Container = (props) => {
    return (
        <StyledContainer className={props.className}>
            {props.children}
        </StyledContainer>
    );
};

export default Container;
