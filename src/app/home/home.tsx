import client from "../../api/client";
import { useState,useEffect } from "react";
import Logout from "./-components/Logout";
import useAuth from "../../hooks/useAuth";

function Home() {
    const [name,setName] = useState<string>('Your Name');
    const { auth } = useAuth();
    const authToken = `Bearer ${auth.accessToken}`;

    useEffect(() => {
        async function fetchData() {
            try {
                // console.log(`authToken: ${authToken}`);
                console.log(auth.accessToken);
                console.log(authToken);
                const resp = await client.get('/user/session/profile',{
                    headers: {
                        Authorization: authToken
                    }
                });
                console.log(resp.data.name);
                setName(resp?.data?.name);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    },[auth.accessToken,authToken])

    return (
        <div className="flex items-center justify-center">
            <div className="flex items-center gap-10 pt-[3rem]">
                <div>
                    <p>Welcome!</p>
                    <h1 className="font-bold text-xl">{name}</h1>
                </div>
                <div>
                    <Logout />
                </div>
            </div>
        </div>
    );
}

export default Home;
