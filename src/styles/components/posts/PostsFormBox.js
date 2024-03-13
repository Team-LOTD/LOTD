import styled from "styled-components";

const StyledPostsFormBox = styled.div`
    width: 860px;
    margin: 36px auto 0px auto;
`;

export const PostsFormBox = (props) => {
    return (
        <StyledPostsFormBox className={props.className}>
            {props.children}
        </StyledPostsFormBox>
    );
};
