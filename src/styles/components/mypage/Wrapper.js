import styled from "styled-components";

const StyledWrapper = styled.div`
    width: 570px;
    margin: 60px auto 0px auto;
`;

export const Wrapper = (props) => {
    return (
        <StyledWrapper className={props.className}>
            {props.children}
        </StyledWrapper>
    );
};
