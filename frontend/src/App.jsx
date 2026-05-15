import React, { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { Routes, Route, Navigate, Link, useNavigate } from "react-router-dom";

import Header from "./components/layout/Header/Header.jsx";
import Footer from "./components/layout/Footer/Footer.jsx";
import AdminSideNavbar from "./components/layout/AdminSideNavbar/AdminSideNavbar.jsx";
import CoreSideNavbar from "./components/layout/CoreSideNavbar/CoreSideNavbar.jsx";
import CoreSideDiscover from "./components/layout/CoreSideDiscover/CoreSideDiscover.jsx";

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
	const navigate = useNavigate();
	const [url, setUrl] = useState(window.location.pathname);

	function findPageType(currentUrl) {
		const pathNames = {
			admin: ["/admin/comments", "/admin/dashboard", "/admin/notifications", "/admin/posts", "/admin/users"],
			auth: ["/auth/recovery", "/auth/login", "/auth/register"],
			error: ["/error/401", "/error/404"],
			user: ["/user/messages", "/user/notifications", "/user/settings"],
			core: ["/about", "/contact", "/explore", "/profile", "/"]
		};
		
		for(let i=0; i<pathNames.admin.length; i++) {
			if(currentUrl == pathNames.admin[i]) {
				return "admin";
			};
		};
		for(let i=0; i<pathNames.auth.length; i++) {
			if(currentUrl == pathNames.auth[i]) {
				return "auth";
			};
		};
		for(let i=0; i<pathNames.error.length; i++) {
			if(currentUrl == pathNames.error[i]) {
				return "error";
			};
		};
		for(let i=0; i<pathNames.user.length; i++) {
			if(currentUrl == pathNames.user[i]) {
				return "user";
			};
		};
		for(let i=0; i<pathNames.core.length; i++) {
			if(currentUrl == pathNames.core[i]) {
				return "core";
			};
		};

		return "error";
	};

	useEffect(() => {
		setUrl(window.location.pathname);
	}, [window.location.pathname]);

	return (
		<>
			{findPageType(url) != "auth" && <Header />}

			<main className="main">
				{findPageType(url) != "auth" && findPageType(url) != "admin" && <CoreSideNavbar />}
				{findPageType(url) == "admin" && <AdminSideNavbar />}

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

				{findPageType(url) != "auth" && findPageType(url) != "admin" && <CoreSideDiscover />}
			</main>

			{findPageType(url) != "auth" && <Footer />}
		</>
	);
};

export default App;
