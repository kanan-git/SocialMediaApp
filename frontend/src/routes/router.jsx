import { createBrowserRouter, Navigate } from "react-router-dom";

// ADMIN
import AdminComments from "../pages/admin/AdminComments/AdminComments.jsx";
import AdminDashboard from "../pages/admin/AdminDashboard/AdminDashboard.jsx";
import AdminNotifications from "../pages/admin/AdminNotifications/AdminNotifications.jsx";
import AdminPosts from "../pages/admin/AdminPosts/AdminPosts.jsx";
import AdminUsers from "../pages/admin/AdminUsers/AdminUsers.jsx";

// AUTH
import ForgotPassword from "../pages/auth/ForgotPassword/ForgotPassword.jsx";
import Login from "../pages/auth/Login/Login.jsx";
import Register from "../pages/auth/Register/Register.jsx";

// ERROR
import E401 from "../pages/error/E401/E401.jsx";
import E404 from "../pages/error/E404/E404.jsx";

// USER
import Messages from "../pages/user/Messages/Messages.jsx";
import Notifications from "../pages/user/Notifications/Notifications.jsx";
import Settings from "../pages/user/Settings/Settings.jsx";

// CORE
import About from "../pages/core/About/About.jsx";
import Contact from "../pages/core/Contact/Contact.jsx";
import Explore from "../pages/core/Explore/Explore.jsx";
import Home from "../pages/core/Home/Home.jsx";
import Profile from "../pages/core/Profile/Profile.jsx";

// ROUTE GUARDS
import ProtectedRoute from "./ProtectedRoute";
import AdminRoute from "./AdminRoute";

export const router = createBrowserRouter([
  // CORE ROUTES
  {
	path: "/",
	children: [
	  { index: true, element: <Home /> },
		{ path: "about", element: <About /> },
		{ path: "contact", element: <Contact /> },
		{ path: "explore", element: <Explore /> },

	  {
		path: "profile",
		element: (
			<ProtectedRoute>
				<Profile />
			</ProtectedRoute>
		),
	  },
	],
  },

  // AUTH ROUTES
  {
	path: "/auth",
	children: [
		{ path: "login", element: <Login /> },
		{ path: "register", element: <Register /> },
		{ path: "recovery", element: <ForgotPassword /> },
	],
  },

  // USER ROUTES (protected)
  {
	path: "/user",
	element: <ProtectedRoute />,
	children: [
		{ path: "messages", element: <Messages /> },
		{ path: "notifications", element: <Notifications /> },
		{ path: "settings", element: <Settings /> },
	],
  },

  // ADMIN ROUTES
  {
	path: "/admin",
	element: <AdminRoute />,
	children: [
		{ path: "dashboard", element: <AdminDashboard /> },
		{ path: "comments", element: <AdminComments /> },
		{ path: "notifications", element: <AdminNotifications /> },
		{ path: "posts", element: <AdminPosts /> },
		{ path: "users", element: <AdminUsers /> },
	],
  },

  // ERROR ROUTES
  {
	path: "/error",
	children: [
		{ path: "401", element: <E401 /> },
		{ path: "404", element: <E404 /> },
	],
  },

  // FALLBACK
  {
		path: "*",
		element: <Navigate to="/error/404" />,
  },
]);
