import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged} from "firebase/auth";
import React, {createContext, useContext, useState, useEffect} from "react";
import { auth } from "../Auth/firebaseConfig";

export const authContext = createContext();

export const AuthContextProvider = ({children}) => {

    const [user, setUser] = useState();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
            console.log(user);
        }) 
        return () => { unsubscribe();
        }
    }, [])

    const SignUp = (email, password) => {

        return createUserWithEmailAndPassword(auth, email, password);
    }

    const SignIn = (email, password) => {

        return signInWithEmailAndPassword(auth, email, password)
    }

    const LogOut = () => {

        return signOut(auth)
    }

    return <authContext.Provider value={{user, SignUp, SignIn, LogOut}} >{children}</authContext.Provider>

}

export const userAuth = () => {
    return useContext(authContext)
}
