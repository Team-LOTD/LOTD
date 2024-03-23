import Axios from "axios";

const jwtToken = JSON.parse(localStorage.getItem("jwt"));

export const savePosts = async (submitData) => {
    try {
        const sendPostData = {
            ...submitData,
            memberId: jwtToken.memberId,
        };
        console.log(sendPostData);
        const response = await Axios.post("/api/posts", sendPostData, {
            headers: {
                Authorization: `Bearer ${jwtToken.accessToken}`,
                "Authorization-refresh": `Bearer ${jwtToken.refreshToken}`,
            },
        });
        console.log(response.data);
        window.location.href = `/posts?post_id=${response.data.postId}&category_id=${response.data.categoryId}`;
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
    categoryId: 6,
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
    categoryId: 6,
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
    console.log(post_id, category_id);
    try {
        const response = await Axios.get("/api/posts", {
            params: {
                post_id: post_id,
                category_id: category_id,
            },
            headers: {
                Authorization: `Bearer ${jwtToken.accessToken}`,
                "Authorization-refresh": `Bearer ${jwtToken.refreshToken}`,
            },
        });
        console.log(response);
        return response.data;
    } catch (error) {
        console.log("Error viewPosts Data");
        if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        }
    }
};

export const loadPostsList = async (data) => {
    if (data.categoryId !== undefined) {
        try {
            const response = await Axios.get("/api/boards", {
                params: {
                    category_id: data.categoryId,
                },
            });
            return response.data;
        } catch (error) {
            console.log("Error loadPostsList-categoryId");
            if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            }
        }
    } else if (data.searchType !== undefined && data.text !== undefined) {
        try {
            const response = await Axios.get("/api/boards", {
                params: {
                    search_type: data.searchType,
                    text: data.text,
                },
            });
            return response.data;
        } catch (error) {
            console.log("Error loadPostsList-categoryId");
            if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            }
        }
    } else {
        try {
            const response = await Axios.get("/api/boards", {
                params: {},
            });
            return response.data;
        } catch (error) {
            console.log("Error loadPostsList");
            if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            }
        }
    }

    // return sampleArray;
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
    // return sampleArray;
};

export const updatePosts = async (updateData) => {
    console.log(updateData);
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
        window.location.href = `/posts?post_id=${updateData.post_id}&category_id=${updateData.categoryId}`;
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
