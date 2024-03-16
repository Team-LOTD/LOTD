import styled from "styled-components";

const StyledPostsIcon = styled.img`
    width: 18px;
    height: 18px;
    margin-right: 6px;
`;

const PostsIcon = (props) => {
    return (
        <StyledPostsIcon
            className={props.className}
            src={props.src}
            alt={props.alt}
            style={props.style}
        >
            {props.children}
        </StyledPostsIcon>
    );
};

export default PostsIcon;
