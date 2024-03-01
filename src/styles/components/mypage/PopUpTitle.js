import styled from "styled-components";

const StyledPopUpTitle = styled.p`
    color: #222222;
    width: 98px;
    height: 21px;
    font-family: Pretendard;
    font-size: 18px;
    font-weight: 700;
    line-height: 21px;
    letter-spacing: 0em;
    text-align: center;
    margin: 24px auto 0px auto;
`;

export const PopUpTitle = (props) => {
    return (
        <StyledPopUpTitle className={props.className}>
            {props.children}
        </StyledPopUpTitle>
    );
};
