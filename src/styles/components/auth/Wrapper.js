import styled from "styled-components";

const StyledWrapper = styled.div`
    width: 400px;
    height: 767px;
    margin: 60px auto 197px auto;
`;

export const Wrapper = (props) => {
    return (
        <StyledWrapper className={props.className}>
            {props.children}
        </StyledWrapper>
    );
};
