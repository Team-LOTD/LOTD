import styled from "styled-components";

const StyledProfileHr = styled.hr`
    width: 570px;
    height: 1px;
    background: #e7e8e9;
    margin: 20px 0px;
    border: 0px;
`;

export const ProfileHr = (props) => {
    return (
        <StyledProfileHr className={props.className}>
            {props.children}
        </StyledProfileHr>
    );
};
