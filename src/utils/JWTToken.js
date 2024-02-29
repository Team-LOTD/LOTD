export const setJWTToken = (jwtToken) => {
    localStorage.setItem("jwt", JSON.stringify(jwtToken));
};

export const getJWTToken = () => {
    return JSON.parse(localStorage.getItem("jwt"));
};
