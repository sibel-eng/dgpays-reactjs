import { Navigate, useOutlet } from "react-router-dom";
import { useAuth } from "../../hook/useAuth";

export const HomeLayout = () => {
    const { user } = useAuth();
    const outlet = useOutlet();
  
    if (user) {
      return <Navigate to="/" replace />;
    }

    
}  