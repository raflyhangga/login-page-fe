import { createContext, useState } from "react";

export type AuthStateType = {
    accessToken?: string;
    refreshToken?: string;
}

export type AuthContextType = {
    auth: AuthStateType
    setAuth: React.Dispatch<React.SetStateAction<AuthStateType>>; 
}


const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
    const [ auth,setAuth ] = useState<AuthStateType>({});
    return (
        <AuthContext.Provider value={{auth,setAuth}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;
