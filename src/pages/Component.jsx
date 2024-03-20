import React from "react";
import logo from "./design2.png";

const Component = () => {
  return (
    <>
      <div className="grid lg:grid-cols-2 md:grid-cols-2  gap-6  text-white lg:px-72 px-20 py-10 pb-40  ">
        <div className=" object-cover w-full md:h-96 overflow-hidden lg:h-screen">
          <img className="w-full h-full rounded-3xl" src={logo} alt="" />
        </div>
        <div className="flex flex-col gap-1 justify-center px-8">
          <div className="lg:text-2xl">All the comments. All in one place.</div>
          <div className="lg:text-xl text-gray-400 pr-6">
            Replace jumbled email chains with a single, consolidated comment
            list. People can leave notes at any time, and the latest feedback is
            always easy for everyone to find.
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-6  text-white lg:px-72 px-20 pb-20  ">
        <div className=" object-cover w-full md:h-96 overflow-hidden flex lg:hidden md:hidden ">
          <img className="w-full h-full rounded-3xl" src={logo} alt="" />
        </div>
        <div className="flex flex-col gap-1 justify-center px-8">
          <div className="lg:text-2xl">All the comments. All in one place.</div>
          <div className="lg:text-xl text-gray-400 pr-6">
            Replace jumbled email chains with a single, consolidated comment
            list. People can leave notes at any time, and the latest feedback is
            always easy for everyone to find.
          </div>
        </div>
        <div className=" object-cover w-full md:h-96 overflow-hidden lg:h-screen lg:flex md:flex hidden">
          <img className="w-full h-full rounded-3xl" src={logo} alt="" />
        </div>
      </div>
    </>
  );
};

export default Component;
