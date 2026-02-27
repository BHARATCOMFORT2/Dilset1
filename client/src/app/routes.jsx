import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Auth/Login";
import Profile from "../pages/Profile/Profile";

<Route path="/profile" element={<Profile />} />
export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dating" element={<Dating />} />
        <Route path="/chat/:chatId" element={<Chat />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
