import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebaseConfig";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
const auth = getAuth(app);

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const createUserAccount = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUserAccount = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const loginWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  const updateUserAccount = (name, photoURL) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL,
    });
  };
  const signOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setLoading(false);
      setUser(currentUser);
    });
    return () => {
      return unSubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    createUserAccount,
    loginUserAccount,
    loginWithGoogle,
    updateUserAccount,
    signOutUser,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
