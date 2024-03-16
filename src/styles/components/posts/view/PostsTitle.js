import styled from "styled-components";

const StyledPostsTitle = styled.p`
    height: 29px;
    font-family: Pretendard;
    font-size: 24px;
    font-weight: 700;
    line-height: 29px;
    letter-spacing: 0em;
    text-align: left;
    color: #222222;
    margin: 16px 0px;
`;

const PostsTitle = (props) => {
    return (
        <StyledPostsTitle className={props.className}>
            {props.children}
        </StyledPostsTitle>
    );
};

export default PostsTitle;
