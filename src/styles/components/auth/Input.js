import styled from "styled-components";
import React from "react";

const StyledInput = styled.input`
    width: 290px;
    height: 48px;
    padding: 13px 20px;
    border-radius: 4px;
    gap: 10px;
    border: 1px solid #d9d9d9;
    font-family: Pretendard;
    font-size: 16px;
    font-weight: 500;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: left;
    color: #cacaca;
    &::placeholder {
        color: #d9d9d9;
    }
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        appearance: none;
    }
`;

export const Input = React.forwardRef((props, ref) => {
    return (
        <StyledInput
            className={props.className}
            type={props.type}
            name={props.name}
            onBlur={props.onBlur}
            onChange={props.onChange}
            ref={ref}
            placeholder={props.placeholder}
            authcomplete={props.authComplete}
            invalid={props.invalid}
            onFocus={props.onFocus}
            value={props.value}
            style={props.style}
        >
            {props.children}
        </StyledInput>
    );
});
