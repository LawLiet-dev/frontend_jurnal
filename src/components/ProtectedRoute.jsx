import { Navigate, Outlet } from 'react-router-dom';
import { useAuthStore } from '../store/auth';

const ProtectedRoute = ({ allowedRoles }) => {
    const { user } = useAuthStore();
    
    if (!user) {
        return <Navigate to="/login" replace />;
    }
    
    if (!allowedRoles.includes(user.role)) {
        return <Navigate to="/403" replace />;
    }
    
    return <Outlet />;
};

export default ProtectedRoute;