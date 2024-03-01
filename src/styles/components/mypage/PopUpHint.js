import styled from "styled-components";

const StyledPopUpHint = styled.p`
    width: 394px;
    height: 14px;
    font-family: Pretendard;
    font-size: 12px;
    font-weight: 500;
    line-height: 14px;
    letter-spacing: 0em;
    text-align: left;
    color: #797979;
    margin: 8px 30px 0px 24px;
`;

export const PopUpHint = (props) => {
    return (
        <StyledPopUpHint className={props.className}>
            {props.children}
        </StyledPopUpHint>
    );
};
