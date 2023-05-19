import { useContext } from "react"
import { AuthContext } from "../AuthContextProviders/AuthProviders"
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({ children }) => {

    const { user } = useContext(AuthContext);
    const location = useLocation();

    if (user) {
        return children;
    } else {
        return <Navigate to="/login"></Navigate>
    }

};
export default PrivateRoute;