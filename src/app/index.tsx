import { useEffect, useState } from "react";
import imageAPI from "../api/image-api";
import { SKELETON_IMAGE } from "./constant";


function Index(){
  const [imageURL,setImageURL] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await imageAPI.get('/photos/random',{
        params: {
          orientation: "portrait"
        }
      })
      console.log(response?.data.urls.raw);
      setImageURL(response?.data.urls.raw);
    } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  },[])

  return (
    <div className="flex h-screen overflow-clip gap-0">
      <div className="w-[40%] h-full relative text-left text-white">
        {imageURL == "" && <img title="sesuatu" src={SKELETON_IMAGE} className="brightness-50 h-full w-full object-cover" />}
        {imageURL != "" && <img title="sesuatu" src={imageURL} className="brightness-50 h-full w-full object-cover" />}
        <div className="absolute text-5xl text-white top-1/2 -translate-y-1/2 w-[70%]">
          <div className="flex flex-col gap-3 ml-5">
            <div className="text-6xl font-bold">
              Some Catchy Title.
            </div>
            <div className="text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores unde ipsum vitae repellendus distinctio autem suscipit ullam non! Dolor, tempore!
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5 items-center justify-center grow">
        <h1 className="text-4xl font-bold">Login</h1>
        <form>
          <div className="flex flex-col items-center gap-2">
            <div>
              <label htmlFor="username" className="text-xl mb-2" >Username</label>
              <input type="text" name="username" title="username" className="shadow-sm border-gray-500 border-2 rounded-lg my-2 w-full focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400 p-2" />
            </div>
            <div>
              <label htmlFor="password" className="text-xl mb-2" >Password</label>
              <input type="password" name="password" title="password" className="shadow-sm border-gray-500 border-2 rounded-lg my-2 w-full focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400 p-2" />
            </div>
            <button className="bg-slate-800 px-5 py-3 rounded-md font-bold text-white drop-shadow-xl hover:invert">
              Login
            </button>
          </div>
        </form>
      </div>

    </div>
  )
}

export default Index;