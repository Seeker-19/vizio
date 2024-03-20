import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandPage from "./pages/LandPage.jsx";
import Layout from "./pages/Layout.jsx";
import PageDemo from "./pages/PageDemo.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import Upload from "./pages/Upload.jsx";
import toast, { Toaster } from "react-hot-toast";
import { useFirebase } from "./context/Firebase.jsx";
// import { onAuthStateChanged } from "firebase/auth";
import { onValue, ref } from "firebase/database";

import { useEffect } from "react";

const App = () => {
  const { user, database } = useFirebase();

  // useEffect(() => {
  //   // onAuthStateChanged(firebaseAuth, (user) => {
  //   //   if (user) {
  //   //     setUser(user);
  //   //   } else {
  //   //     setUser(null);
  //   //   }
  //   // });

    



  // }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<LandPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>
        <Route path="/acc" element={<PageDemo />} />
        <Route path="/upload" element={<Upload />} />
      </Routes>
      <Toaster />
    </Router>
  );
};

export default App;
