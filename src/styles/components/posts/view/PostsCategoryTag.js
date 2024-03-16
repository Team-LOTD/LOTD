import styled from "styled-components";

const StyledPostsCategoryTag = styled.span`
    width: 64px;
    height: 22px;
    border: 1px solid #e7e8e9;
    border-radius: 2px;
    padding: 4px 6px;
    background-color: #f1f1f1;
    color: #333333;
    font-family: Pretendard;
    font-size: 12px;
    font-weight: 500;
    line-height: 14px;
    letter-spacing: 0em;
    text-align: left;
`;

const PostsCategoryTag = (props) => {
    return (
        <StyledPostsCategoryTag className={props.className}>
            {props.children}
        </StyledPostsCategoryTag>
    );
};

export default PostsCategoryTag;
