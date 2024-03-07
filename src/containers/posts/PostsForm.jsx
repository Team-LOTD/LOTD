import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

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
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import { uploadImageFile } from "../../services/posts/testS3";
import { savePosts, searchPosts } from "../../services/posts/posts";

const CONTENT_KEY = "CONTENT_KEY";

const editorInitialValue = "";

const PostsForm = () => {
    const [category, setCategory] = useState("");
    const [title, setTitle] = useState("");
    const [imageURL, setImageURL] = useState("");

    const { post_id } = useParams();

    useEffect(() => {
        async function loadPost() {
            if (post_id !== undefined) {
                const response = await searchPosts(post_id);
                console.log(response);
            }
        }
        loadPost();
    }, [post_id]);

    const editRef = useRef(null);

    const navigate = useNavigate();

    const handleDraft = () => {
        const markDownContent = editRef.current.getInstance().getMarkdown();
        // const htmlContent = editRef.current.getInstance().getHTML();

        localStorage.setItem(CONTENT_KEY, markDownContent);
    };

    const handleDeleteDraft = () => {
        localStorage.removeItem(CONTENT_KEY);

        editRef.current.getInstance().setMarkdown("");
    };

    const handleSubmitPost = async () => {
        if (category === "") {
            alert("카테고리 선택");
        } else if (title === "") {
            alert("타이틀 입력");
        } else if (editRef.current.getInstance().getMarkdown().length <= 0) {
            alert("본문 입력");
        } else {
            const submitData = {
                title: title,
                image: imageURL,
                content: editRef.current.getInstance().getMarkdown(),
                category_no: category,
            };
            const response = await savePosts(submitData);
            console.log(response);
        }
        console.log("aa");
    };

    useEffect(() => {
        const jwtToken = JSON.parse(localStorage.getItem("jwt"));

        if (!jwtToken) {
            // alert("잘못된 접근입니다. 로그인 후 이용해주세요");
            // window.location.replace("/login");
        } else {
            const item = localStorage.getItem(CONTENT_KEY);
            if (item) {
                editRef.current.getInstance().setMarkdown(item);
            }
        }
    }, []);

    return (
        <>
            <div>
                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                    <InputLabel id="select-category">Category</InputLabel>
                    <Select
                        labelId="select-category"
                        id="select-category"
                        value={category}
                        label="Category"
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        <MenuItem value={1}>자유게시판</MenuItem>
                        <MenuItem value={2}>OOTD</MenuItem>
                        <MenuItem value={3}>패션</MenuItem>
                    </Select>
                </FormControl>
                <Box
                    component="form"
                    sx={{ "& > :not(style)": { m: 1, width: "25ch" } }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField
                        id="outlined-basic"
                        label="Title"
                        variant="outlined"
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </Box>
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
                <button onClick={handleDraft}>임시저장</button>
                <button onClick={handleDeleteDraft}>임시저장제거</button>
                <button onClick={handleSubmitPost}>저장</button>
                <button onClick={() => navigate(-1)}>취소</button>
            </div>
        </>
    );
};

export default PostsForm;
