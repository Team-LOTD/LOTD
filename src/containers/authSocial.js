export const KakaoLogin = () => {
    const rest_api_key = "046553c126043de85824e564e55a6e69";
    const redirect_uri = "http://localhost:3000/auth/kakao";
    const state = "asdf";
    const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${rest_api_key}&redirect_uri=${redirect_uri}&response_type=code&state=${state}`;

    return (window.location.href = kakaoURL);
};
