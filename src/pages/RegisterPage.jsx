import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import toast from "react-hot-toast";
import { useFirebase } from "../context/Firebase.jsx";
import {
  getAuth,
  updateProfile,sendEmailVerification
} from "firebase/auth";
import { useEffect } from "react";


// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// import { app } from "../firebase.js";

// const auth = getAuth(app);

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history=useNavigate();

  const firebase = useFirebase();

  const{isAuthenticated}=useFirebase();

  useEffect(() => {
    const storedAuthState = localStorage.getItem("isAuthenticated");
    if (storedAuthState === "true") {
      firebase.setIsAuthenticated(true);
      history("/");
    } else {
      firebase.setIsAuthenticated(false);
    }
  }, [isAuthenticated]);

  

  const createUser = (e) => {
    e.preventDefault();

    //     createUserWithEmailAndPassword(auth, email, password)
    //       .then((value) => {
    //         console.log(value);
    //         toast.success("Success");
    //       })
    //       .catch((error) => toast.error(error));

    firebase
      .signupUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
       
        // Update user display name
         const newUser = userCredential.user;
         const auth = getAuth(); // Get the authentication instance
         updateProfile(auth.currentUser, {
           displayName: name,
         })
           .then(() => {
             // Store user data in the database
             firebase.putData(`users/${newUser.email.replace(/\./g, "_")}`, {
               name: newUser.displayName,
               email: newUser.email,
             });

             // Send email verification
             sendEmailVerification(auth.currentUser)
               .then(() => {
                 toast.success("Verification email sent");
               })
               .catch((error) => {
                 console.error(error);
                 toast.error("Error sending verification email");
               });

             toast.success("User registered successfully");
             history("/login");


           })
           .catch((error) => {
             console.error(error);
             toast.error("Error updating user display name");
           });
           console.log(userCredential);
      })
      .catch((error) => {
        console.error(error);
        toast.error("Error registering user");
      });
  };

  return (
    <div className="bg-gradient-to-r from-black via-gray-900 to-black min-h-screen">
      <div className="max-w-md mx-auto py-40 text-center">
        <h1 className="text-2xl text-center text-white mb-4">Register</h1>
        <form onSubmit={createUser}>
          <input
            type="text"
            placeholder="John Doe"
            name="name"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="your@email"
            name="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="password"
            name="password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="text-white bg-blue-600 px-4 py-1 rounded-xl mt-2 mb-2"
          >
            Register
          </button>

          <div className="text-center  text-gray-400">
            Already a member ?{" "}
            <Link to={"/login"} className="underline text-white">
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
