import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AdminComments from "./pages/admin/AdminComments/AdminComments.jsx";
import AdminDashboard from "./pages/admin/AdminDashboard/AdminDashboard.jsx";
import AdminNotifications from "./pages/admin/AdminNotifications/AdminNotifications.jsx";
import AdminPosts from "./pages/admin/AdminPosts/AdminPosts.jsx";
import AdminUsers from "./pages/admin/AdminUsers/AdminUsers.jsx";
import ForgotPassword from "./pages/auth/ForgotPassword/ForgotPassword.jsx";
import Login from "./pages/auth/Login/Login.jsx";
import Register from "./pages/auth/Register/Register.jsx";
import About from "./pages/core/About/About.jsx";
import Contact from "./pages/core/Contact/Contact.jsx";
import Explore from "./pages/core/Explore/Explore.jsx";
import Home from "./pages/core/Home/Home.jsx";
import Profile from "./pages/core/Profile/Profile.jsx";
import E401 from "./pages/error/E401/E401.jsx";
import E404 from "./pages/error/E404/E404.jsx";
import Messages from "./pages/user/Messages/Messages.jsx";
import Notifications from "./pages/user/Notifications/Notifications.jsx";
import Settings from "./pages/user/Settings/Settings.jsx";
import "./assets/styles/animations.css";
import "./assets/styles/global.css";
import "./assets/styles/presets.css";
import "./assets/styles/variables.css";

function App() {
	return (
		<>
			<Routes>
				{/* ADMIN ROUTES */}
				<Route path="/admin/comments" element={<AdminComments />} />
				<Route path="/admin/dashboard" element={<AdminDashboard />} />
				<Route path="/admin/notifications" element={<AdminNotifications />} />
				<Route path="/admin/posts" element={<AdminPosts />} />
				<Route path="/admin/users" element={<AdminUsers />} />
		
				{/* AUTHENTICATION ROUTES */}
				<Route path="/auth/recovery" element={<ForgotPassword />} />
				<Route path="/auth/login" element={<Login />} />
				<Route path="/auth/register" element={<Register />} />
		
				{/* ERROR ROUTES */}
				<Route path="/error/401" element={<E401 />} />
				<Route path="/error/404" element={<E404 />} />
		
				{/* USER ROUTES */}
				<Route path="/user/messages" element={<Messages />} />
				<Route path="/user/notifications" element={<Notifications />} />
				<Route path="/user/settings" element={<Settings />} />
		
				{/* CORE ROUTES */}
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/explore" element={<Explore />} />
				<Route path="/profile" element={<Profile />} />
				<Route path="/" element={<Home />} />
		
				{/* REDIRECT ELSE TO E404 */}
				<Route path="*" element={<Navigate to="/error/404" />} />
			</Routes>
		</>
	);
};

export default App;
