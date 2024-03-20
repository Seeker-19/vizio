import React from "react";
import Upper from "./Upper.jsx";
import Down from "./Down.jsx";
import Middle from "./Middle.jsx";
import DownImage from "./DownImage.jsx";
import { useFirebase } from "../context/Firebase.jsx";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const PageDemo = () => {
  const { isAuthenticated, setIsAuthenticated ,user} = useFirebase();
  const history = useNavigate();

  useEffect(() => {
    const storedAuthState = localStorage.getItem("isAuthenticated");
    if (storedAuthState === "true") {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
      history("/login");
    }
  }, []);

  return (
    <>
      <div className="flex">
        <div className="lg:flex hidden bg-gradient-to-r from-black to-gray-800 min-h-screen w-64 px-4 py-4 ">
          <div className="flex flex-col gap-8 text-white">
            <div className="text-xl ">{user?.name}</div>
            <div className="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 *1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                  clipRule="evenodd"
                />
              </svg>
              Search
            </div>
            <div className="px-2 flex flex-col gap-2">
              <div className="flex justify-between hover:bg-gray-700 px-4 py-2 rounded-2xl">
                Anurag's Team
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="px-4 py-2 hover:bg-gray-700 rounded-2xl">
                demo
              </div>
              <div className="hover:bg-gray-700 py-2 px-4 rounded-2xl">
                demo
              </div>
              <div className="hover:bg-gray-700 rounded-2xl py-2 px-4">
                Demo Project
              </div>
            </div>
          </div>
        </div>

        <div className=" flex-1 min-h-screen flex flex-col">
          <div
            className="min-h-48"
            style={{ backgroundColor: "rgb(20 31 43)" }}
          >
            <div className="px-4 flex flex-col gap-8 py-5">
              <Upper />
              <Middle />
              <Down />
            </div>
          </div>
          <div className="bg-gray-900 flex-grow">
            <DownImage />
          </div>
        </div>
      </div>
    </>
  );
};

export default PageDemo;
