import React from "react";
import image from "./design.png";

const Image = () => {
  return (
    <>
      <div>
        <div className="object-cover max-h-full overflow-hidden relative">
          <img className="rounded-t-full" src={image} alt="" />
          <div className="absolute inset-0 flex items-center justify-center">
            <p
              style={{ fontFamily: "Noto Serif" }}
              className="lg:text-4xl text-white z-20 px-8 md:px-32 text-center font-bold"
            >
              For years, creative teams have used a patchwork of tools for
              collaboration, work in-progress reviews, file transfers, and
              approvals. Vizio brings everything — and everyone — together in
              one place.
            </p>
          </div>
        </div>
      </div>

      <div className=" text-white lg:px-72 px-40 py-40 lg:py-52">
        <div className="text-center flex flex-col items-center justify-center gap-2">
          <div>
            <span className="text-blue-500 lg:text-2xl">
              Reviews and approvals
            </span>
          </div>
          <div className="lg:text-7xl font-bold tracking-tighter lg:px-48">
            Keep everyone on the same page
          </div>
          <div className="lg:text-2xl text-gray-400 mt-6 lg:px-28">
            Vizio makes feedback more specific and actionable, so you can
            reduce review cycles and speed up approvals. Less mind-reading, more
            delivering.
          </div>
        </div>
      </div>
    </>
  );
};

export default Image;
