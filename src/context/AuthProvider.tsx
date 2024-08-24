import { createContext, useState } from "react";

export type AuthContextType = {
    auth: {
        accessToken?: string
    };
    setAuth: React.Dispatch<React.SetStateAction<object>>; 
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
    const [ auth,setAuth ] = useState({});
    return (
        <AuthContext.Provider value={{auth,setAuth}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;
