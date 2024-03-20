import React from "react";
import image from "./design.png";
import video from "./video.mp4";
import { useState } from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
const DownImage = () => {

     const [isPlaying, setIsPlaying] = useState(false);
     const videoRef = useRef(null);

     const history=useNavigate();

     const togglePlayPause = () => {
       if (videoRef.current) {
         if (isPlaying) {
           videoRef.current.pause();
         } else {
           videoRef.current.play();
         }
         setIsPlaying(!isPlaying);
       }
     };

     const handleDouble=()=>{

      history("/upload");
     }

  return (
    <div className="grid gap-x-4 gap-y-4 lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-4 px-4 py-4 overflow-x-hidden">
      <div className="bg-gray-700 rounded-xl w-full ">
        <div className="flex">
          <img
            className="rounded-t-xl object-cover h-48 w-full aspect-square"
            src={image}
            alt="Technology News"
          />
        </div>
        <div className="flex flex-col px-3 py-2">
          <h2 className="font-bold text-white text-sm">Technology News...</h2>
          <h3 className="text-sm text-gray-400">Anurag</h3>
        </div>
      </div>

      <div className=" bg-gray-700 rounded-xl">
        <div className="flex">
          <img
            className="rounded-t-xl object-cover h-48 w-full aspect-square"
            src={image}
          />
        </div>
        <div className="flex flex-col px-3 py-2">
          <h2 className="font-bold text-white text-sm">Technology News...</h2>
          <h3 className="text-sm text-gray-400">Anurag</h3>
        </div>
      </div>

      <div className=" bg-gray-700 rounded-xl">
        <div className="flex">
          <img
            className="rounded-t-xl object-cover h-48 w-full aspect-square"
            src={image}
          />
        </div>
        <div className="flex flex-col px-3 py-2">
          <h2 className="font-bold text-white text-sm">Technology News...</h2>
          <h3 className="text-sm text-gray-400">Anurag</h3>
        </div>
      </div>

      <div className=" bg-gray-700 rounded-xl">
        <div className="flex">
          <img
            className="rounded-t-xl object-cover h-48 w-full aspect-square"
            src={image}
          />
        </div>
        <div className="flex flex-col px-3 py-2">
          <h2 className="font-bold text-white text-sm">Technology News...</h2>
          <h3 className="text-sm text-gray-400">Anurag</h3>
        </div>
      </div>

      <div className=" bg-gray-700 rounded-xl ">
        <div className="flex">
          <img
            className="rounded-t-xl object-cover h-48 w-full aspect-square"
            src={image}
          />
        </div>
        <div className="flex flex-col px-3 py-2">
          <h2 className="font-bold text-white text-sm">Technology News...</h2>
          <h3 className="text-sm text-gray-400">Anurag</h3>
        </div>
      </div>

      <div className="relative bg-gray-700 rounded-xl h-full" onDoubleClick={handleDouble}>
        <video
          ref={videoRef}
          className="rounded-t-xl object-cover aspect-square w-full h-40"
          src={video}
          alt="Technology"
          onClick={togglePlayPause}
        />
        <div
          className={`flex flex-col px-2 py-1 absolute inset-0 items-center justify-center ${
            isPlaying ? "hidden" : "flex"
          }`}
        >
          <button
            className="bg-white text-gray-700 px-4 py-2 rounded-full"
            onClick={togglePlayPause}
          >
            Play
          </button>
        </div>
        <div className="flex flex-col px-3 py-2">
          <h2 className="font-bold text-white text-sm">Technology News...</h2>
          <h3 className="text-sm text-gray-400">Anurag</h3>
        </div>
      </div>
    </div>
  );
};

export default DownImage;
