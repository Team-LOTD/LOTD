import styled from "styled-components";

const StyledIconBox = styled.div`
    width: 130px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const IconBox = (props) => {
    return (
        <StyledIconBox className={props.className}>
            {props.children}
        </StyledIconBox>
    );
};

export default IconBox;
