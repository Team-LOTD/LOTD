import styled from "styled-components";

const StyledForm = styled.form`
    width: 400px;
`;

export const Form = (props) => {
    return (
        <StyledForm className={props.className} onSubmit={props.onSubmit}>
            {props.children}
        </StyledForm>
    );
};
