import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { loadPostsList } from "../../services/posts/posts";
import ListContainer from "./ListContainer";

const PostsCategoryList = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const categoryId = queryParams.get("category_id");
    const [listData, setListData] = useState();
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        async function loadPostListData() {
            const response = await loadPostsList(categoryId);
            setListData(response);
        }
        loadPostListData();
    }, [categoryId]);

    useEffect(() => {
        if (!!listData) {
            setIsLoading(true);
        }
    }, [listData]);

    return (
        <>
            {isLoading
                ? listData.map((item, key) => {
                      return (
                          <ListContainer key={key} item={item}></ListContainer>
                      );
                  })
                : null}
        </>
    );
};

export default PostsCategoryList;
