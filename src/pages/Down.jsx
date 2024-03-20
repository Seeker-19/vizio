import React from "react";

const Down = () => {
  return (
    <div className="flex justify-between">
      <div className="text-gray-400 flex gap-6 text-md">
        <div>Media</div>
        <div className="lg:flex gap-4 hidden">
          <div>Presentations</div>
          <div>Reviews</div>
          <div>C2C Connections</div>
        </div>
      </div>

      <div className="text-gray-400 flex gap-6">
        <div>6items, 1.58 GB</div>
        <div>Custom</div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Down;
