import { Box, Tabs, Tab } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { loadPostsList, loadPostsSearchList } from "../../services/posts/posts";
import ListContainer from "./ListContainer";

const TabList = ({ menuItem, defaultValue, text }) => {
    const [value, setValue] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [listItem, setListItem] = useState([]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    useEffect(() => {
        if (!!defaultValue) {
            setValue(defaultValue);
        }
    }, [defaultValue]);

    const getPostsList = useCallback(async (value) => {
        const response = await loadPostsList({ categoryId: value });
        console.log(response);
        setListItem(response);
        setIsLoading(true);
    }, []);

    const getPostsSearchList = useCallback(
        async (value) => {
            const response = await loadPostsSearchList({
                searchType: value,
                text: text,
            });
            console.log(response);
            setListItem(response);
            setIsLoading(true);
        },
        [text]
    );

    useEffect(() => {
        if (value !== null) {
            if (!!text) {
                getPostsSearchList(value);
            } else {
                getPostsList(value);
            }
        }
    }, [value, text, getPostsList, getPostsSearchList]);

    useEffect(() => {
        console.log(menuItem);
    }, [menuItem]);

    return (
        <>
            {isLoading ? (
                <>
                    <Box
                        sx={{
                            width: "100%",
                            color: "#222222",
                            marginBottom: "32px",
                        }}
                    >
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            centered
                            TabIndicatorProps={{
                                style: {
                                    background: "black",
                                    color: "#222222",
                                },
                            }}
                            textColor="inherit"
                        >
                            {menuItem.map((item, index) => {
                                return (
                                    <Tab
                                        sx={{
                                            color: "#222222",
                                            fontFamily: "Pretendard",
                                            fontWeight: "500",
                                            fontSize: "16px",
                                            lineHeight: "19px",
                                            textAlign: "left",
                                            width: `calc(100% / ${menuItem.length})`,
                                        }}
                                        key={index}
                                        label={item.name}
                                        value={item.id}
                                    ></Tab>
                                );
                            })}
                        </Tabs>
                    </Box>
                    {listItem.map((item, index) => {
                        return (
                            <ListContainer
                                key={index}
                                item={item}
                            ></ListContainer>
                        );
                    })}
                </>
            ) : null}
        </>
    );
};

export default TabList;
