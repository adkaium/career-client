import React, { useEffect, useState } from "react";
import {AuthContexts} from "./AuthContexts";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase.init";

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const[loading, setLoading] = useState(true);
    const [user, setUser]=useState(null);
    const createUser =(email, password)=>{
        setLoading(true);
       return createUserWithEmailAndPassword(auth, email, password);
    }
    const signIn =(email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const signInWithGoogle =()=>{
      setLoading(true);
      return signInWithPopup(auth, googleProvider);
    }
    const signOutUser =()=>{
      setLoading(true);
      return signOut(auth);
    }

    useEffect(()=>{
      const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
         setUser(currentUser);
         setLoading(false);
         console.log("change user on current",currentUser);
      })
      return()=>{
        unsubscribe();
      }
    },[])



  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    signInWithGoogle,
    signOutUser

  };
  return <AuthContexts value={authInfo}>{children}</AuthContexts>;
};

export default AuthProvider;
