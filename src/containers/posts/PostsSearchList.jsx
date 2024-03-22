import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { loadPostsSearchList } from "../../services/posts/posts";
import TabList from "./TabList";

const PostsSearchList = () => {
    const location = useLocation();

    const queryParams = new URLSearchParams(location.search);

    const categoryId = queryParams.get("category_id");
    const searchType = queryParams.get("search_type");
    const text = queryParams.get("text");

    useEffect(() => {
        async function loadPostsSearchData() {
            const response = await loadPostsSearchList({
                categoryId: categoryId,
                searchType: searchType,
                text: text,
            });
            console.log(response);
        }
        loadPostsSearchData();
        console.log(categoryId);
        console.log(searchType);
        console.log(text);
    }, [searchType, text, categoryId]);
    return (
        <TabList
            menuItem={[
                { id: "title", name: "제목" },
                { id: "content", name: "내용" },
                { id: "creator", name: "작성자" },
            ]}
            defaultValue={searchType}
            text={text}
        ></TabList>
    );
};

export default PostsSearchList;
