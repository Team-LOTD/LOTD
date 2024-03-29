import Axios from "axios";
import qs from "qs";

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

export const loadPosts = async (
    post_id,
    category_id,
    request_member_id = ""
) => {
    try {
        const response = await Axios.get("/api/posts", {
            params: {
                post_id: post_id,
                category_id: category_id,
                request_member_id:
                    request_member_id !== "" ? request_member_id : null,
            },
        });
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

export const loadMainPostsList = async (page, sort = "") => {
    try {
        const response = await Axios.get("/api/boards", {
            params: {
                page: page,
                sort: sort,
            },
            paramsSerializer: (params) => {
                const serializedParams = qs.stringify(params, {
                    arrayFormat: "repeat",
                });
                return serializedParams;
            },
        });
        return response.data.getBoardListList;
    } catch (error) {
        console.log("Error loadMainPostsList Data");
        if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        }
    }
};

export const loadCategoryPostsList = async (category_id, page, sort = "") => {
    try {
        const response = await Axios.get("/api/boards", {
            params: {
                category_id: category_id,
                page: page,
                sort: sort,
            },
            paramsSerializer: (params) => {
                const serializedParams = qs.stringify(params, {
                    arrayFormat: "repeat",
                });
                return serializedParams;
            },
        });
        return response.data.getBoardListList;
    } catch (error) {
        console.log("Error loadCategoryPostsList Data");
        if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        }
    }
};

export const loadPostsSearchList = async (
    categoryId,
    searchType,
    text,
    page
) => {
    console.log(categoryId, searchType, text, page);
    try {
        const response = await Axios.get("/api/boards", {
            params: {
                category_id: categoryId,
                search_condition: searchType,
                text: text,
                page: page,
            },
        });
        console.log(response.data);
        return response.data.getBoardListList;
    } catch (error) {
        console.log("Error loadPostsSearchList");
        if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        }
    }
};

export const loadActivityPostsList = async (value, memberId, page) => {
    try {
        const response = await Axios.get(`/api/members/my/${value}`, {
            params: {
                member_id: memberId,
                page: page,
            },
            headers: {
                Authorization: `Bearer ${jwtToken.accessToken}`,
                "Authorization-refresh": `Bearer ${jwtToken.refreshToken}`,
            },
        });
        switch (value) {
            case "posts": {
                return response.data.postList;
            }
            case "comments": {
                return response.data.commentsPostList;
            }
            case "hearts": {
                return response.data.heartPostList;
            }
            default: {
                return "asdf";
            }
        }
    } catch (error) {
        console.log("Error loadActivityPostsList");
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
