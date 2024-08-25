import { useLocation, Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

type ComponentType = {
    element: JSX.Element
}

function RequireAuth({element}:ComponentType) {
    const { auth } = useAuth();
    const location = useLocation();

    console.log("Requiring auth..")
    console.log(auth);

    return (
        auth?.accessToken
            ? element
            : <Navigate to="/" state={{from: location}} replace />
    )
}

export default RequireAuth;
