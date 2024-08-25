import { clientPrivate } from "../api/client";
import { useEffect } from "react";
import useRefreshToken from "./useRefreshToken";
import useAuth from "./useAuth";

const useClientPrivate = () => {
    const refresh = useRefreshToken();
    const { auth } = useAuth();

    useEffect(() => {
        const requestIntercept = clientPrivate.interceptors.request.use(
            config => {
                if (!config.headers['Authorization']) {
                    config.headers['Authorization'] = `Bearer ${auth?.accessToken}`
                }
                return config;
            }, (error) => Promise.reject(error)
        )

        const responseIntercept = clientPrivate.interceptors.response.use(
            response => response,
            async (error) => {
                const prevRequest = error?.config;
                if (error?.response?.status === 403 && !prevRequest?.sent) {
                    prevRequest.sent = true;
                    const newAccessToken = await refresh();
                    prevRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;

                    return clientPrivate(prevRequest);
                }

                return Promise.reject(error);
            }
        )

        return () => {
            clientPrivate.interceptors.response.eject(responseIntercept);
            clientPrivate.interceptors.request.eject(requestIntercept);
        }
    },[refresh,auth])

    return clientPrivate;
}

export default useClientPrivate;
