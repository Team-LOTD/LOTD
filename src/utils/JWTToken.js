export const setJWTToken = (jwtToken) => {
    localStorage.setItem("jwt", JSON.stringify(jwtToken));
};

export const getJWTToken = () => {
    return JSON.parse(localStorage.getItem("jwt"));
};

export const checkJWTToken = () => {
    const jwtToken = JSON.parse(localStorage.getItem("jwt"));

    return new Promise((resolve, reject) => {
        if (!jwtToken) {
            reject(false);
        } else {
            resolve(true);
        }
    });
};
