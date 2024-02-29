import { Wrapper as SocialSignUpWrapper } from "../../styles/components/auth/Wrapper";
import { Title as SocialSignUpTitle } from "../../styles/components/auth/Title";
import AuthSocialSignUpForm from "../../containers/auth/AuthSocialSignUpForm";

const AuthSocialSignUp = () => {
    return (
        <>
            <SocialSignUpWrapper>
                <SocialSignUpTitle>회원가입</SocialSignUpTitle>
                <AuthSocialSignUpForm />
            </SocialSignUpWrapper>
        </>
    );
};

export default AuthSocialSignUp;
