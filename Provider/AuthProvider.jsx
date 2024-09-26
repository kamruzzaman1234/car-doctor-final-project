import { createContext, useState, useEffect } from "react";
import {auth} from '../Firebase/Firebase.config'
import { onAuthStateChanged, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
export const AuthContext = createContext(null)
const AuthProvider = ({children})=>{
    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)

    const createUser = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut =  ()=>{
        return signOut(auth)
    }

    useEffect(()=>{    
        
        const unsubscribe =  onAuthStateChanged(auth, currentUser =>{
             setUser(currentUser)
             console.log("Observing Current User ", currentUser)
             setLoading(false)
         })
         return ()=>{
             unsubscribe()
         }
     },[])
    const authInfo = {user, loading,
         createUser, loginUser, logOut}
    return(
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;