import React, { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider,createUserWithEmailAndPassword,onAuthStateChanged,signInWithEmailAndPassword,signInWithPopup, signOut } from "firebase/auth";
import auth from '../firebase/firebase.config';
export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();


const AuthProviders = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const signInWithGithub = () => {
        setLoading(true);
        return signInWithPopup(auth, githubProvider);
    }
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }
    useEffect(() => {
        setLoading(true)
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false);
        })
        return () => {
            unsubscribe();
        }
    }, [])
    const logOut = () => {
        return signOut(auth);
    }

    const authInfo = {
      signInWithGoogle,
      signInWithGithub,
      loading,
      user,
      logOut,
      createUser,
      loginUser,
    };

  return (
      <AuthContext.Provider value={authInfo}>
         {children}
      </AuthContext.Provider>
  );
};

export default AuthProviders;
