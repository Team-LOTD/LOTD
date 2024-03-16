import styled from "styled-components";

const StyledPostsProfileImg = styled.img`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin-right: 6px;
`;

const PostsProfileImg = (props) => {
    return (
        <StyledPostsProfileImg
            className={props.className}
            src={props.src}
            alt={props.alt}
        >
            {props.children}
        </StyledPostsProfileImg>
    );
};

export default PostsProfileImg;
