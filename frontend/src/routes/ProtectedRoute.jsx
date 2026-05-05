import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute({ children }) {
	const isAuthenticated = true; // replace later

	if (!isAuthenticated) {
		return <Navigate to="/auth/login" replace />;
	};

	return children ? children : <Outlet />;
};
