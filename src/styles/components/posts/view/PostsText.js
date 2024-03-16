import styled from "styled-components";

const StyledPostsText = styled.span`
    font-family: Pretendard;
    font-size: 12px;
    font-weight: 500;
    line-height: 14px;
    letter-spacing: 0em;
    text-align: left;
    color: #ababab;
`;

const PostsText = (props) => {
    return (
        <StyledPostsText className={props.className} style={props.style}>
            {props.children}
        </StyledPostsText>
    );
};

export default PostsText;
