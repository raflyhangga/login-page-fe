import client from "../api/client";
import useAuth from "./useAuth";

const useRefreshToken = () => {
    const { setAuth, auth } = useAuth();

    const refresh = async () => {
        const token = auth.refreshToken;
        const response = await client.post('/token',{
            token
        });
        const accessToken = response.data.accessToken;
        setAuth(prev => ({...prev,accessToken}));
        return response.data.accessToken;
    }

    return refresh;
}

export default useRefreshToken;
