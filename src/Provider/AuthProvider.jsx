import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from '../firebase.config';
export const AuthContext = createContext()
const googleProvider = new GoogleAuthProvider();
const gitProvider = new GithubAuthProvider();
const auth = getAuth(app)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loader,setLoader] = useState(true)

    const signUp = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signout = () => {
        setLoader(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoader(false)
        })
        return () => {
            unsubscribe()
            
        }
    }, [])
    const setName = ({name, url}) => {
        return (updateProfile(auth.currentUser, {
            displayName: name, photoURL:url}))
            

    }
    const login = (email,password) =>{
        setLoader(true)
        return signInWithEmailAndPassword(auth,email,password)
        
    }
    const loginGoogle = () =>{
        
        return signInWithPopup(auth,googleProvider)
    }
    const loginInGitHub =()=>{
        setLoader(true)
        return signInWithPopup(auth,gitProvider)
    }
    const authInfo = {
        user,
        signUp,
        setName,
        signout,
        login,
        loginGoogle,
        loginInGitHub,
        loader
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;