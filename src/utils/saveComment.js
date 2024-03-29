import {
    changeComment,
    deleteComment,
    saveComment,
} from "../services/posts/comment";

export const handleSubmitComment = async (data) => {
    console.log(data);
    if (!!data.memberId) {
        if (data.content === "") {
            alert("댓글을 입력해주세요");
        } else {
            const response = await saveComment({
                content: data.content,
                postId: data.postId,
                memberId: data.memberId,
                parentCommentId: data.parentCommentId,
            });
            if (response) {
                window.location.reload();
            } else {
                alert("서버와 연결할 수 없습니다. 잠시후 이용해주세요.");
            }
        }
    } else {
        alert("로그인 후 이용해주세요.");
        window.location.href = "/login";
    }
};

export const handleEditComment = async (data) => {
    if (data.content === "") {
        alert("댓글을 입력해주세요");
    } else {
        const response = await changeComment({
            commentId: data.commentId,
            content: data.content,
        });
        if (response) {
            window.location.reload();
        } else {
            alert("서버와 연결할 수 없습니다. 잠시후 이용해주세요.");
        }
    }
};

export const handleDeleteComment = async (data) => {
    // if (alert("정말 삭제하시겠습니까?")) {
    const response = await deleteComment({
        postId: data.postId,
        commentId: data.commentId,
    });
    if (response) {
        window.location.reload();
    } else {
        alert("서버와 연결할 수 없습니다. 잠시후 이용해주세요");
    }
    // }
};
