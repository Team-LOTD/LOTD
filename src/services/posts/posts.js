import Axios from "axios";

const jwtToken = JSON.parse(localStorage.getItem("jwt"));

export const savePosts = async (submitData) => {
    try {
        const sendPostData = {
            ...submitData,
            memberId: jwtToken.memberId,
            commentsCount: 0,
            likeCount: 0,
            hits: 0,
        };
        console.log(sendPostData);
        const response = await Axios.post("/api/posts", sendPostData, {
            headers: {
                Authorization: `Bearer ${jwtToken.accessToken}`,
                "Authorization-refresh": `Bearer ${jwtToken.refreshToken}`,
            },
        });
        return response;
    } catch (error) {
        console.log("Error savePosts");
        if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        }
    }
};

const sample = {
    postId: 1,
    categoryId: 1,
    memberId: "asdf1",
    title: "testTitle",
    content: "testContent",
    image: "testImgSrc",
    commentsCount: 1,
    likeCount: 2,
    hits: 3,
    creator: "string",
    commentList: [{}],
    createdDate: "2024-03-15T16:01:44.424Z",
    nickname: "testNickname",
};

const sample2 = {
    postId: 1,
    categoryId: 1,
    memberId: "asdf1",
    title: "testTitle",
    content: "testContent",
    image: "testImgSrc",
    commentsCount: 1,
    likeCount: 2,
    hits: 3,
    creator: "string",
    commentList: [{}],
    createdDate: "2024-03-15T16:01:44.424Z",
    nickname: "testNickname",
};

const sampleArray = [sample, sample2];

export const loadPosts = async (post_id, category_id) => {
    // try {
    //     const response = await Axios.get("/api/posts", {
    //         params: {
    //             post_id: post_id,
    //             category_id: category_id,
    //         },
    //     });
    //     return response.data;
    // } catch (error) {
    //     console.log("Error viewPosts Data");
    //     if (error.response) {
    //         console.log(error.response.data);
    //         console.log(error.response.status);
    //         console.log(error.response.headers);
    //     }
    // }
    return sample;
};

export const loadPostsList = async (category_id) => {
    // try {
    //     const response = await Axios.get("/api/posts", {
    //         params: {
    //             category_id: category_id,
    //         },
    //     });
    //     return response.data;
    // } catch (error) {
    //     console.log("Error loadPostsList");
    //     if (error.response) {
    //         console.log(error.response.data);
    //         console.log(error.response.status);
    //         console.log(error.response.headers);
    //     }
    // }
    return sampleArray;
};

export const loadPostsSearchList = async (searchType, text) => {
    try {
        const response = await Axios.get("/api/boards", {
            params: {
                searchType: searchType,
                text: text,
            },
        });
        return response.data;
    } catch (error) {
        console.log("Error loadPostsSearchList");
        if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        }
    }
};

export const updatePosts = async (updateData) => {
    try {
        const response = await Axios.put("/api/posts", updateData, {
            params: {
                post_id: updateData.post_id,
            },
            headers: {
                Authorization: `Bearer ${jwtToken.accessToken}`,
                "Authorization-refresh": `Bearer ${jwtToken.refreshToken}`,
            },
        });
        console.log(response.data);
        window.location.href = `/posts?post_id=${updateData.post_id}`;
    } catch (error) {
        console.log("Error updatePosts Data");
        if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        }
    }
};

export const deletePosts = async (post_id) => {
    try {
        const response = await Axios.delete("/api/posts", {
            params: {
                post_id: post_id,
            },
            headers: {
                Authorization: `Bearer ${jwtToken.accessToken}`,
                "Authorization-refresh": `Bearer ${jwtToken.refreshToken}`,
            },
        });
        console.log(response.data);
        window.location.replace("/");
    } catch (error) {
        console.log("Error deletePosts");
        if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        }
    }
};
