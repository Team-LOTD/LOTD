import styled from "styled-components";

const StyledManagementText = styled.span`
    width: 76px;
    height: 17px;
    font-family: Pretendard;
    font-size: 14px;
    font-weight: 700;
    line-height: 17px;
    letter-spacing: 0em;
    text-align: center;
    color: #797979;
    cursor: pointer;
`;

export const ManagementText = (props) => {
    return (
        <StyledManagementText className={props.className}>
            {props.children}
        </StyledManagementText>
    );
};
