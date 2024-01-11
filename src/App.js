import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Main from "./routes/Main";
import Login from "./routes/Login";
import SignUp from "./routes/SignUp";
import MyPage from "./routes/MyPage";
import UpdateUser from "./routes/UpdateUser";
import NotFound from "./routes/NotFound";
import Result from "./routes/Result";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/login" element={<Login />} />
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
