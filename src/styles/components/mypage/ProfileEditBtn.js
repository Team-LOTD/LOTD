import styled from "styled-components";

const StyledProfileEditBtn = styled.button`
    position: absolute;
    z-index: 1;
    border: 1px solid #dedede;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    bottom: 2px;
    right: 2px;
    background-color: white;
    box-shadow: 0px 4px 10px 0px #0000000a;
    cursor: pointer;
`;

export const ProfileEditBtn = (props) => {
    return (
        <StyledProfileEditBtn className={props.className}>
            {props.children}
        </StyledProfileEditBtn>
    );
};
