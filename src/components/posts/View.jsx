import { Viewer } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor-viewer.css";
import "@toast-ui/editor/dist/toastui-editor.css";
import colorSyntax from "@toast-ui/editor-plugin-color-syntax";
import "@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css";
import "tui-color-picker/dist/tui-color-picker.css";
import Axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

const View = () => {
    const [postValue, setPostValue] = useState({
        category_id: 0,
        title: "",
        content: "asdfwfdw",
    });

    const { post_id, category_id } = useParams();

    useEffect(() => {
        async function testPost() {
            try {
                const response = await Axios.get("/api/posts", {
                    params: {
                        post_id: post_id,
                        category_id: category_id,
                    },
                });
                setPostValue((prevState) => {
                    return {
                        ...prevState,
                        category_id: response.data.category_id,
                        title: response.data.title,
                        content: response.data.title,
                    };
                });
            } catch (error) {
                console.log("Error searchPost");
            }
        }
        console.log(post_id, category_id);
        testPost();
    }, [post_id, category_id]);

    return (
        <>
            <span>{postValue.title}</span>
            <span>{postValue.category_id}</span>
            <Viewer initialValue={postValue.content} plugin={[colorSyntax]} />
        </>
    );
};

export default View;
