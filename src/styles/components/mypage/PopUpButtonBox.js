import styled from "styled-components";

const StyledPopUpButtonBox = styled.div`
    display: flex;
    justify-content: right;
    width: 400px;
    height: 48px;
    margin: 32px 24px 24px 24px;
`;

export const PopUpButtonBox = (props) => {
    return (
        <StyledPopUpButtonBox className={props.className}>
            {props.children}
        </StyledPopUpButtonBox>
    );
};
