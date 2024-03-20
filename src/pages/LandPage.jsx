import React from "react";
import Image from "./Image.jsx";
import Component from "./Component.jsx";
// import { getDatabase, ref,set } from "firebase/database";
// import { app } from "../firebase.js";

// const db = getDatabase(app);

const LandPage = () => {
  // const putData = () => {
  //   set(ref(db, "users/anurag"), {
  //     id: 1,
  //     name: "anurag",
  //     age: 21,
  //   });
  // };
  return (
    <div className="bg-gradient-to-r from-black via-gray-900 to-black min-h-screen">
      <div className=" px-6 py-28  flex items-center justify-center">
        <div className="flex flex-col justify-center items-center gap-8">
          <div
            className="lg:text-8xl text-4xl font-sans font-semibold text-white flex flex-col items-center justify-center gap-1 tracking-tight"
            style={{ fontFamily: "Noto Serif" }}
          >
            {/* <button className="text-white" onClick={putData}>Put data</button> */}
            <p>Next generation </p>
            <p>creative collaboration.</p>
          </div>
          <div className="lg:text-2xl text-sm text-gray-400 px-4 text-center">
            <p>
              Vizio is one central hub that lets you share media, track
              feedback,
            </p>
            <p>
              and streamline your workflow so your team can work closely
              together
            </p>
            <p> from anywhere in the world.</p>
          </div>
          <div>
            <button className="px-4 py-2 bg-gray-500 rounded-full border-2 text-white font-bold">
              Start Free Trial
            </button>
          </div>
        </div>
      </div>

      <Image />
      <Component />
    </div>
  );
};

export default LandPage;
