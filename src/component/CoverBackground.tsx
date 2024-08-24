// import { useState, useEffect } from "react";
// import imageAPI from "../api/image-api";
import { SKELETON_IMAGE } from "../app/register/constant";

function CoverBackground() {
    // const [imageURL,setImageURL] = useState('');

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await imageAPI.get('/photos/random',{
//         params: {
//           orientation: "portrait"
//         }
//       })
//       console.log(response?.data.urls.raw);
//       setImageURL(response?.data.urls.raw);
//     } catch (err) {
//         console.log(err);
//       }
//     }
//     fetchData();
//   },[])

  return (
    <div className="w-[40%] h-full relative text-left text-white">
        {/* {imageURL == "" && <img title="sesuatu" src={SKELETON_IMAGE} className="brightness-50 h-full w-full object-cover" />} */}
        <img title="sesuatu" src={SKELETON_IMAGE} className="brightness-50 h-full w-full object-cover" />
        {/* {imageURL != "" && <img title="sesuatu" src={imageURL} className="brightness-50 h-full w-full object-cover" />} */}
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
  )
}

export default CoverBackground;
