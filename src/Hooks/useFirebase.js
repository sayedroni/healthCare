import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,signOut } from "firebase/auth";
import initializeauth from "../Components/firebase/Firebase.intialization";

initializeauth();

const useFirebase = () =>{
    const [user,setUser] = useState({});

    const auth = getAuth();
    const googleprovider = new GoogleAuthProvider();

    const signInWithGoogle = ()=>{
        signInWithPopup(auth,googleprovider)
        .then(results =>{
            console.log(results.user)
        });
    };

    const logOut = ()=>{
        signOut(auth)
        .then(()=>{
            setUser({})
        });
    };

    useEffect( () => {
        onAuthStateChanged(auth, (user)=>{
            if(user) {
                setUser(user);
            }
        });
    }, []);

    return {
        user,
        signInWithGoogle,
        logOut
    }
}

export default useFirebase;