import styled from "styled-components";

const StyledInput = styled.input`
    width: 290px;
    height: 48px;
    padding: 13px 20px;
    border-radius: 4px;
    gap: 10px;
    margin-bottom: 8px;
    background: #d9d9d9;
    border: 1px solid #d9d9d9;
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
    return (
        <StyledInput className={props.className}>{props.children}</StyledInput>
    );
};
