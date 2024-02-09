import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Main from "./routes/pages/Main";
import Login from "./routes/pages/Login";
import SignUp from "./routes/pages/SignUp";
import MyPage from "./routes/pages/MyPage";
import UpdateUser from "./routes/pages/UpdateUser";
import NotFound from "./routes/pages/NotFound";
import Result from "./routes/pages/Result";
import KakaoRedirect from "./routes/auth/KakaoRedirect";
import NaverRedirect from "./routes/auth/NaverRedirect";
import GoogleRedirect from "./routes/auth/GoogleRedirect";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/auth/kakao" element={<KakaoRedirect />} />
                    <Route path="/auth/naver" element={<NaverRedirect />} />
                    <Route path="/auth/google" element={<GoogleRedirect />} />
                    <Route path="/members/:id" element={<MyPage />} />
                    <Route
                        path="/members/:id/update"
                        element={<UpdateUser />}
                    />
                    <Route path="/signup/result" element={<Result />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
