import styled from "styled-components";

const StyledPostsDataBox = styled.div`
    width: 100%;
    height: 20px;
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const PostsDataBox = (props) => {
    return (
        <StyledPostsDataBox className={props.className} style={props.style}>
            {props.children}
        </StyledPostsDataBox>
    );
};

export default PostsDataBox;
