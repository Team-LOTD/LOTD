import styled from "styled-components";

const StyledInput = styled.input`
    width: 290px;
    height: 48px;
    padding: 13px 20px;
    border-radius: 4px;
    gap: 10px;
    border: 1px solid ${(props) => (props.invalid ? "#FF5A5A" : "#d9d9d9")};
    font-family: Pretendard;
    font-size: 16px;
    font-weight: 500;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: left;
    color: #cacaca;
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        appearance: none;
    }
`;

export const Input = (props) => {
    console.log(props);
    return (
        <StyledInput
            className={props.className}
            type={props.type}
            name={props.name}
            placeholder={props.placeholder}
            authcomplete={props.authComplete}
            invalid={props.invalid}
        >
            {props.children}
        </StyledInput>
    );
};
