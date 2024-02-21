import styled from "styled-components";

import { Wrapper as UpdateWrapper } from "../../styles/components/mypage/Wrapper";
import { Title as UpdateTitle } from "../../styles/components/mypage/Title";
import UpdateUser from "../../containers/mypage/UpdateUser";

const Update = () => {
    return (
        <>
            <UpdateWrapper>
                <UpdateTitle>계정 설정</UpdateTitle>
                <UpdateUser />
            </UpdateWrapper>
        </>
    );
};

export default Update;
