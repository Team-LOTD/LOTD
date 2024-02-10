const validationPatterns = {
    memberIdRegex: /^[A-Za-z\d@]{4,15}$/,
    passwordRegex:
        /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~\\/-])[a-zA-Z\d!@#$%^&*()_+{}[\]:;<>,.?~\\/-]{8,20}$/,
    nicknameRegex: /^[a-zA-Z0-9가-힣]{2,16}$/,
    realnameRegex: /^[a-zA-Z가-힣]{2,}$/,
    ageRegex: /^(1[4-9]|[2-9][0-9]|100)$/,
};

export default validationPatterns;
