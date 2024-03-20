import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// import { app } from "../firebase.js";
import toast from "react-hot-toast";
import { useFirebase } from "../context/Firebase.jsx";

// const auth = getAuth(app);

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const firebase = useFirebase();

  const { setUser,setIsAuthenticated,isAuthenticated } = useFirebase();

  const history = useNavigate();

  const signinUser = async (e) => {
    e.preventDefault();

    // signInWithEmailAndPassword(auth, email, password)
    //   .then((value) => {
    //     console.log(value);
    //     toast.success("Success");
    //   })
    //   .catch((error) => toast.error(error.message));

    try {
      const userCredential = await firebase.signEmailAndPassword(
        email,
        password
      );
      const user = userCredential.user;
      //   const userData = await firebase.getData(
      //     `users/${email.replace(/\./g, "_")}`
      //   ); // Fetch user data
      //   if (user) {

      //     toast.success("Login successful");
      //     console.log("pls see",userData);

      //     localStorage.setItem("isAuthenticated", "true");

      //     setUser(userData);
      //     history("/acc"); // Navigate to "/acc" page with user's name as a parameter
      //   } else {
      //     toast.error("User data not found");

      //   }

      setUser({
        name: user.displayName,
        email: user.email,
        
      });

      localStorage.setItem("isAuthenticated", "true");

      history("/acc");

      toast.success("Login successful");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const signupWithGoogle = async () => {
    try {
      const userCredential = await firebase.signupWithGoogle();
      const usergoogle = userCredential.user;

      // Store user data in the database
      await firebase.putData(`users/${usergoogle.email.replace(/\./g, "_")}`, {
        name: usergoogle.displayName,
        email: usergoogle.email,
      });

      // Set user in state
      console.log(usergoogle);
      localStorage.setItem("isAuthenticated", "true");

      setUser({ name: usergoogle.displayName, email: usergoogle.email });

      toast.success("Success");

      history("/acc");
    } catch (error) {
      console.log(error);
    }
  };

  //   useEffect(()=>{
  //     console.log("user after", user);

  //   },[]);

  useEffect(() => {
    const storedAuthState = localStorage.getItem("isAuthenticated");
    if (storedAuthState === "true") {
      setIsAuthenticated(true);
      history("/");
    } else {
      setIsAuthenticated(false);
      
    }
  }, [isAuthenticated]);

  return (
    <div className="bg-gradient-to-r from-black via-gray-900 to-black min-h-screen">
      <div className="max-w-md mx-auto py-40 text-center">
        <h1 className="text-2xl text-center text-white mb-4">Login</h1>
        <form onSubmit={signinUser}>
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
            className="text-white bg-blue-600 px-6 py-1 rounded-xl mt-2 mb-2"
          >
            Login
          </button>
          <button
            type="submit"
            className="text-white bg-blue-600 px-4 py-1 rounded-xl mt-2 mb-2 ml-4"
            onClick={signupWithGoogle}
          >
            Sign in with Google
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
