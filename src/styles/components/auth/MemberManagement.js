import styled from "styled-components";

const StyledMemberManagement = styled.div`
    width: 321px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 24px;
`;

export const MemberManagement = (props) => {
    return (
        <StyledMemberManagement className={props.className}>
            {props.children}
        </StyledMemberManagement>
    );
};
