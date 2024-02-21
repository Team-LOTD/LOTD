import styled from "styled-components";

const StyledProfileContainer = styled.div`
    width: 570px;
    margin-bottom: 48px;
`;

const StyledProfileBox = styled.div`
    position: relative;
    width: 120px;
    height: 120px;
`;

export const ProfileBox = (props) => {
    return (
        <StyledProfileContainer>
            <StyledProfileBox className={props.className}>
                {props.children}
            </StyledProfileBox>
        </StyledProfileContainer>
    );
};
