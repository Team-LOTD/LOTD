import Axios from "axios";

export const searchUser = (memberId) => {
    try {
        const response = Axios.get("/api/members", {
            headers: {
                Authorization:
                    "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJBQ0NFU1MiLCJpYXQiOjE3MDgwODI5NjMsImV4cCI6MTcwODA4NjU2MywibWVtYmVySWQiOiJhZHNmdyJ9.pmNJNa4FPshcnNeCg1rs7Wzgw1tEJSmT0FS_x7gYvGQ6RMl_drD-QuBs19S-DfJPCyapl7eZNGt_KuEo2rFPNw",
                "Authorization-refresh":
                    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJSRUZSRVNIIiwiaWF0IjoxNzA0OTcyMDMwLCJleHAiOjE3MDYxODE2MzAsImVtYWlsIjoiamF5am95MDUxQG5hdmVyLmNvbSJ9.-E1PR3zxzGI2zQbURC-hAblgr-",
            },
            params: {
                id: memberId,
            },
        });
        console.log(response);
        return response.data;
    } catch (error) {
        console.log("Error searchUser data", error);
        throw error;
    }
};

// export const changeNickname = (nickname) => {
//     try {
//         const response = Axios.put("/api/")
//     }
// }
