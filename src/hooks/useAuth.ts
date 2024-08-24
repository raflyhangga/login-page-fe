import AuthContext from "../context/AuthProvider";
import { AuthContextType } from "../context/AuthProvider";
import { useContext } from "react";

const useAuth = () => {
    return useContext(AuthContext) as AuthContextType;
}

export default useAuth;
