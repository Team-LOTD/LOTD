import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";

import ListBox from "../../styles/components/posts/PostsListBox";
import TabList from "../posts/TabList";

const MainContainer = () => {
    const { tabsItem } = useOutletContext();
    const [tabs, setTabs] = useState([]);
    const [defaultValue, setDefaultValue] = useState();

    useEffect(() => {
        if (tabsItem.length !== 0) {
            const filterTabs = tabsItem.filter(
                (item) =>
                    item.categoryName === "전체글" ||
                    item.categoryName === "인기글"
            );

            const reassign = filterTabs.map((item) => {
                const { categoryId, categoryName, ...rest } = item;
                return { id: categoryId, name: categoryName, ...rest };
            });

            setTabs(reassign);

            const filterDefaultValue = tabsItem.find(
                (obj) => obj.categoryName === "전체글"
            ).categoryId;

            setDefaultValue(filterDefaultValue);
        }
    }, [tabsItem]);

    return (
        <>
            <ListBox>
                <TabList menuItem={tabs} defaultValue={defaultValue}></TabList>
            </ListBox>
        </>
    );
};

export default MainContainer;
