import styled from "@emotion/styled";

const StyledPostsBackImg = styled.img`
    width: 40px;
    height: 44px;
    padding: 4px 4px;
    transform: rotate(180deg);
    cursor: pointer;
`;

export const PostsBackImg = (props) => {
    return (
        <StyledPostsBackImg
            className={props.className}
            src={props.src}
            alt={props.alt}
            onClick={props.onClick}
        >
            {props.children}
        </StyledPostsBackImg>
    );
};
