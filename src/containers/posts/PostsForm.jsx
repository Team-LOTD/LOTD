import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/toastui-editor.css";
import "@toast-ui/editor/dist/i18n/ko-kr";
import colorSyntax from "@toast-ui/editor-plugin-color-syntax";
import "@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css";
import "tui-color-picker/dist/tui-color-picker.css";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { uploadImageFile } from "../../services/posts/testS3";
import { savePosts, updatePosts } from "../../services/posts/posts";

import { PostsFormBox } from "../../styles/components/posts/PostsFormBox";
import { PostsInput } from "../../styles/components/posts/PostsInput";
import PostsButton from "../../styles/components/posts/PostsButton";
import { POstsControlBox } from "../../styles/components/posts/PostsControlBox";
import { PostsBackImg } from "../../styles/components/posts/PostsBackImg";

// const CONTENT_KEY = "CONTENT_KEY";

const editorInitialValue = "";

const PostsForm = ({ postData }) => {
    const [category, setCategory] = useState("");
    const [title, setTitle] = useState("");
    const [imageURL, setImageURL] = useState("");

    const editRef = useRef(null);

    const navigate = useNavigate();

    // 임시저장기능
    // const handleDraft = () => {
    //     const markDownContent = editRef.current.getInstance().getMarkdown();
    //     // const htmlContent = editRef.current.getInstance().getHTML();

    //     localStorage.setItem(CONTENT_KEY, markDownContent);
    // };

    // const handleDeleteDraft = () => {
    //     localStorage.removeItem(CONTENT_KEY);

    //     editRef.current.getInstance().setMarkdown("");
    // };

    const handleSubmitPost = async () => {
        const submitData = {
            title: title,
            image: null,
            // image: imageURL,
            content: editRef.current.getInstance().getMarkdown(),
            categoryId: category,
        };
        console.log(submitData);
        if (category === "") {
            alert("카테고리 선택");
        } else if (title === "") {
            alert("타이틀 입력");
        } else if (editRef.current.getInstance().getMarkdown().length <= 0) {
            alert("본문 입력");
        } else {
            if (Object.keys(postData).length !== 0 && postData.post_id !== 0) {
                const response = await updatePosts(submitData);
                console.log(response);
            } else {
                const response = await savePosts(submitData);
                console.log(response);
            }
        }
        console.log("aa");
    };

    useEffect(() => {
        if (postData && Object.keys(postData).length !== 0) {
            setCategory(postData.category_id);
            setTitle(postData.title);
            editRef.current.getInstance().setMarkdown(postData.content);
        }
    }, [postData]);

    return (
        <>
            <POstsControlBox>
                <PostsBackImg
                    src={process.env.PUBLIC_URL + "/images/arrow-right.png"}
                    alt="navigateBack"
                    onClick={() => navigate(-1)}
                />
                <PostsButton onClick={handleSubmitPost}>등록하기</PostsButton>
            </POstsControlBox>

            <PostsFormBox>
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        width: "860px",
                    }}
                >
                    <FormControl sx={{ m: 1, minWidth: 140 }} size="small">
                        <InputLabel id="select-category">게시판</InputLabel>
                        <Select
                            labelId="select-category"
                            id="select-category"
                            value={category}
                            label="Category"
                            onChange={(e) => setCategory(e.target.value)}
                            sx={{
                                boxShadow: "none",
                                ".MuiOutlinedInput-notchedOutline": {
                                    border: 0,
                                },
                            }}
                        >
                            <MenuItem value={1}>자유게시판</MenuItem>
                            <MenuItem value={2}>OOTD</MenuItem>
                            <MenuItem value={3}>패션</MenuItem>
                        </Select>
                    </FormControl>
                    <PostsInput
                        type="text"
                        placeholder="제목을 입력하세요"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <Editor
                    initialValue={editorInitialValue}
                    ref={editRef}
                    previewStyle="tab"
                    height="600px"
                    initialEditType="wysiwyg"
                    language="ko-KR"
                    useCommandShortcut={false}
                    usageStatistics={false}
                    plugins={[colorSyntax]}
                    hooks={{
                        addImageBlobHook: async (blob, callback) => {
                            console.log(blob);
                            console.log(blob.size);
                            const file = new File(
                                [blob],
                                encodeURI(blob.name),
                                {
                                    type: blob.type,
                                }
                            );
                            console.log(file);
                            const responseURL = await uploadImageFile(file);
                            if (imageURL === "") {
                                setImageURL(responseURL);
                            }
                            console.log(responseURL);
                            callback(responseURL);
                        },
                    }}
                />

                {/* <button onClick={handleDraft}>임시저장</button>
                <button onClick={handleDeleteDraft}>임시저장제거</button> */}
            </PostsFormBox>
        </>
    );
};

export default PostsForm;
