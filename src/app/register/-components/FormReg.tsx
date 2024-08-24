import TextInput from "../../../component/TextInput";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import client from "../../../api/client";

type User = {
    name: string;
    username: string;
    password: string;
}

function FormReg(): JSX.Element {
    const [ name, setName ] = useState<string>('');
    const [ username, setUsername ] = useState<string>('');
    const [ pass, setPass ] = useState<string>('');
    const navigate = useNavigate();

    async function submitHandler (e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const tempUser: User = {
            name,
            username,
            password: pass
        }
        console.log(tempUser);
        try {
            const resp = await client.post('/user/register',tempUser)
            console.log(resp.status);
            navigate('/');
        } catch(err) {
            console.log(err);
        }
    }

    return (
        <div className="w-[45%]">
          <form onSubmit={submitHandler}>
            <div className="flex flex-col items-center gap-2">
              <TextInput 
                label="Name"
                onChange={(e) => {
                    setName(e.target.value);
                }} 
              />
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
              <button className="bg-slate-800 px-5 py-3 rounded-md font-bold text-white drop-shadow-xl hover:invert">
                Register
              </button>
            </div>
          </form>
        </div>
    );
}

export default FormReg;