import { useEffect } from "react";

import Axios from "axios";

const List = () => {
    useEffect(() => {
        async function testAA() {
            const response = Axios.get("/api/posts", {
                params: {
                    category_id: 0,
                },
            });
            console.log(response);
        }
        testAA();
    }, []);
    return null;
};

export default List;
