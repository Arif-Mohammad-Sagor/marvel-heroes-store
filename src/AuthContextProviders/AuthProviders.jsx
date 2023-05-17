import React, { createContext } from "react";
import { GoogleAuthProvider,GithubAuthProvider,signInWithPopup } from "firebase/auth";
import auth from '../firebase/firebase.config';
export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProviders = ({ children }) => {

    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }

    const signInWithGithub = () => {
        return signInWithPopup(auth, githubProvider);
    }

    const authInfo = {
        signInWithGoogle,
        signInWithGithub,

    };

  return (
      <AuthContext.Provider value={authInfo}>
         {children}
      </AuthContext.Provider>
  );
};

export default AuthProviders;
