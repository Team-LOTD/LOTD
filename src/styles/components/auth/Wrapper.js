import styled from "styled-components";

const StyledWrapper = styled.div`
    width: 400px;
    margin: 60px auto 0px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Wrapper = (props) => {
    return (
        <StyledWrapper className={props.className}>
            {props.children}
        </StyledWrapper>
    );
};
