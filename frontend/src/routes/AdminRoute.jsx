import { Navigate, Outlet } from "react-router-dom";

export default function AdminRoute({ children }) {
    const isAdmin = true; // replace later

    if (!isAdmin) {
        return <Navigate to="/error/401" replace />;
    }

    return children ? children : <Outlet />;
};
