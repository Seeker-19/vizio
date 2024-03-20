import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useFirebase } from "../context/Firebase.jsx";
import logoImage from "./logo.png";

const Header = () => {
  const isAuthen = localStorage.getItem("isAuthenticated");

  return (
    <div style={{ fontFamily: "Roboto Slab" }}>
      <header className="flex justify-between bg-gradient-to-br from-black via-gray-800 to-black text-white px-4 py-4 border-b-2 border-gray-700 ">
        <Link to={"/"} className="flex items-center gap-2 pl-4">
          <img
            src={logoImage} 
            alt="Logo"
            style={{width:"70px",height:"52px"}}
         
          />
          

          <span className="font-bold text-xl">Editor</span>
        </Link>

        <div
          className="lg:flex hidden gap-7 items-center justify-center "
          style={{ paddingLeft: "150px" }}
        >
          <div>Product</div>
          <div>Integrations</div>
          <div>Genstudio</div>
          <div>Customers</div>
          <div>Pricing</div>

        </div>

        <div className="flex gap-4 items-center justify-center pr-4">
          <div className="px-2 py-2 bg-blue-500 rounded-full border-2 text-white font-bold">
            {!isAuthen ? (
              <Link to={"/register"}>Signin</Link>
            ) : (
              <Link to={"/acc"}>Go</Link>
            )}
          </div>
          <div className="px-2"></div>
          <div className="px-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 -rotate-"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
              />
            </svg>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
