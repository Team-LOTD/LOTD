import React from "react";
import styled from "styled-components";

const StyledPostsInput = styled.input`
    width: 700px;
    height: 40px;
    border: 0px;
    font-family: Pretendard;
    font-size: 24px;
    font-weight: 700;
    line-height: 29px;
    letter-spacing: 0em;
    text-align: left;
    color: #222222;
    &::placeholder {
        color: #d9d9d9;
    }
`;

export const PostsInput = React.forwardRef((props, ref) => {
    return (
        <StyledPostsInput
            className={props.className}
            type={props.type}
            placeholder={props.placeholder}
            onChange={props.onChange}
            value={props.value}
            ref={ref}
        >
            {props.children}
        </StyledPostsInput>
    );
});
