import styled from "styled-components";

const StyledPopUpInput = styled.input`
    width: 400px;
    height: 48px;
    padding: 13px 20px;
    border-radius: 4px;
    border: 1px solid #d9d9d9;
    margin: 8px 24px 0px 24px;
    font-family: Pretendard;
    font-size: 16px;
    font-weight: 500;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: left;
    color: #333333;
    &::placeholder {
        color: #d9d9d9;
    }
`;

export const PopUpInput = (props) => {
    return (
        <StyledPopUpInput
            className={props.className}
            onChange={props.onChange}
            placeholder={props.placeholder}
            type={props.type}
        >
            {props.children}
        </StyledPopUpInput>
    );
};
