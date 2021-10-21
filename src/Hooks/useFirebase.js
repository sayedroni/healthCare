import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,signOut,createUserWithEmailAndPassword,signInWithEmailAndPassword ,updateProfile  } from "firebase/auth";
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

    ////////Email and pass login
    const regInwithEmail = ()=>{
        createUserWithEmailAndPassword(auth, email, pass)
        .then( results => {
          const user = results.user;
          console.log(user);
          setUserName();
        });
      }

      const setUserName = ()=>{
        updateProfile(auth.currentUser, {displayName:name})
        .then(results=>{

        })
      }

    const signInwithEmail = ()=>{
        signInWithEmailAndPassword(auth,email, pass)
        .then( results => {
          
        });
      }

    const [email,setemail] = useState('');
    const [pass,setpass] = useState('');
    const [name,setname] = useState('');

  const handelEmail = email =>{
    setemail(email.target.value)
  }
  const handelPass = pass =>{
    setpass(pass.target.value)
  }
  const handelText = name =>{
    setname(name.target.value)
  }

  const reghandler =  e => {
    console.log(email,pass,name)
    e.preventDefault();
  }

    ////////Email and pass login

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
        logOut,
        handelEmail,
        handelPass,
        reghandler,
        regInwithEmail,
        signInwithEmail,
        handelText
    }
}

export default useFirebase;