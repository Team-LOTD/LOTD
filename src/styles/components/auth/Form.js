import styled from "styled-components";

const StyledForm = styled.form`
    width: 400px;
    margin-bottom: 40px;
`;

export const Form = (props) => {
    return (
        <StyledForm className={props.className}>{props.children}</StyledForm>
    );
};
