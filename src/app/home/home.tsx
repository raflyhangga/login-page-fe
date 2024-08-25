// import client from "../../api/client";
import { useState,useEffect } from "react";
import Logout from "./-components/Logout";
import useAuth from "../../hooks/useAuth";
import useRefreshToken from "../../hooks/useRefreshToken";
import { clientPrivate } from "../../api/client";

function Home() {
    const [name,setName] = useState<string>('Your Name');
    const refresh = useRefreshToken();
    const { auth } = useAuth();
    
    useEffect(() => {
        const authToken = `Bearer ${auth.accessToken}`;
        const controller = new AbortController();
        async function fetchData() {
            try {
                const resp = await clientPrivate.get('/user/session/profile',{
                    headers: {
                        Authorization: authToken
                    },
                    signal: controller.signal
                });
                setName(resp?.data?.name);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();

        return () => {
            controller.abort()
        }
    },[auth.accessToken])

    return (
        <div className="flex items-center justify-center">
            <div className="flex items-center gap-10 pt-[3rem]">
                <div>
                    <p>Welcome!</p>
                    <h1 className="font-bold text-xl">{name}</h1>
                </div>
                <div>
                    <Logout />
                    <button className="py-2 px-3 bg-blue-600 rounded-md text-white hover:invert" onClick={(e) => {
                        e.preventDefault();
                        refresh();
                    }} >Refresh</button>
                </div>
            </div>
        </div>
    );
}

export default Home;
