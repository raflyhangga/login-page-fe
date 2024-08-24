import CoverBackground from "./component/CoverBackground";
import TextInput from "./component/TextInput";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "./hooks/useAuth";
import client from "./api/client";

type UserLogin = {
  username: string;
  password: string;
}

function Index() {
  const { setAuth } = useAuth();
  const [ username, setUsername ] = useState<string>('');
  const [ pass, setPass ] = useState<string>('');
  const navigate = useNavigate();

  async function submitHandler (e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const tempUser: UserLogin = {
        username,
        password: pass
    }
    console.log(tempUser);
    try {
        const resp = await client.post('/user/login',tempUser)
        const accessToken = resp?.data?.accessToken;
        console.log(accessToken);
        setAuth({ accessToken });
        setUsername('');
        setPass('');
        navigate('/home');
    } catch(err) {
        console.log(err);
    }
}

  return (
    <div className="flex h-screen overflow-clip gap-0">
      <CoverBackground />
      <div className="flex flex-col gap-5 items-center justify-center grow">
        <h1 className="text-4xl font-bold">Login</h1>
        <div className="w-[30%]" >
          <form onSubmit={submitHandler}>
            <div className="flex flex-col items-center gap-2">
              <TextInput 
                label="Username"
                onChange={(e) => {
                  setUsername(e.target.value);
                }} 
              />
              <TextInput 
                label="Password" 
                onChange={(e) => {
                  setPass(e.target.value);
                }}
                isPassword 
              />
              <div className="w-full">
                <button className="bg-slate-800 px-5 py-3 mb-3 rounded-md font-bold text-white drop-shadow-xl hover:invert">
                  Login
                </button>
                <Link to={`/register`} className="text-blue-600 shadow-sm font-semibold">
                  <p>Doesn't have an account? register here.</p>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Index
