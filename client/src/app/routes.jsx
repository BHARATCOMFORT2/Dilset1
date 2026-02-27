import { BrowserRouter, Routes, Route } from "react-router-dom";

// layout
import Navbar from "../components/layout/Navbar";

// pages
import Home from "../pages/Home/Home";
import Login from "../pages/Auth/Login";
import Profile from "../pages/Profile/Profile";
import Matches from "../pages/Dating/Matches";
import Random from "../pages/Random/Random";
import Dating from "../pages/Dating/Dating";
import Friendship from "../pages/Friendship/Friendship";
import Marriage from "../pages/Marriage/Marriage";
import Remarriage from "../pages/Remarriage/Remarriage";
import Talk from "../pages/Talk/Talk";
import Chat from "../pages/Chat/Chat";
import ProfileView from "../pages/ProfileView/ProfileView";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* main */}
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
<Route path="/user/:uid" element={<ProfileView />} />
        {/* modes */}
        <Route path="/random" element={<Random />} />
        <Route path="/dating" element={<Dating />} />
        <Route path="/friendship" element={<Friendship />} />
        <Route path="/marriage" element={<Marriage />} />
        <Route path="/remarriage" element={<Remarriage />} />
        <Route path="/talk" element={<Talk />} />

        {/* social */}
        <Route path="/matches" element={<Matches />} />
        <Route path="/chat/:chatId" element={<Chat />} />

        {/* user */}
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}
