import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";

import { Viewer } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor-viewer.css";
import "@toast-ui/editor/dist/toastui-editor.css";
import colorSyntax from "@toast-ui/editor-plugin-color-syntax";
import "@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css";
import "tui-color-picker/dist/tui-color-picker.css";

import { deletePosts, loadPosts } from "../../services/posts/posts";

const PostsViewer = () => {
    const [postValue, setPostValue] = useState({
        category_id: 0,
        title: "",
        member_id: "",
        viewCount: 0,
        date: "",
        content: "",
        likeCount: 0,
        commentCount: 0,
        post_id: 0,
    });

    const [jwt, setJwt] = useState();

    const navigate = useNavigate();

    const { post_id } = useParams();

    useEffect(() => {
        async function loadPostData() {
            setJwt(JSON.parse(localStorage.getItem("jwt")));

            try {
                const response = await loadPosts(post_id);
                setPostValue((prevState) => {
                    return {
                        ...prevState,
                        category_id: response.data.category_id,
                        title: response.data.title,
                        member_id: response.data.memberId,
                        viewCount: response.data.hits,
                        date: response.data.createdDate,
                        content: response.data.title,
                        likeCount: response.data.likeCount,
                        commentCount: response.data.commentCount,
                        post_id: response.data.postId,
                    };
                });
            } catch (error) {
                console.log("Error searchPost");
            }
        }
        loadPostData();
    }, [post_id]);

    const handleOnClickUpdate = () => {
        navigate(`/posts/update?post_id=${postValue.post_id}`, {
            state: { data: postValue },
        });
    };

    const handleOnClickDelete = async () => {
        await deletePosts(postValue.post_id);
    };

    return (
        <>
            <span>{postValue.category_id}</span>
            <span>{postValue.title}</span>
            <span>{postValue.member_id}</span>
            <span>{postValue.viewCount}</span>
            <span>{postValue.date}</span>
            <Viewer initialValue={postValue.content} plugin={[colorSyntax]} />
            <span>{postValue.likeCount}</span>
            <span>{postValue.commentCount}</span>
            {jwt.memberId !== postValue.member_id ? null : (
                <>
                    <button onClick={handleOnClickUpdate}>수정</button>
                    <button onClick={handleOnClickDelete}>삭제</button>
                </>
            )}
        </>
    );
};

export default PostsViewer;
