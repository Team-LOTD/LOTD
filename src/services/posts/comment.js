import Axios from "axios";

const jwtToken = JSON.parse(localStorage.getItem("jwt"));

export const saveComment = async ({
    parentCommentId,
    content,
    postId,
    memberId,
}) => {
    console.log(content, postId, memberId, parentCommentId);
    try {
        const response = await Axios.post(
            "/api/comments",
            {
                parentCommentId: parentCommentId,
                content: content,
                postId: postId,
                memberId: memberId,
            },
            {
                headers: {
                    Authorization: `Bearer ${jwtToken.accessToken}`,
                    "Authorization-refresh": `Bearer ${jwtToken.refreshToken}`,
                },
            }
        );
        return true;
    } catch (error) {
        console.log("Error saveComment");
        if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        }
        return false;
    }
};

export const changeComment = async ({ commentId, content }) => {
    console.log(commentId, content);
    try {
        const response = await Axios.put(
            "/api/comments",
            {
                commentId: commentId,
                content: content,
            },
            {
                headers: {
                    Authorization: `Bearer ${jwtToken.accessToken}`,
                    "Authorization-refresh": `Bearer ${jwtToken.refreshToken}`,
                },
            }
        );
        return true;
    } catch (error) {
        console.log("Error ChangeComment");
        if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        }
        return false;
    }
};

export const deleteComment = async ({ postId, commentId }) => {
    try {
        const response = await Axios.delete("/api/comments", {
            params: {
                post_id: postId,
                comment_id: commentId,
            },
            headers: {
                Authorization: `Bearer ${jwtToken.accessToken}`,
                "Authorization-refresh": `Bearer ${jwtToken.refreshToken}`,
            },
        });
        return true;
    } catch (error) {
        console.log("Error deleteComment");
        if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        }
        return false;
    }
};
