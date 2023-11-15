"use client";
import { createContext, useContext, useEffect, useState } from "react";
import {
  collection,
  limit,
  onSnapshot,
  orderBy,
  query,
  doc,
  increment,
  updateDoc,
  setDoc,
  getDoc,
} from "firebase/firestore";
import { auth, db } from "@/firebase/firebase.config";
import firebase from "firebase/app";
import { useRouter } from "next/navigation";
import {
  sendPasswordResetEmail,
  onAuthStateChanged,
  sendEmailVerification,
  signOut,
  getAuth,
  updateProfile,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  OAuthProvider
} from "firebase/auth";

export const AuthenticationContext = createContext();

export const AuthenticationProvider = ({ children }) => {
  const [reader, setReader] = useState(null);
  const [changed, setChanged] = useState(false);
  const [readers, setReaders] = useState([]);
  const [readerData, setReaderData] = useState(null);
  const [logining, setLogining] = useState(false);
  const [apploading, setAppLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(true);
  const [quota, setQuota] = useState(false);
  const [myLogs, setMyLogs] = useState([]);
  const [myLogsLoading, setMyLogsLoading] = useState(true);

  const [regForm, setRegForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPass: "",
  });

  const router = useRouter();

  const {name,email,password} = regForm;

  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const userObj = {
    createdAt: new Date(),
    updatedAt: new Date(),
    active: false,
    likes: 0,
    comments: 0,
    dislikes: 0,
  };

  const providerG = new GoogleAuthProvider();
  const providerA = new OAuthProvider('apple.com');

  const whatTranslator={
    1:{code:1,p:1,tr:"Beğeni"},
    2:{code:2,p:1,tr:"Beğenmeme"},
    3:{code:3,p:1,tr:"Yorum Yapma"},
    4:{code:4,p:1,tr:"Favorileme"},
    5:{code:5,p:1,tr:"ilgilendiği kategori"},
    6:{code:5,p:1,tr:"ilgilendiği etiket"},
  }
  
  const googlelogin = async (e) => {
    e.preventDefault();

    const subs = await signInWithPopup(auth, providerG);

    await setDoc(doc(db, "Readers", subs.user.uid), {
      readerid: subs.user.uid,
      name: subs.user.name,
      email: subs.user.email,
      provider: subs.user.operationType,
      createdAt: new Date(),
      readerUnique: new Date().valueOf().toString().substring(6),
      updatedAt: "",
      activedAt: false,
      interestedCat: "",
      interestedTag: "",
      likes: "",
      comments: "",
      dislikes: "",
    }).then(() => setLogining(false));
    // This gives you a Google Access Token. You can use it to access the Google API.
    // The signed-in user info.
  };

  const applelogin = async (e) => {
    e.preventDefault();

    const subsA = await signInWithPopup(auth, providerA)
  
    await setDoc(doc(db, "Readers", subsA.user.uid), {
      readerid: subsA.user.uid,
      name: subsA.user.name,
      email: subsA.user.email,
      provider: subsA.user.operationType,
      createdAt: new Date(),
      readerUnique: new Date().valueOf().toString().substring(6),
      updatedAt: "",
      activedAt: false,
      interestedCat: "",
      interestedTag: "",
      likes: "",
      comments: "",
      dislikes: "",
    }).then(() => setLogining(false));
  }

  const onSubmitRegisterHandler = (e) => {
    e.preventDefault();
  };

  const onSubmitLoginHandler = (e) => {
    e.preventDefault();
  };

  const handleLoginFormChange = (e) => {
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
  };

  const handleRegFormChange = (e) => {
    setRegForm({ ...regForm, [e.target.name]: e.target.value });
  };

  const addManner=async(collect,what,path,detailStr)=>{

    var userid=auth.currentUser.uid;
    var idForAll=new Date().valueOf().toString();
    var colreferance=doc(db,"Readers",userid,collect,idForAll)
    try {
      await setDoc(colreferance,{
        what:what,
        id:idForAll,
        referance:path,
        detailStr:detailStr
      })
    } catch (error) {
      return
    }

  }
  const addLogToNew=async(item,collect)=>{

    var userid=auth.currentUser.uid;
    var colreferanceone=doc(db,item?.category,item.id)
    var colreferancedeep=doc(db,item?.category,item.id,collect,userid)
    try {
      await updateDoc(colreferanceone,{
        likes:increment(1)
      })
    } catch (error) {
      return
    }
    try {
      await setDoc(colreferancedeep,{
        who:userid,
        when:new Date(),
      })
    } catch (error) {
      return
    }

  }
  const errorTranslater = (message) => {
    if (message === "Firebase: Error (auth/wrong-password).") {
      setErrorMessage("E-posta ve/ veya şifre hatalı");
    } else if (message === "Firebase: Error (auth/user-not-found).") {
      setErrorMessage("Böyle bir kullanıcı bulunamadı");
    } else if (
      message ===
      "FirebaseError: Firebase: Password should be at least 6 characters (auth/weak-password)."
    ) {
      setErrorMessage("Şifreniz en az 6 karakterli olması gerekmektedir.");
    }
  };

  useEffect(() => {
    (async () => {
      const q = query(collection(db, "Readers"));
      try {
        const readerGetting = onSnapshot(q, (snap) => {
          var list = [];
          snap.forEach((doc) => {
            list.unshift({ ...doc.data() });
          });
          setReaders(list);
        });
        return () => readerGetting();
      } catch (error) {
        console.log(error.message);
        if (error.message === "Quota exceeded.") {
          console.log("bedava bitti");
          reportQuotaExceeded("readers pulling");
        }
      }
    })();
  }, []);

  useEffect(() => {
    const getUser = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setReader(currentUser);
        const userRef = doc(db, "Readers", currentUser.uid);
        getDoc(userRef).then((doc) => {
          if (doc.exists()) {
            setReaderData(doc.data());
          } else {
            console.log("user yok");
          }
        });
        setAppLoading(false);
      } else {
        setAppLoading(false);
      }
      setErrorMessage(null);
    });
    try {
      getUser();
    } catch (error) {
      console.log("hata");
    }
  }, [changed]);

   const register = async (e,go) => {
     e.preventDefault();
     let a, b, c;
     if (regForm.password !== regForm.confirmPass) {
       setLogining(false);
       setErrorMessage("Şifreler eşleşmiyor");
     } else {
       try {
         const auth = getAuth();
         a = await createUserWithEmailAndPassword(
           auth,
           regForm.email,
           regForm.password
         );
         setReader(a.user);
       } catch (error) {
       setLogining(false);
         errorTranslater(error.message);
         console.log(error);
       }
       try {
         b = updateProfile(auth.currentUser, { displayName: regForm.name });
       } catch (error) {
         setLogining(false);
         errorTranslater(error.message);
       }
       try {
         b = updateProfile(auth.currentUser, {
           displayName: regForm.name,
         });
       } catch (error) {
         setLogining(false); 
         errorTranslater(error.message);
       }
       try {
         c = await setDoc(doc(db, "Readers", a.user.uid), {
           readerid: a.user.uid,
           email:a.user.email,
           name:a.user.displayName,
           ...userObj,
         });
         setLogining(false);
         setErrorMessage(null);
          setRegForm({
           name: "",
           email: "",
           password: "",
           confirmPass: "",
         });
         setReaderData({
           readerid: a.user.uid,
           name: regForm.name,
           email: regForm.email,
           createdAt: new Date(),
           updatedAt: new Date(),
           activedAt: false,
           interestedCat: "",
           interestedTag: "",
           likes: "",
           comments: "",
           dislikes: "",
           readerUnique: new Date().valueOf().toString().substring(6),
         });
         await sendEmailVerification(auth.currentUser).catch((e) => {
          handleErrorMessage(e.message);
        });
        go()
      } catch (error) {
        setLogining(false);
        alert(error);
      }
      return a + b + c;
    }
   };

  const logout = async (e) => {
    e.preventDefault();
    setLogining(true);
    await signOut(auth)
      .then(() => setReader(null))
      .then(() => setLogining(false));
  };
  const reportQuotaExceeded = (cause) => {
    setQuota({ cond: true, cause: cause });
  };

  const login = async (e, go) => {
    e.preventDefault();
    setLogining(true);
    try {
      await signInWithEmailAndPassword(
        auth,
        loginForm.email,
        loginForm.password
      )
        .then((user) => setReader(user.user))
        .then(() => {
          setErrorMessage(null);
          setLogining(false);
          setAppLoading(false);
          go();
        })
        .catch((e) => {
          setLogining(false);
          errorTranslater(e.message);
        });
    } catch (error) {
      setLogining(false);

      if (error.message == "Quota exceeded.") {
        console.log("bedava bitti");
        reportQuotaExceeded("login");
      }
    }
  };
  const handleErrorMessage = () => {
    setErrorMessage(null);
  };

  const submitReset = (e) => {
    e.preventDefault();
    sendPasswordResetEmail(auth, loginForm.email)
      .then(() => alert("Şifre Yenileme E-Postası adresinize gönderildi. "))
      .catch((e) => handleErrorMessage(e.message));
  };

  const amIauthorized = (field) => {
    //await getUserData()
    return Boolean(userData?.[field]);
  };

   useEffect(() => {
     async () => {
       const q = query(collection(db, "Readers"));
       try {
         const newsGetting = onSnapshot(q, (snap) => {
           var list = [];

           snap.forEach((doc) => {
             list.unshift({ ...doc.data() });
           });
           setReaders(list);
         });
         return () => newsGetting();
       } catch (error) {
         console.log(error.message);
       }
     };
 });

 const changedUser=()=>{
  setChanged(pre=>!pre)
}

  const values = {
    readers,
    register,
    logout,
    applelogin,
    logining,
    reader,
    apploading,
    login,
    errorMessage,
    handleErrorMessage,
    reportQuotaExceeded,
    quota,
    submitReset,
    readerData,
    handleLoginFormChange,
    onSubmitRegisterHandler,
    handleRegFormChange,
    regForm,
    amIauthorized,
    googlelogin,
    loginForm,
    onSubmitLoginHandler,
    changedUser
  };

  return (
    <AuthenticationContext.Provider value={values}>
      {children}
    </AuthenticationContext.Provider>
  );
};
export const useAuthenticationContext = () => useContext(AuthenticationContext);
