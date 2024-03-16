import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { loadPostsSearchList } from "../../services/posts/posts";

const PostsSearchList = () => {
    const location = useLocation();

    const queryParams = new URLSearchParams(location.search);

    const searchType = queryParams.get("searchType");
    const text = queryParams.get("text");

    useEffect(() => {
        async function loadPostsSearchData() {
            const response = await loadPostsSearchList(searchType, text);
            console.log(response);
        }
        loadPostsSearchData();
    }, [searchType, text]);
    return null;
};

export default PostsSearchList;
