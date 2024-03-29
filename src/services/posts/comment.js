import Axios from "axios";

const jwtToken = JSON.parse(localStorage.getItem("jwt"));

export const saveComment = async (
    parentCommentId,
    content,
    postId,
    memberId
) => {
    console.log(parentCommentId, content, postId, memberId);
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
