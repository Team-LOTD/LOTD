import styled from "styled-components";

const StyledPopUpSubTitle = styled.p`
    color: #797979;
    height: 17px;
    font-family: Pretendard;
    font-size: 14px;
    font-weight: 700;
    line-height: 17px;
    letter-spacing: 0em;
    text-align: left;
    margin: 24px 0px 0px 24px;
`;

export const PopUpSubTitle = (props) => {
    return (
        <StyledPopUpSubTitle className={props.className}>
            {props.children}
        </StyledPopUpSubTitle>
    );
};
