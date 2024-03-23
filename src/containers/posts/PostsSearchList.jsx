import { useEffect } from "react";
import { useLocation, useOutletContext } from "react-router-dom";
import { loadPostsSearchList } from "../../services/posts/posts";
import TabList from "./TabList";
import PostsListTitle from "../../styles/components/posts/PostsListTitle";
import styled from "styled-components";

const CategoryTitle = styled(PostsListTitle)``;

const PostsSearchList = () => {
    const location = useLocation();

    const { categoryItem } = useOutletContext();

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

    const categoryText = (categoryId) => {
        return categoryItem.find((obj) => obj.categoryId === Number(categoryId))
            ?.categoryName;
    };

    useEffect(() => {
        console.log(categoryItem);
    }, [categoryItem]);
    return (
        <>
            <div
                style={{
                    width: "610px",
                    margin: "60px auto 0px auto",
                    display: "flex",
                    justifyContent: "space-between",
                }}
            >
                <div style={{ width: "400px" }}>
                    <PostsListTitle>"{text}"에 대한 검색결과</PostsListTitle>
                </div>
                <CategoryTitle>{categoryText(categoryId)}</CategoryTitle>
            </div>
            <TabList
                menuItem={[
                    { id: "title", name: "제목" },
                    { id: "content", name: "내용" },
                    { id: "creator", name: "작성자" },
                ]}
                defaultValue={searchType}
                text={text}
            ></TabList>
        </>
    );
};

export default PostsSearchList;
