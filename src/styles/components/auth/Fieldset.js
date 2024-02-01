import styled from "styled-components";

const StyledFieldset = styled.fieldset`
    width: 400px;
    height: 117px;
    margin-bottom: 24px;
`;

export const Fieldset = (props) => {
    return (
        <StyledFieldset className={props.className}>
            {props.children}
        </StyledFieldset>
    );
};
