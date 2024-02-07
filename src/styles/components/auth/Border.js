import styled from "styled-components";

const StyledBorder = styled.p`
    width: 400px;
    margin: 40px 0px;
    display: flex;
    justify-content: space-between;
`;

const StyledHr = styled.hr`
    width: 175.5px;
    height: 2px;
    margin: 7.5px 0px;
`;

const StyledSpan = styled.span`
    width: 25px;
    height: 17px;
    font-family: Pretendard;
    font-size: 14px;
    font-weight: 700;
    line-height: 17px;
    letter-spacing: 0em;
    text-align: left;
    color: #797979;
`;

export const Border = (props) => {
    return (
        <StyledBorder className={props.className}>
            <StyledHr />
            <StyledSpan>또는</StyledSpan>
            <StyledHr />
        </StyledBorder>
    );
};
