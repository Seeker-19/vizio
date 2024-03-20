import { createContext, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  onAuthStateChanged
} from "firebase/auth";
import { useContext } from "react";
import { getDatabase, set, get, ref, child, onValue } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAeaoQAEGVRaC06D2-UsDYkJjYlmQnG-gI",
  authDomain: "start-24bf8.firebaseapp.com",
  projectId: "start-24bf8",
  storageBucket: "start-24bf8.appspot.com",
  messagingSenderId: "538383123151",
  appId: "1:538383123151:web:8cd9b133810aa56f002dba",
};

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const database = getDatabase(firebaseApp);
const googleProvider = new GoogleAuthProvider();

//firebaseAuth.setPersistence("LOCAL");

const FirebaseContext = createContext(null);

export const useFirebase = () => useContext(FirebaseContext);

export const FirebaseProvider = (props) => {
  const signupUserWithEmailAndPassword = (email, password) => {
    return createUserWithEmailAndPassword(firebaseAuth, email, password);
  };

  const putData = (key, data) => set(ref(database, key), data);

  const signupWithGoogle = () => {
    return signInWithPopup(firebaseAuth, googleProvider);
  };

  const signEmailAndPassword = (email, password) => {
    return signInWithEmailAndPassword(firebaseAuth, email, password);
  };

  const [user, setUser] = useState(null);

  const[isAuthenticated,setIsAuthenticated]=useState(false);

   useEffect(() => {
     const unsubscribe = onAuthStateChanged(firebaseAuth, (user) => {
       if (user) {
         setUser({name:user.displayName,email:user.email});
       } else {
         setUser(null);
       }
     });

     return () => unsubscribe();
   }, []);

  //   get(child(ref(database), "users/anurag")).then((snapshot) => {
  //     console.log(snapshot.val());
  //   });

//   useEffect(() => {
//     onValue(ref(database, "users/anurag"), (snapshot) => {
//       setUser(snapshot.val());
      
//     });
//   }, []);

const getData = async (key) => {
  const snapshot = await get(ref(database, key));
  if (snapshot.exists()) {
    return snapshot.val();
  } else {
    return null;
  }
};

  return (
    <FirebaseContext.Provider
      value={{
        signupUserWithEmailAndPassword,
        putData,
        signupWithGoogle,
        signEmailAndPassword,
        firebaseAuth,
        user,
        setUser,
        database,
        getData,
        isAuthenticated,
        setIsAuthenticated
      }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};
