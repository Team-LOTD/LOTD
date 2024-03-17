import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { Viewer } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor-viewer.css";
import "@toast-ui/editor/dist/toastui-editor.css";
import colorSyntax from "@toast-ui/editor-plugin-color-syntax";
import "@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css";
import "tui-color-picker/dist/tui-color-picker.css";

import { deletePosts, loadPosts } from "../../services/posts/posts";
import Duration from "./Duration";

import styled from "styled-components";
import PostsViewerBox from "../../styles/components/posts/view/PostsViewerBox";
import PostsCategoryTag from "../../styles/components/posts/view/PostsCategoryTag";
import PostsTitle from "../../styles/components/posts/view/PostsTitle";
import PostsDataBox from "../../styles/components/posts/view/PostsDataBox";
import PostsProfileImg from "../../styles/components/posts/view/PostsProfileImg";
import PostsProfileNickname from "../../styles/components/posts/view/PostsProfileNickname";
import PostsIcon from "../../styles/components/posts/view/PostsIcon";
import PostsCount from "../../styles/components/posts/view/PostsCount";
import PostsText from "../../styles/components/posts/view/PostsText";
import PostsButton from "../../styles/components/posts/PostsButton";

const UpdateButton = styled(PostsButton)`
    width: 100px !important;
    border: 1px solid #222222 !important;
    color: #222222 !important;
    background-color: #ffffff !important;
`;

const DeleteButton = styled(PostsButton)`
    width: 100px !important;
    margin-left: 10px;
`;

const PostsViewer = () => {
    const [postValue, setPostValue] = useState({
        categoryId: 0,
        title: "",
        memberId: "",
        viewCount: 0,
        date: "",
        content: "",
        likeCount: 0,
        commentsCount: 0,
        postId: 0,
        nickname: "",
    });

    const [jwtToken, setJwtToken] = useState();

    const navigate = useNavigate();

    const location = useLocation();

    const queryParmas = new URLSearchParams(location.search);

    const postId = queryParmas.get("post_id");
    const categoryId = queryParmas.get("category_id");

    useEffect(() => {
        async function loadPostData() {
            setJwtToken(JSON.parse(localStorage.getItem("jwt")));

            try {
                const response = await loadPosts(postId, categoryId);
                console.log(response);
                setPostValue((prevState) => {
                    return {
                        ...prevState,
                        categoryId: response.categoryId,
                        title: response.title,
                        memberId: response.memberId,
                        viewCount: response.hits,
                        date: response.createdDate,
                        content: response.content,
                        likeCount: response.likeCount,
                        commentsCount: response.commentsCount,
                        postId: response.postId,
                        nickname: response.creator,
                    };
                });
            } catch (error) {
                console.log("Error searchPost");
            }
        }
        loadPostData();
    }, [postId, categoryId]);

    useEffect(() => {
        console.log(postValue.content);
    }, [postValue]);

    const handleOnClickUpdate = () => {
        navigate(
            `/posts/edit?post_id=${postValue.postId}&category_id=${postValue.categoryId}`
        );
    };

    const handleOnClickDelete = async () => {
        await deletePosts(postValue.postId);
    };

    const categoryText = (categoryId) => {
        const messages = {
            1: "자유게시판",
            2: "OOTD",
            3: "패션",
        };
        return messages[categoryId];
    };

    return (
        <>
            <div style={{ width: "860px", margin: "36px auto 0px auto" }}>
                <PostsViewerBox>
                    <PostsCategoryTag>
                        {categoryText(postValue.categoryId)}
                    </PostsCategoryTag>
                    <PostsTitle>{postValue.title}</PostsTitle>
                    <PostsDataBox>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <PostsProfileImg
                                src={
                                    process.env.PUBLIC_URL +
                                    "/images/profile.png"
                                }
                                alt="ProfileImg"
                            />
                            <PostsProfileNickname>
                                {postValue.nickname}
                            </PostsProfileNickname>
                        </div>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <PostsIcon
                                src={
                                    process.env.PUBLIC_URL +
                                    "/images/visibility.png"
                                }
                                alt="ViewCount"
                            />
                            <PostsCount>{postValue.viewCount}</PostsCount>
                            <Duration date={postValue.date} />
                        </div>
                    </PostsDataBox>
                    {postValue.content !== "" ? (
                        <div style={{ minHeight: "500px" }}>
                            <Viewer
                                initialValue={postValue.content}
                                plugin={[colorSyntax]}
                            />
                        </div>
                    ) : null}
                    <div style={{ display: "flex", marginBottom: "32px" }}>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <PostsIcon
                                src={
                                    process.env.PUBLIC_URL + "/images/heart.png"
                                }
                                alt="CountLike"
                            />
                            <PostsText>좋아요</PostsText>
                            <PostsCount>{postValue.likeCount}</PostsCount>
                        </div>
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                marginLeft: "16px",
                            }}
                        >
                            <PostsIcon
                                src={
                                    process.env.PUBLIC_URL +
                                    "/images/message.png"
                                }
                                alt="CountMessage"
                            />
                            <PostsText>댓글</PostsText>
                            <PostsCount>{postValue.commentsCount}</PostsCount>
                        </div>
                    </div>
                </PostsViewerBox>
                {!!jwtToken ? (
                    jwtToken.memberId !== postValue.memberId ? null : (
                        <div
                            style={{
                                marginTop: "16px",
                                width: "100%",
                                display: "flex",
                                justifyContent: "right",
                            }}
                        >
                            <UpdateButton onClick={handleOnClickUpdate}>
                                수정하기
                            </UpdateButton>
                            <DeleteButton onClick={handleOnClickDelete}>
                                삭제하기
                            </DeleteButton>
                        </div>
                    )
                ) : null}
            </div>
        </>
    );
};

export default PostsViewer;
