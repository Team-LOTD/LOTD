import styled from "styled-components";

const StyledPostsProfileNickname = styled.span`
    font-family: Pretendard;
    font-size: 12px;
    font-weight: 500;
    line-height: 14px;
    letter-spacing: 0em;
    text-align: left;
    color: #797979;
`;

const PostsProfileNickname = (props) => {
    return (
        <StyledPostsProfileNickname className={props.className}>
            {props.children}
        </StyledPostsProfileNickname>
    );
};

export default PostsProfileNickname;
