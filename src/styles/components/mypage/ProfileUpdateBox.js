import styled from "styled-components";

const StyledProfileUpdateBox = styled.div`
    width: 570px;
    height: 19px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const ProfileUpdateBox = (props) => {
    return (
        <StyledProfileUpdateBox className={props.className}>
            {props.children}
        </StyledProfileUpdateBox>
    );
};
