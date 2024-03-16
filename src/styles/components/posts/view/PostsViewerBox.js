import styled from "styled-components";

const StyledPostsViewerBox = styled.div`
    border-bottom: 1px solid #e7e8e9;
`;

const PostsViewerBox = (props) => {
    return (
        <StyledPostsViewerBox className={props.className}>
            {props.children}
        </StyledPostsViewerBox>
    );
};

export default PostsViewerBox;
