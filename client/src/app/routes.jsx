import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Auth/Login";
import Profile from "../pages/Profile/Profile";
import Matches from "../pages/Dating/Matches";


export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/remarriage" element={<Remarriage />} />
        <Route path="/marriage" element={<Marriage />} />
        <Route path="/friendship" element={<Friendship />} />
        <Route path="/talk" element={<Talk />} />
        <Route path="/random" element={<Random />} />
        <Route path="/matches" element={<Matches />} />
<Route path="/profile" element={<Profile />} />
        <Route path="/dating" element={<Dating />} />
        <Route path="/chat/:chatId" element={<Chat />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
