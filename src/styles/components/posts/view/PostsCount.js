import styled from "styled-components";

const StyledPostsCount = styled.span`
    font-family: Pretendard;
    font-size: 12px;
    font-weight: 500;
    line-height: 14px;
    letter-spacing: 0em;
    text-align: left;
    color: #ababab;
    margin-left: 6px;
`;

const PostsCount = (props) => {
    return (
        <StyledPostsCount className={props.className}>
            {props.children}
        </StyledPostsCount>
    );
};

export default PostsCount;
