import styled from "styled-components";

const StyledMenuItem = styled.li`
    width: 94px;
    height: 37px;
    padding: 10px 0px;
    font-family: Pretendard;
    font-size: 14px;
    font-weight: 500;
    line-height: 17px;
    letter-spacing: 0em;
    text-align: left;
    color: #333333;
    cursor: pointer;

    &.hover {
        background-color: #f8f8f8;
    }
`;

const MenuItem = (props) => {
    return (
        <StyledMenuItem className={props.className} onClick={props.onClick}>
            {props.children}
        </StyledMenuItem>
    );
};

export default MenuItem;
