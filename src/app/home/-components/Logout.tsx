import client from "../../../api/client";
import { useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

function Logout() {
    const { auth,setAuth } = useAuth();
    const authToken = `Bearer ${auth.accessToken}`;
    const navigate = useNavigate();

    async function handleClick() {
        try {
            await client.delete('/user/logout',{
                headers: {
                    Authorization: authToken
                }
            });
            console.log("Logout successfull");
            setAuth({});
            navigate('/');
        } catch (error) {
            console.log(error);
        }
    }

    return <button onClick={handleClick} className="bg-orange-400 text-white px-4 py-2 rounded-md shadow hover:invert">Logout</button>
}

export default Logout;